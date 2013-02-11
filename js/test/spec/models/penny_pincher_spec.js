describe('PennyPincher',function(){
	describe('#compare_denominations(new Denomination("50p",50),new Denomination("2p",2))',function(){
		it('returns 1',function(){
			expect(PennyPincher.compare_denominations(new Denomination("50p",50),new Denomination("2p",2))).toEqual(1);
		});
	});
	describe('#compare_denominations(new Denomination("2p",2),new Denomination("50p",50))',function(){
		it('returns -1',function(){
			expect(PennyPincher.compare_denominations(new Denomination("2p",2),new Denomination("50p",50))).toEqual(-1);
		});
	});
	describe('#compare_denominations(new Denomination("2p",2),new Denomination("2p",2))',function(){
		it('returns -1',function(){
			expect(PennyPincher.compare_denominations(new Denomination("2p",2),new Denomination("2p",2))).toEqual(0);
		});
	});
});


describe('new PennyPincher', function(){

	it('stores a default array of denominations', function(){
		var subject = new PennyPincher();			
		expect(subject.denominations).toEqual(PennyPincher.default_denominations);
	});

	it('accepts and stores a custom array of denominations', function(){
		var custom_denominations = [new Denomination( '£3', 300 )];			
		var subject = new PennyPincher(custom_denominations);			
		expect(subject.denominations).toEqual(custom_denominations);
	});

	it('sorts its array of denominations using PennyPincher.compare_denominations when initialised',function(){
		var custom_denominations = [new Denomination( '£3', 300 ),new Denomination( '1Groat', 150 )];			
		var subject = new PennyPincher(custom_denominations);			
		expect(subject.denominations).toEqual(custom_denominations.sort(PennyPincher.compare_denominations));
	});

	describe('when initialised with default denominations',function(){			

		describe('#pinch(amount_in_pennies)',function(){ 

  		describe('when amount_in_pennies is N(ot)aN(umber)',function(){ 
  			it('returns an empty change purse', function(){
    			var subject = new PennyPincher();			
    			change_purse = subject.pinch(NaN);			
  
  				expect(change_purse.constructor).toEqual(ChangePurse);
  				expect(change_purse.number_of_coins()).toEqual(0);
  			});
  		});
 

  		describe('when amount_in_pennies = 0',function(){ 
  			it('returns an empty change purse', function(){
    			var subject = new PennyPincher();			
    			change_purse = subject.pinch(0);			
  
  				expect(change_purse.constructor).toEqual(ChangePurse);
  				expect(change_purse.number_of_coins()).toEqual(0);
  			});
  		});
  
    	describe('when amount_in_pennies = 50',function(){			
    		it('returns a change purse with a single 50p coin', function(){
    			var subject = new PennyPincher();			
    			change_purse = subject.pinch(50);			
  
    			expect(change_purse.coins['50p']).toEqual(1);
  				expect(change_purse.number_of_coins()).toEqual(1);
    		});
    	});

    	describe('when amount_in_pennies = 123',function(){			
    		it('returns a change purse with a one 1p, one 2p, one 20p, and £1', function(){
    			var subject = new PennyPincher();			
    			change_purse = subject.pinch(123);			
 
    			expect(change_purse.coins['1p']).toEqual(1);
    			expect(change_purse.coins['2p']).toEqual(1);
    			expect(change_purse.coins['20p']).toEqual(1);
    			expect(change_purse.coins['£1']).toEqual(1);
  				expect(change_purse.number_of_coins()).toEqual(4);
    		});
    	});
     
    	describe('when amount_in_pennies = 250',function(){
    		it('returns a change purse with one 50p, and two £1', function(){
  	 			var subject = new PennyPincher();			
    			change_purse = subject.pinch(250);			
  
    			expect(change_purse.coins['50p']).toEqual(1);
    			expect(change_purse.coins['£2']).toEqual(1);
  				expect(change_purse.number_of_coins()).toEqual(2);
    		});
    	});		

    	describe('when amount_in_pennies = 337',function(){			
    		it('returns a change purse with a one 2p, one 5p, one 10p, one 20p, one £1 and one £2', function(){
    			var subject = new PennyPincher();			
    			change_purse = subject.pinch(337);			

    			expect(change_purse.coins['2p']).toEqual(1);
    			expect(change_purse.coins['5p']).toEqual(1);
    			expect(change_purse.coins['10p']).toEqual(1);
    			expect(change_purse.coins['20p']).toEqual(1);
    			expect(change_purse.coins['£1']).toEqual(1);
    			expect(change_purse.coins['£2']).toEqual(1);
  				expect(change_purse.number_of_coins()).toEqual(6);
    		});
    	});
 
  	});		


	});		

});

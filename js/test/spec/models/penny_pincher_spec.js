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

	describe('Using default denominations',function(){			

		describe('#pinch(0)',function(){ 
			it('returns an empty change purse', function(){
  			var subject = new PennyPincher();			
  			change_purse = subject.pinch(0);			

				expect(change_purse.constructor).toEqual(ChangePurse);
				expect(change_purse.number_of_coins()).toEqual(0);
			});
		});

  	describe('#pinch(50)',function(){			
  		it('returns a change purse with a single coin of type 50p', function(){
  			var subject = new PennyPincher();			
  			change_purse = subject.pinch(50);			

  			expect(change_purse.coins['50p']).toEqual(1);
				expect(change_purse.number_of_coins()).toEqual(1);
  		});
  	});
  
  	describe('#pinch(250)',function(){
  		it('returns a change purse with 1 coin of type 50p and 2 coins of type £1', function(){
	 			var subject = new PennyPincher();			
  			change_purse = subject.pinch(250);			

console.log(change_purse);

  			expect(change_purse.coins['50p']).toEqual(1);
  			expect(change_purse.coins['£2']).toEqual(1);
				expect(change_purse.number_of_coins()).toEqual(2);
  		});
  	});		

	});		

});

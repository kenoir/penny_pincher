describe('new MoneyParser',function(){
	var subject = new MoneyParser(); 			

	describe('#amount_in_pennies_of(input_string)',function(){
		describe('when input_string is "4"',function(){ 
			it('returns 4',function(){
				expect(subject.amount_in_pennies_of("4")).toEqual(4);			
			});
		});
		describe('when input_string is "85"',function(){ 
			it('returns 85',function(){
				expect(subject.amount_in_pennies_of("85")).toEqual(85);			
			});
		});
		describe('when input_string is "197p"',function(){ 
			it('returns 197',function(){
				expect(subject.amount_in_pennies_of("197p")).toEqual(197);			
			});
		});
		describe('when input_string is "2p"',function(){ 
			it('returns 2',function(){
				expect(subject.amount_in_pennies_of("2p")).toEqual(2);			
			});
		});
		describe('when input_string is "1.87"',function(){ 
			it('returns 187',function(){
				expect(subject.amount_in_pennies_of("1.87")).toEqual(187);			
			});
		});

	});

});

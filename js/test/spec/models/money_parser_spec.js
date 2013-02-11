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
		describe('when input_string is "£1.23"',function(){ 
			it('returns 123',function(){
				expect(subject.amount_in_pennies_of("£1.23")).toEqual(123);			
			});
		});
		describe('when input_string is "£2"',function(){ 
			it('returns 200',function(){
				expect(subject.amount_in_pennies_of("£2")).toEqual(200);			
			});
		});
		describe('when input_string is "£10"',function(){ 
			it('returns 1000',function(){
				expect(subject.amount_in_pennies_of("£10")).toEqual(1000);			
			});
		});
		describe('when input_string is "£1.87"',function(){ 
			it('returns 187',function(){
				expect(subject.amount_in_pennies_of("£1.87")).toEqual(187);			
			});
		});
		describe('when input_string is "£1p"',function(){ 
			it('returns 100',function(){
				expect(subject.amount_in_pennies_of("£1p")).toEqual(100);			
			});
		});
		describe('when input_string is "£1.p"',function(){ 
			it('returns 100',function(){
				expect(subject.amount_in_pennies_of("£1.p")).toEqual(100);			
			});
		});
		describe('when input_string is "001.41p"',function(){ 
			it('returns 141',function(){
				expect(subject.amount_in_pennies_of("001.41p")).toEqual(141);			
			});
		});
		describe('when input_string is "4.235p"',function(){ 
			it('returns 424',function(){
				expect(subject.amount_in_pennies_of("4.235p")).toEqual(424);			
			});
		});
		describe('when input_string is "£1.257422457p"',function(){ 
			it('returns 126',function(){
				expect(subject.amount_in_pennies_of("£1.257422457p")).toEqual(126);			
			});
		});
		describe('when input_string is "1x"',function(){ 
			it('returns NaN',function(){
				expect(isNaN(subject.amount_in_pennies_of("1x"))).toBe(true);
			});
		});
		describe('when input_string is "£1x.0p"',function(){ 
			it('returns NaN',function(){
				expect(isNaN(subject.amount_in_pennies_of("£1x.0p"))).toBe(true);
			});
		});
		describe('when input_string is "£p"',function(){ 
			it('returns NaN',function(){
				expect(isNaN(subject.amount_in_pennies_of("£p"))).toBe(true);			
			});
		});
	});

});

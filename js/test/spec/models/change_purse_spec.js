describe('new ChangePurse',function(){

	it('#coins == {}',function(){
		var subject = new ChangePurse();
		subject.coins = {};
	})				

	describe('#add_coin("50p",20)',function(){
		it('adds an item to #coins with ID 50p and amount 20',function(){			
			var subject = new ChangePurse();
			subject.add_coin("50p",20);
			expect(subject.coins["50p"]).toEqual(20);	
		});
	});

	describe('#number_of_coins(type)', function(){
  	describe('when #add_coin("20p",2)',function(){
  		describe('when type = undefined',function(){
  			it('returns 2',function(){
  				var subject = new ChangePurse();
  				subject.add_coin("20p", 2);
  				expect(subject.number_of_coins()).toEqual(2);
  			});
  		});
  	});
  
  	describe('when #add_coin("20p",5), #add_coin("10p",3)',function(){
  		describe('when type = "20p"',function(){
				it('returns 5',function(){
					var subject = new ChangePurse();
					subject.add_coin("20p",5);
					subject.add_coin("10p",3);
					expect(subject.number_of_coins("20p")).toEqual(5);
				});
			});	
  	});
	});

});

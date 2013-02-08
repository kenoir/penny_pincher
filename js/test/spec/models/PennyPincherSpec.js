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
	var subject = new PennyPincher();			

	it('stores a default array of denominations', function(){
		expect(true).toEqual(false);
	});

	it('accepts and stores a custom array of denominations', function(){
		expect(true).toEqual(false);
	});

	it('sorts its array of denominations when initialised',function(){
		expect(true).toEqual(false);
	});

	describe('#pinch(50)',function(){			
		it('returns a single coin of type 50p', function(){
			change = subject.pinch(50);			

			expect(change.length).toEqual(1);
			expect(change[0].id).toEqual('50p');
		});
	});

	describe('#pinch(100)',function(){
		it('returns 2 coins of type 50p', function(){
			expect(true).toEqual(false);
		});
	});		

});

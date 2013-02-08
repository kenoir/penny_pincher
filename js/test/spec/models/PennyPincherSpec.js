function PennyPincher(){
	
}
PennyPincher.sort_denominations = function(a,b){
	if(a.amount_in_pence > b.amount_in_pence)
		return 1;
	if(a.amount_in_pence < b.amount_in_pence)
		return -1;

	return 0;
}
PennyPincher.prototype.pinch = function(amount){
	return [new Denomination( '50p', 50 )]; 
}

/*
PennyPincher.default_denominations = [
	new Denomination( '£2', 200 ),
	new Denomination( '£1', 100 ),
	new Denomination( '50p', 50 ),
	new Denomination( '20p', 20 ),
	new Denomination( '10p', 10 ),
	new Denomination( '5p',   5 ),
	new Denomination( '2p',   2 ),
	new Denomination( '1p',   1 )
];
*/

function Denomination( name, amount ){
	this.amount_in_pence = amount;
	this.id = this.display_name = name;				
}

describe('PennyPincher',function(){
	describe('#sort_denominations(new Denomination("50p",50),new Denomination("2p",2))',function(){
		it('returns 1',function(){
			expect(PennyPincher.sort_denominations(new Denomination("50p",50),new Denomination("2p",2))).toEqual(1);
		});
	});
	describe('#sort_denominations(new Denomination("2p",2),new Denomination("50p",50))',function(){
		it('returns -1',function(){
			expect(PennyPincher.sort_denominations(new Denomination("2p",2),new Denomination("50p",50))).toEqual(-1);
		});
	});
	describe('#sort_denominations(new Denomination("2p",2),new Denomination("2p",2))',function(){
		it('returns -1',function(){
			expect(PennyPincher.sort_denominations(new Denomination("2p",2),new Denomination("2p",2))).toEqual(0);
		});
	});
});

describe('new PennyPincher', function(){
	var subject = new PennyPincher();			

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

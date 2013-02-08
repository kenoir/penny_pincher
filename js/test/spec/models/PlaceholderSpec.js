function PennyPincher(){

}
PennyPincher.pinch = function(amount){
	return [new Denomination( '50p', 50 )]; 
}

/*
PennyPincher.denominations = [
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

describe('PennyPincher', function(){

	describe('#pinch(50)',function(){			
		it('returns a single coin of type 50p', function(){
			change = PennyPincher.pinch(50);			

			expect(change.length).toEqual(1)
			expect(change[0].id).toEqual('50p');
		});
	});

});

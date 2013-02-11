define(['underscore','models/denomination','models/change_purse'], function(_,Denomination,ChangePurse){
	function PennyPincher(custom_denominations){
  	var denominations = custom_denominations; 
  	if( typeof denominations === 'undefined' ){
  		denominations = PennyPincher.default_denominations;				
  	}
  
  	this.denominations = denominations.sort(PennyPincher.compare_denominations);
  }
  PennyPincher.compare_denominations = function(a,b){
  	if(a.amount_in_pence > b.amount_in_pence)
  		return 1;
  	if(a.amount_in_pence < b.amount_in_pence)
  		return -1;
  
  	return 0;
  }
  PennyPincher.prototype.pinch = function(amount){
		var amount_remaining = amount;			
		var change_purse = _.reduce(this.denominations.reverse(),function(change_purse,denomination){
			var number_of_coins = 0;
			while (amount_remaining >= denomination.amount_in_pence) {
				amount_remaining -= denomination.amount_in_pence;			
				number_of_coins++;
			}				
		
			if( number_of_coins > 0 ){
				change_purse.add_coin( denomination.id, number_of_coins );
			}
			return change_purse;
		},new ChangePurse());

  	return change_purse; 
  }
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

	return PennyPincher;
});

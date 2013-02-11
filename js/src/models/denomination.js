define([],function(){
	 var Denomination = function Denomination( name, amount ){
	  this.amount_in_pence = amount;
	  this.id = this.display_name = name;				
  }

 	return Denomination;	
});


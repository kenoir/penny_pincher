define(['underscore'],function(_){

	function ChangePurse(){
		this.coins = {};
	}

	ChangePurse.prototype.add_coin =  function(id,amount){
		if( this.coins[id] == undefined ) { this.coins[id] = amount; }
		else { this.coins[id] += amount; }		
	};

	ChangePurse.prototype.number_of_coins = function(id){
		if( id != undefined && this.coins[id] == undefined ) { return 0; }
		if( id != undefined && this.coins[id] != undefined ) { return this.coins[id]; }
		if( id == undefined ) { 
			return _.reduce(_.pairs(this.coins),function(memo,pair){
				return memo + pair[1];;	
			},0);
		}

		return 0;
	};

 	return ChangePurse;	
});

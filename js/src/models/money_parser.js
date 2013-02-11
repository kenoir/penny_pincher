define(['underscore'],function(_){

		var MoneyParser = function(){

		};


		MoneyParser.prototype.amount_in_pennies_of = function(input_string){
			return parseFloat(input_string);
		};


		return MoneyParser

});

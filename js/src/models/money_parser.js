define(['underscore'],function(_){

		var MoneyParser = function(){

			this.config = {
				decimal_seperator: '.',
				large_unit_regexp: /^£/,
				small_unit_regexp: /p$/
			};

		};

		MoneyParser.prototype.valid_input_string = function(input_string){
			var model = this;

			var is_int = function(input_string){ 
				var matches = (input_string).match(/^\d+$/);
				if ( matches == undefined || !( matches.length == 1 ) ) { return false; }
				return matches[0]  == input_string;
			};

			var trim_unit_symbols = function(input_string){ 
				var trimmed_string = input_string
					.replace(model.config.large_unit_regexp,"")
					.replace(model.config.small_unit_regexp,"");

				return trimmed_string;
			};

			var working = input_string;			

			// Trim currency characters
			working = trim_unit_symbols(input_string);			

			// Check we have the correct number of decimal places 
			if( working.split(model.config.decimal_seperator).length > 2 ){ 
				return false; } 

			// Check each part of the string is a number
			_.each( working, function( number_string ){
				if(!(is_int(number_string))) { return false; }
			});		

			return true;
		};

		MoneyParser.prototype.amount_in_pennies_of = function(input_string){
			if( !(this.valid_input_string(input_string) ) ) { return NaN; }

			var amount_in_pence = parseFloat(input_string);

			// We have a decimal seperator in a valid string
			// So we need to multiply by 100
			if( input_string.split(this.config.decimal_seperator).length == 2 ){
				amount_in_pence *= 100;						
			}

			return amount_in_pence; 
		};


		return MoneyParser

});

define(['underscore'],function(_){

		var MoneyParser = function(){

			this.config = {
				decimal_seperator: '.',
				large_unit_regexp: /^£/,
				small_unit_regexp: /(\.)*p$/
			};

		};

		MoneyParser.prototype.sanitise_input_string = function(input_string){
			var model = this;

			var is_int = function(input_string){ 
				var matches = (input_string).match(/^\d+$/);
				if ( matches == undefined || !( matches.length == 1 ) ) { return false; }
				return matches[0]  == input_string;
			};

			var add_decimal_point_if_large_units = function(input_string){
				if( (input_string.match(model.config.large_unit_regexp) != undefined)  &&
						!(input_string.indexOf(model.config.decimal_seperator) >= 0)){
					return input_string + ".0";					
				}				
				return input_string;
			};	

			var is_float = function(input_string){
				var split_string = input_string.split(model.config.decimal_seperator);
				if( split_string.length > 2 ){ return false; } 

				var valid = true;
				_.each( split_string, function( number_string ){
					if(!(is_int(number_string))) { valid = false; }
				});		
				return valid;
			};	

			// Trim small unit character
			input_string = input_string.replace(model.config.small_unit_regexp,"");

			// Make large unit character, decimal seperator uniform
			input_string = add_decimal_point_if_large_units(input_string);

			// Trim large unit charachter
			input_string = input_string.replace(model.config.large_unit_regexp,"");

			// Check we now have a valid float 
			if( !is_float(input_string) ) { return NaN; }

			return input_string; 
		};

		MoneyParser.prototype.amount_in_pennies_of = function(input_string){
			var model = this;
						
			var amount_is_in_large_units = function(input_string){
				return input_string.split(model.config.decimal_seperator).length == 2;
			}			

			var sane_input_string = this.sanitise_input_string(input_string);
			if( isNaN(sane_input_string) ) { return NaN; }

			var amount = parseFloat(sane_input_string);
			if ( amount_is_in_large_units(sane_input_string ) ) {
				amount *= 100;
			}			

			return Math.round(amount); 
		};


		return MoneyParser

});

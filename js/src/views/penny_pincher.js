define(['jquery','models/money_parser'],function($,MoneyParser){
	
	var PennyPincherView = function(model){
		var view = this;			
		
		view.model = model;
		view.parser = new MoneyParser();
		
		view.$el = $('#penny-pincher form.amount-form');
		view.$el.submit(function(){
			var user_input = view.$el.find('input.amount').val();
			var amount_in_pennies = view.parser.amount_in_pennies_of(user_input);
			var change_purse = view.model.pinch(amount_in_pennies);


			console.log(change_purse);
			view.render();

			return false;
		});

	};

	PennyPincherView.prototype.render = function(){
		this.$el.find('.results').html("<p>RESULTS</p>");
	};	


	return PennyPincherView;			
});

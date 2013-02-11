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

			view.render(change_purse);

			return false;
		});

	};

	PennyPincherView.prototype.render = function(change_purse){
		var coins = _.pairs(change_purse.coins)
		var change_purse_template = $("#change-purse").html();			
		this.$el.find('.results').html(
			_.template(change_purse_template,{ coins: coins }));
	};	


	return PennyPincherView;			
});

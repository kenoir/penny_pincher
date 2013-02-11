define(
	[
		'views/penny_pincher',
		'models/penny_pincher'
	],function(
		PennyPincherView,
		PennyPincher
	){

	var App = function(){

	};

	App.prototype.start = function(){
		console.log('starting application');
		var model = new PennyPincher();
		var view = new PennyPincherView(model);
		
	};



	return App;	

});

require.config({
  baseUrl: "./js/",
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    controllers: 'src/controllers',
    models: 'src/models',
		views: 'src/views'
  },
  shim: {
    underscore: {
      exports: "_"
    }
  }
});

require(['underscore', 'jquery','controllers/app'], function(_, $, App){
	$(document).ready(function() {
		window.App = new App();
		window.App.start();		
	});				
});	

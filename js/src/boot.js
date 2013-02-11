require.config({
  baseUrl: "./js/",
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    models: 'src/models',
		view: 'src/views'
  },
  shim: {
    underscore: {
      exports: "_"
    }
  }
});

require(['underscore', 'jquery','models/app'], function(_, $, App){
	$(document).ready(function() {
		window.App = new App();
		window.App.start();		
	});				
});	

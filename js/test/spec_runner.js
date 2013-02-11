require.config({
  baseUrl: "../../js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    jasmine: 'test/lib/jasmine/jasmine',
    'jasmine-html': 'test/lib/jasmine/jasmine-html',
    spec: 'test/spec/',
    models: 'src/models'		
  },
  shim: {
    underscore: {
      exports: "_"
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){
 
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;
 
  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);
 
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];
 
  specs.push('spec/models/penny_pincher_spec');
  specs.push('spec/models/change_purse_spec');
  specs.push('spec/models/money_parser_spec');

// hack to make test assets available to tests while using requirejs - fix this!  
require(
  [
    'models/denomination',
    'models/change_purse',
    'models/penny_pincher',
		'models/money_parser'
  ],function(
		Denomination,
		ChangePurse,
		PennyPincher,
		MoneyParser
	){

	window.Denomination = Denomination;
	window.ChangePurse = ChangePurse;
	window.PennyPincher = PennyPincher;	  
	window.MoneyParser = MoneyParser;	  

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });


});

});

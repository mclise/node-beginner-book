/*var casper = require('casper').create{
  verbose: true,
  logLevel: 'debug'
}*/

casper.test.begin('site gets 200 status', 1, function suite(test){
  casper.start('http://localhost:8888', function(){
    test.assertHttpStatus(200);
  });

  casper.run(function(){
    test.done();
  });
});
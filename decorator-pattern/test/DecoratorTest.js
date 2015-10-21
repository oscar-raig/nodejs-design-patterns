var test = require('tape').test;
var FbNumber = require('../FbNumber.js');
var Decorator = require('../Decorator.js');

test('decorator_should_call_compose', function(t) {
	var fbNumber = new FbNumber.FbNumber();
	var decorator = new Decorator.Decorator(fbNumber);
	console.log("decorator:" + decorator);
    t.equal(decorator.say(2),2,  'these two numbers are equal');
    t.end();
});
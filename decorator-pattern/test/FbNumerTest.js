var FbNumber = require('../FbNumber.js');

var test = require('tape').test;

test('2_should_return_2', function(t) {
	var fbNumber = new FbNumber.FbNumber();
    t.equal(2, fbNumber.say(2), 'these two numbers are equal');
    t.end();
});

test('1_should_return_1', function(t) {
	var fbNumber = new FbNumber.FbNumber();
    t.equal(1, fbNumber.say(1), 'these two numbers are equal');
    t.end();
});
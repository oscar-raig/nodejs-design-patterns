var test = require("tape").test;
var FizzDecorator = require("../FizzDecorator.js");
var Decorator = require("../Decorator.js");
var FbNumber =require("../FbNumber.js");

function FizzBuzzFactory() {
	var fbNumber = new FbNumber.FbNumber();
	var fizzDecorator = new FizzDecorator.FizzDecorator(fbNumber,3,"Fizz");
	var buzzDecorator = new FizzDecorator.FizzDecorator(fizzDecorator,5,"Buzz");
	return fizzbuzzDecorator = new FizzDecorator.FizzDecorator(buzzDecorator,15,"FizzBuzz");


}

test("FizzDecorator_constructor_should_create_ans object",function(t){

	var fizzDecorator = new FizzDecorator.FizzDecorator(null,3,"Fizz");
	
	t.equals("Fizz",fizzDecorator._soundOfDecorator);
	t.equals(3,fizzDecorator._numberOfDecorator);	
	t.end();
});

test("FizzDecorator_say_with_3_should_say_Fizz",function(t){

	var fizzDecorator = new FizzDecorator.FizzDecorator(null,3,"Fizz");
	
	t.equals("Fizz",fizzDecorator.say(3));	
	t.end();
});


test("FizzDecorator_say_with_5_should_say_Buzz",function(t){

	var fizzDecorator = new FizzDecorator.FizzDecorator(null,5,"Buzz");
	
	t.equals("Buzz",fizzDecorator.say(5));	
	t.end();
});


test("FizzDecorator_say_with_2_should_say_2",function(t){

	var fbNumber = new FbNumber.FbNumber();
	var decorator = new Decorator.Decorator(fbNumber);

	var fizzDecorator = new FizzDecorator.FizzDecorator(decorator,3,"Fizz");
	
	t.equals(2,fizzDecorator.say(2));	
	t.end();
});


test("full_test", function(t){
	console.log("We are going to log erverything");
	var fizzBuzz = FizzBuzzFactory();
	t.equals(2,fizzBuzz.say(2));	
	t.equals(fizzBuzz.say(3),"Fizz");
	t.equals(fizzBuzz.say(5),"Buzz");
	t.equals(fizzBuzz.say(5*3),"FizzBuzz");

	t.end();
});

"use strict";
let test = require("tape").test;
let FlyBehaviors = require("../FlyBehaviors");

class SubClass extends FlyBehaviors {
	constructor() {
		console.log("Subclass no trow");
		super();
	}
}

test("test NO exception for instantiate an object taht extends an interface",function(t) {
	let subClass = new SubClass();
	t.pass("Passing the test subclassing");
	t.end();
});

test("test: instantiate an interface should generate exception",function(t) {
	t.throws(function(){
  		console.log("Tryining to catch a throw");
  		let flyBehaviours = new FlyBehaviors();
	});
	
	t.pass("Passing the test");
	t.end();
});


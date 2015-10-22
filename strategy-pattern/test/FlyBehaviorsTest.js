"use strict";
let test = require("tape").test;
let FlyBehaviors = require("../FlyBehaviors.js");

class SubClass extends FlyBehaviors {
	constructor() {
		console.log("Subclass no trow");
		super();
	}
}

test("test NO exception for instantiate an interface",function(t) {
	let subClass = new SubClass();
	t.pass("Passing the test subclassing");
	t.end();
});

test("test exception for instantiate an interface",function(t) {
	let flyBehaviours = new FlyBehaviors();
	t.pass("Passing the test");
	t.end();
});


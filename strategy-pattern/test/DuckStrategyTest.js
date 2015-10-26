"use strict";

let test =  require("tape").test;
let DuckStrategy = require("../DuckStrategy");
let FlyWithWings = require("../FlyWithWings");
 
test("Creating a DuckStrategy should work",function (t){

	t.throws( function (){
		let duckStrategy = new DuckStrategy();
	});
	
	t.pass("We are able to create a new DuckStrategy");
	t.end();
});

test("Calling fly DuckStrategy should work",function(t) {

	let flyWithWings = new FlyWithWings();
	let duckStrategy = new DuckStrategy(flyWithWings);
	duckStrategy.performFly();
	t.pass("Failing calling fly from Strategy");
	t.end();
});

"use strict";

let  test = require("tape").test;
let MollardDuck = require("../MollardDuck");

test("MollardDuckTest constructor",function (t){

	let mollardDuck = new MollardDuck();

	t.pass("Passing message");
	t.end();
})

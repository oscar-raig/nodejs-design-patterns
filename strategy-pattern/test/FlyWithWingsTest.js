"use strict";

let test = require("tape").test;
let FlyWithWings = require("../FlyWithWings");

test("FlyWithWings constructor should work",function(t){

	var flyWithWings = new FlyWithWings();
	t.pass("FlyWithWings constructor is working");	
	t.end();
}) 

test("FlyWithWings fly shold work",function(t){
	var flyWithWings = new FlyWithWings();
	console.log("Calling fly");
	flyWithWings.fly();
	t.pass("FlyWithWings say is not working");
	t.end();
})


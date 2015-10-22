"use strict";
let Duck = require("../Duck.js");
let test = require('tape').test;

test("Test constructor",function(t){
	let duck = new Duck();
	t.pass("Consturctor ok");
	t.end();
});


test("Test quack",function (t){

	let duck = new Duck();
	duck.quack();
	t.pass("quack ok");
	t.end();
});

test("Test swim",function(t){
	let duck = new Duck();
	duck.swim();
	t.pass("quack ok");
	t.end();

})
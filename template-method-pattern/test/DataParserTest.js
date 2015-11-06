"use strict";

let test = require('tape').test;
let DataParser = require("../DataParser.js");


test("Test DataParser constructor",function(t){
	let dataParser = new DataParser();
	t.pass("Consturctor DataParser ok");
	t.end();
});


test("test: call a abtract function should generate  exception",function(t) {
	t.throws(function(){
  		console.log("Tryining to catch a throw");
  		let dataParser = new DataParser();
  		dataParser.readData();
	});
	
	t.pass("Passing the test");
	t.end();
});


test("test: call a abtract function should generate  exception",function(t) {
	t.throws(function(){
  		console.log("Tryining to catch a throw");
  		let dataParser = new DataParser();
  		dataParser.processData();
	});
	
	t.pass("Passing the test");
	t.end();
});
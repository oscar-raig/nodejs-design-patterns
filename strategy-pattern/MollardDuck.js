"use strict";

let Duck = require("./Duck.js");

class MollardDuck extends Duck {
	constructor(){
		super();
		console.log("MollardDuck:constructor");
	}
	display(){
		console.log("MollardDuck::swim");
	}
}

module.exports = MollardDuck;
"use strict";

let FlyBehaviors = require("./FlyBehaviors.js");


class FlyWithWings  extends FlyBehaviors {
	constructor(){
		super(); //TEST NOT PASS IF I DO NOT PUT THIS LINE??
		console.log("FlyWithWings::constructor");
	};
	fly(){
		//super().fly();
		console.log("FlyWithWings::fly");
	}

};

module.exports = FlyWithWings;
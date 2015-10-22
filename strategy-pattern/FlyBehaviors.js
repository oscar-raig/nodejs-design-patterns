"use strict";
class FlyBehaviors {
	constructor(){
		console.log("FlyBehaviors::constructor");
		if (this.constructor === FlyBehaviors) {
      		throw new TypeError("Cannot construct Abstract instances directly");
    	}
	}
	fly() {
		console.log("")
	}
}


module.exports = FlyBehaviors;
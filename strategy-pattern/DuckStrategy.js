"use strict";

class DuckStrategy {
	constructor(flyBehavior) {
		if ( flyBehavior == null){
			throw ("flyBehavior is null");
		}
		this._flyBehavior =  flyBehavior;
	}

	performFly() {
		console.log("DuckStrategy::performFly");
		this._flyBehavior.fly();
	}

}

module.exports = DuckStrategy; 
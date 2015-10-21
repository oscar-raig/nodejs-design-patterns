"use strict";

function constructor() {
	return {
		say : say
	};
}

function say(number) {
	return number;
}

module.exports = {
	FbNumber: constructor 
};




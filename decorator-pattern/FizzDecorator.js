function say ( number ) {
	
	if ( number % this._numberOfDecorator == 0) {
		return this._soundOfDecorator;
	}
	return this._component.say(number);
}

function constructor(component,
				numberOfDecorator,
				soundOfDecorator) {
	console.log("ORC: You should call super here!!!");
	return {
		_component : component,
		_numberOfDecorator : numberOfDecorator,
		_soundOfDecorator : soundOfDecorator,
		say:say
	}	
}

module.exports = {
	FizzDecorator: constructor
}	
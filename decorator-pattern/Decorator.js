function function_say(number) {
	return this._component.say(number);
}

module.exports = {

	Decorator:function(component) {
		return {
			_component : component,
			say: function_say
		}
	}
};
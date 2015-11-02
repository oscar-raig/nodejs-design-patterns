"use strict";

class Component {
	constructor (name) {
		this.name = name;
		this.list = [];
	}

	operation() {
		console.log("operation");
	}

	add(component) {
		console.log("add");
		this.list.push(component);
	}
}

class Leaf extends Component{

	constructor( name ) {
		super(name);
		this.name = name;	
	}

	display() {
		console.log(this.name);
	}

}

class Composite extends Component {
	constructor(name ) {
		super(name);
		this.name =name;
	}

	display(){
		console.log(this.name);
		this.list.map( function (item){
			item.display();
		}	)
	}
}




module.exports = {
	Component: Component,
	Leaf: Leaf,
	Composite, Composite
}
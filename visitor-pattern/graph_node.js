"use strict";

class Component {
	constructor (name) {
		this.name = name;
		this.list = [];
	}

	operation() {
		console.log("Component::operation");
	}

	add(component) {
		console.log("Component::add");
		this.list.push(component);
	}

	accept(visitor) {
		console.log("Component::visitor");
		this.visitor = visitor;
		this.list.map(function(item){
			item.accept(this.visitor);
		})
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

	accept(visitor) {
		console.log("Leaf::accept");
		visitor.visitConcreteElement(this);
	}

}

class Composite extends Component {
	constructor(name ) {
		super(name);
		this.name =name;
	}

	display(){

		if (this.visitor != null) {
			this.visitor.visitConcreteElement(this);
		}else {
			console.log(this.name);
		}
		this.list.map( function (item){
			item.display();
		}	)
	}

	accept(visitor) {
		visitor.visitConcreteElement(this);
		this.list.map(function(item){
			console.log("Composite::accept");
			item.accept(visitor);
		});
	}
}

class Visitor {
	constructor() {
		console.log("Visitor::constructor");
	}	

	visitConcreteElement(elementToVisit) {
		console.log("Visitor::visitConcreteElement");
		console.log(elementToVisit.name);
		this.counter++;
		console.log("Visitor::visitConcreteElement counter" + this.counter);

	}

}


class VisitorCounter extends Visitor {
	constructor() {
		super();
		console.log("VisitorCounter");
		this.counter = 0;
	
	}

	visitConcreteElement(elementToVisit) {
		console.log("VisitorCounter::visitConcreteElement" +  elementToVisit.name);
		this.counter++;
		console.log("VisitorCounter::visitConcreteElement counter " + this.counter);

	}

	getCounter() {
		return this.counter;
	}
}

class VisitorConcat extends Visitor {
	constructor() {
		super();
		console.log("VisitorConcat");
		this.concat = "";
	
	}

	visitConcreteElement(elementToVisit) {
		console.log("VisitorConcat::visitConcreteElement" +  elementToVisit.name);
		this.concat = this.concat + elementToVisit.name;
		console.log("VisitorConcat::visitConcreteElement counter " + this.counter);

	}

	getConcat() {
		return this.concat;
	}
}


module.exports = {
	Component: Component,
	Leaf: Leaf,
	Composite, Composite,
	Visitor, Visitor,
	VisitorCounter, VisitorCounter,
	VisitorConcat, VisitorConcat
}
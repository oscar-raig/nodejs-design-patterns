"use strict";
let node = require("./graph_node.js");
console.log("init visitor");

let node1 = new node.Component("name oscar");

let node2 = new node.Leaf("leaf");

console.log(node1.name);

console.log(node2.name);

node1.operation();

let composite = new node.Composite("Comp");

console.log(composite.name);

composite.add();

let root = new node.Composite("root");
root.add(new node.Leaf("Leaf A"));
root.add(new node.Leaf("Leaf B"));


let comp = new node.Composite("Composite X");
comp.add(new node.Leaf("Leaf XA"));
comp.add(new node.Leaf("Leaf XB"));

root.add(comp);
root.add(new node.Leaf("Leaf C"))

root.display();



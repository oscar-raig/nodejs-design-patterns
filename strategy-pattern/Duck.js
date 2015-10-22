"use strict";
class Duck {
  constructor() {
   console.log("Duck::constructor");
  }
  quack() {
  	console.log("Duck::quack");
  }
  swim() {
  	console.log("Duck::swim");
  }
  dislplay() {
  	console.log("Duck::display");
  }
}

module.exports = Duck;

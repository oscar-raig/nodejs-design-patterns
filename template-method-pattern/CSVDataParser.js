"use strict";
let DataParser = require('./DataParser');
class  CSVDataParser  extends DataParser {

	constructor(){
		super();
		console.log("CSVDataParser::constructor");
	}

	readData() {
		console.log("CSVDataParser::readData");
	}

	processData(){
		console.log("CSVDataParser::processData");
	}

}

module.exports = CSVDataParser;
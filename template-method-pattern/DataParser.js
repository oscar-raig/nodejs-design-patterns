"use strict";



class DataParser {
	constructor() {
		console.log("DataParser::constructor");
	}
	parseDataAndGenerateOutput(){
		this.readData();
        this.processData();
        this.writeData();
	}

	readData() {
		throw ("DataParser::Override this function readData");
	}

    processData() {
    	throw ("DataParser::Override this function processData");
    }

    writeData() {
    	console.log("DataParser::writeData");
    }


}

module.exports =  DataParser;
"use strict";



class DataParser {
	constructor() {
		console.log("DataParser::constructor");
	}
	parseDataAndGenerateOutput(){
		readData();
        processData();
        writeData();
	}

	readData() {
		throw ("Override this function readData");
	}

    processData() {
    	throw ("Override this function processData");
    }

    writeData() {
    	console.log("System.out.println");
    }


}

module.exports =  DataParser;
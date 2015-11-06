"use strict";

let CSVDataParser = require('../CSVDataParser');
let test = require('tape').test;

test("test creating object CSVDataParser should not fail",function(t){
		let csvData = new CSVDataParser();
		t.pass("CSVDataParser create ok");
		t.end();
}); 


test("test calling parseDataAndGenerateOutput",function(t){

		let csvData = new CSVDataParser();
		csvData.parseDataAndGenerateOutput();
		t.pass("parseDataAndGenerateOutput is ok")
		t.end();
});


//Lisa Kilker
//May 9, 2018
//Chapter 12 
//Hands-on Project 12-2

function convert() {
	var lb = $("#pValue").val();
	var kg = Math.round(lb/2.2);

	$("#kValue").html(kg);
}

$("#convertButton").click(convert);
("#pValue").val("");
("#kValue").html("");
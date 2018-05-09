/*  JavaScript 6th Edition
    Chapter 11
    Hands-on Project 11-4

    Author: Lisa Kilker
    Date:   May 9, 2018

    Filename: script.js
*/

"use strict";

	var httpRequest = false;

function getRequestObject() {

		try {
			httpRequest = new XMLHttpRequest();
		}
		catch (requestError) {  //display city and state fields and labels for manual input
			document.getElementById("csset").style.visibility = "visible";  //remove event listeners so additional input is ignored
	var zip = document.getElementById("zip").value;

		if (zip.addEventListener) {
			zip.removeEventListener("keyup", checkInput, false);
		} else if (zip.attachEvent) {
			zip.detachEvent("onkeyup", checkInput);
		}
		return false;
		}
		return httpRequest;
}

function checkInput() {
	var zip = document.getElementById("zip").value;
		if (zip.length === 5) {
			getLocation();
		} else {
			document.getElementById("city").value = "";
			document.getElementById("state").value = "";
		}
}

function getLocation() {
	var zip = document.getElementById("zip").value;
		if (!httpRequest) {
			httpRequest = getRequestObject();
		}

			httpRequest.abort();
			httpRequest.open("get","http://api.zippopotam.us/us/" + zip, true);
			httpRequest.send();
			httpRequest.onreadystatechange = displayData;
}

function displayData() {
		if(httpRequest.readyState === 4 && httpRequest.status === 200) {
	
	var resultData = JSON.parse(httpRequest.responseText);
	var city = document.getElementById("city");
	var state = document.getElementById("state");

			city.value = resultData.places[0]["place name"];
			state.value = resultData.places[0]["state abbreviation"];

			document.getElementById("zip").blur();
			document.getElementById("csset").style.visibility = "visible";

		}
}

	var zip = document.getElementById("zip");
		if (zip.addEventListener) {
			zip.addEventListener("keyup", checkInput, false);
		} else if (zip.attachEvent) {
			zip.attachEvent("onkeyup", checkInput);
		}


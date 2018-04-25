//Author:  Lisa Kilker
//Date:  April 19, 2018
//Hands-on Project 6-2

"use strict";
var formValidity = true;

function validateRequired() { //validates required fields
	var inputElements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorText");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement;

	try {
		for (var i = 0; i < elementCount; i++) {
			//validates all input elements in fieldset
			currentElement = inputElements[i];

		if (currentElement.value === "") {
			currentElement.style.background = "rgb(255,233,233)";
			requiredValidity = false;

		} else {
			currentElement.style.background = "white";
		}
	}
		if (requiredValidity === false) {
		throw "Please complete all fields.";
	}
			errorDiv.style.display = "none";
			errorDiv.innerHTML = "";
	}
		catch(msg) {
			errorDiv.style.display = "block";
			errorDiv.innerHTML = msg;
			formValidity = false;
		}
	}
 
function createEventListeners() { //create event listeners
	var form = document.getElementsByTagName("form")[0]; 
	
		if (form.addEventListener) {
			form.addEventListener("submit", validateForm, false); 
		}	 

		else if (form.attachEvent) {
			form.attachEvent("onsubmit", validateForm);
		}
	}

function validateForm(evt) { //validates form

		if (evt.preventDefault) {
			evt.preventDefault(); //prevents form from submitting

		} else {
			evt.returnValue = false; //prevents form from submitting in IE8
		}
			formValidity = true; //resets value for revalidation
			validateRequired();

		if (formValidity === true) {
			document.getElementsByTagName("form")[0].submit();
		}
	}

function validateNumbers() { //validates number fields for older browsers
	var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
	var elementCount = numberInputs.length;
	var numErrorDiv = document.getElementById("numErrorText");
	var numbersValidity = true;
	var currentElement;

	try {

		for (var i = 0; i < elementCount; i++) {
			//validates all input elements of type "number" in fieldset
			currentElement =  numberInputs[i];

		if (isNan(currentElement.value) || (currentElement.valud === "")) {
			currentElement.style.background = "rgb(255,233,233";
			numbersValidity = false;

		} else {
			currentElement.style.background = "white";
		}
	}
		if (numbersValidity === false) {
			throw
		}
			numErrorDiv.Style.display = "none";
			numErrorDiv.innerHTML = "";
	}
			catch(msg){
				numErrorDiv.style.display = "block";
				numErrorDiv.innerHTML = msg;
				formValidity = false;
		}
	}

function validateForm(evt) { 

		if (evt.preventDefault) {
			evt.preventDefault(); //prevent form from submitting 

		} else {
			evt.returnValue = false; //prevent form from submitting in IE8
			formValidity = true; //reset value for revalidation 
			validateRequired(); validateNumbers(); 

			if (formValidity === true) {
			document.getElementsByTagName("form")[0].submit();
		}
 	}
}

function zeroPlaceholder() { //remove fallback placeholder text
	var addressBox = document.getElementById("addrinput");
			addressBox.style.color = "black";

		if (addressBox.value === addressBox.placeholder) {
			addressBox.value = "";
		}
	}

function checkPlaceholder() { //restores placeholder text if box contains no user entry
	var addressBox = document.getElementById("addrinput");

		if (addressBox.value === "") {
			addressBox.style.color = "rgb(178,184,183)";
			addrsesBox.value = addressBox.placeholder;
		}
	}

function generatePlaceholder() { //adds placeholder text for browsers that don't support the placeholder attribute
	
		if (!Modernizr.input.placehoder) {
	var addressBox = document.getElementById("addrinput");
			addressBox.value = addressBox.placeholder;
			addressBox.style.color = "rgb(178,184,183)";

		if (addressBox.addEventListener) {
			addressBox.addEventListener("focus", zeroPlaceholder, false);

		} else if (addressBox.attachEvent) {
			addressBox.attachEvent("onfocus", zeroPlaceholder);
			addressBox.attachEvent("onblur", checkPlaceholder);
		}
	}		
}

	if (window.addEventListener) { //run setup fnction when page finishes loading
			//window.addEventListener("load", createEventListeners, false);
			window.addEventListener("load", setUpPage, false);

		} else if (window.attachEvent) {
			//window.attachEvent("onload", createEventListeners);
			window.attachEvent("onload", setUpPage);
		}	





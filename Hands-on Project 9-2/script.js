//JavaScript file
//Hands-on Project 9-2
//Lisa Kilker
//May 2, 2018

"use strict";

function populateInfo() {
		if (document.cookie) {
	var uname = document.cookie;
		uname = uname.substring(uname.lastIndexOf("=") + 1);
		document.getElementById("usernameinput").value = uname;
		}
}

function processCookie() {
		document.cookie = "username=" + document.getElementById("usernameinput").value;
}

function handleSubmit(evt) {
		if (evt.preventDefault) {
			evt.preventDefault();
		
		} else {
			evt.returnValue = false;
		}

		processCookie();
		
		document.getElementsByTagName("form")[0].submit();
}

function createEventListener() {
	var loginForm = document.getElementsByTagName("form")[0];

		if (loginForm.addEventListener) {
			loginForm.addEventListener("submit", handleSubmit, false);
		
		} else if (loginForm.attachEvent) {
			loginForm.attachEvent("onsubmit", handleSubmit);
		}
}

function setUpPage() {
		populateInfo();
		createEventListener();
}

		if (window.addEventListener) {
			window.addEventListener("load", setUpPage, false);

		} else if (window.attachEvent) {
			window.attachEvent("onload", setUpPage);
		}
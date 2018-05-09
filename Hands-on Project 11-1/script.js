/*  JavaScript 6th Edition
    Chapter 11
    Hands-on Project 11-1

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
		catch (requestError) {
			return false;
		}
		return httpRequest;
}

function getResults(evt) {
		if (evt.preventDefault) {
			evt.preventDefault();
		} else {
			evt.returnValue = false;
		}

	var entry = document.getElementsByTagName("input")[0].value;

		if (!httpRequest) {
			httpRequest = getRequestObject();
		}

			httpRequest.abort();
			httpRequest.open("get","search.php?q=" + entry, true);
			httpRequest.send();
			httpRequest.onreadystatechange = displaySuggestions;
}

function displaySuggestions() {
		if (httpRequest.readyState === 4 && httpRequest.status === 200) {
			searchResults = JSON.parse(httpRequest.responseText);

	var items = searchResults.d.results;
	var articleEl = document.getElementsByTagName("article")[0];

		for (var i = 0; i < items.length; i++) {
	var newDiv = document.createElement("div");
	var head = document.createDocumentFragment();
	var newP1 = document.createElement("p");
	var newP2 = document.createElement("p");
	var newP3 = document.createElement("p");
	var newA = document.createElement("a");

			head.appendChild(newP1);
			newA.innerHTML = items[i].Title;
			newA.setAttribute("href", items[i].Url);
			newP1.appendChild(newA);
			newP2.className = "url";
			newP3.innerHTML = items[i].Description;
			newDiv.appendChild(head);
			newDiv.appendChild(newP2);
			newDiv.appendChild(newP3);
			articleEl.appendChild(newDiv);
		}
	}
}

	var form = document.getElementsByTagName("form")[0];
		if (form.addEventListener) {
			form.addEventListener("submit", getResults, false);
		} else if (form.attachEvent) {
			form.attachEvent("onsubmit", getResults);
		}


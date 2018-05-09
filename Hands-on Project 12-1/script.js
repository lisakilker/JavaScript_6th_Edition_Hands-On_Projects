//Lisa Kilker
//May 9, 2018
//Chapter 12
//Hands-on Project 12-1

function display(event) {
	$(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);
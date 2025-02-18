//your JS code here. If required.
function hover(params) {
	const ele1 = document.querySelector(`#square${params == 1 ? 2 : 1}`);
	const ele2 = document.querySelector(`#square${(params == 1 || params == 2) ? 3 : 2}`);

	ele1.style.background = "#6F4E37";
	ele2.style.background = "#6F4E37";
}

function leaved() {
	document.querySelector("#square1").style.background = "#E6E6FA";
	document.querySelector("#square2").style.background = "#E6E6FA";
	document.querySelector("#square3").style.background = "#E6E6FA";
}

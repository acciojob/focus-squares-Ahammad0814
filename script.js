//your JS code here. If required.
function hover(params) {
	const ele1 = document.querySelector(`#square${params == 1 ? 2 : 1}`);
	const ele2 = document.querySelector(`#square${(params == 1 || params == 2) ? 3 : 2}`);

	ele1.style.background = "#6F4E37";
	ele2.style.background = "#6F4E37";
}

function leaved() {
	const elements = document.querySelectorAll(".square");
	elements.forEach(ele => ele.style.background = "#E6E6FA");
}

document.querySelector("#square1").addEventListener("mouseover", function() {
    hover(1);
});

document.querySelector("#square2").addEventListener("mouseover", function() {
    hover(2);
});

document.querySelector("#square3").addEventListener("mouseover", function() {
    hover(3);
});


document.querySelector("#square1").addEventListener("mouseleave", function() {
    leaved();
});

document.querySelector("#square2").addEventListener("mouseleave", function() {
    leaved();
});

document.querySelector("#square3").addEventListener("mouseleave", function() {
    leaved();
});


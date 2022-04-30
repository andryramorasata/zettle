// Initialize button with user's preferred color

let changeColor = document.getElementById("changColor");

chrome.storage.sync.get("color", ({ color }) => {
	changeColor.style.backgroundColor = color;
});

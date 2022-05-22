
// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});




// When the butoon is clicked, inject setPageBAckgroundColor into current page
changeColor.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: saveSelectedText,
	});
});


// The body of this function will be executed as a content script inside the 
// current page

function saveSelectedText()
{
    let text; 
    
    if(window.getSelection())
        text = window.getSelection().toString();
    

    prompt("Press CTRL+C or CMD+C, then escape and paste into Roam.", "__"+text+"__ — via ["+document.title+"]("+location.href+") [[+Roam]]");
}

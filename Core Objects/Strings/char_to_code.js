// initialize when the page has loaded
window.addEventListener('load' , initialize);

// show character code when text is selected
document.addEventListener('mouseup' , showCharCode);

function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById){
		var oButton = document.getElementById('showstr');

		if(oButton){
			oButton.addEventListener('click',showString);
		}
	}
}

// show the text characters represented by the numbers entered
function showString()
{
	var oEntry1 = document.getElementById('entry1');
	var oEntry2 = document.getElementById('entry2');
	var oEntry3 = document.getElementById('entry3');
	var oResult = document.getElementById('result');

	oResult.value = String.fromCharCode(oEntry1.value,oEntry2.value,oEntry3.value);
}

// display the character code of the selected text
// first character only
function showCharCode()
{
	var theText = "";
	var oDisplay = document.getElementById('display');

	// get the selected text using various browser methods
	if(window.getSelection){
		theText = window.getSelection().toString();
	}
	else if(document.getSelection){
		theText = window.getSelection().toString();
	}

	// display the result if any
	if(theText){
		oDisplay.value = theText.charCodeAt();
	}else{
		oDisplay.value = "";
	}
}
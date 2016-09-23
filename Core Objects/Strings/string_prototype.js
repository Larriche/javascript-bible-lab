// initialize when the page has loaded
window.addEventListener('load' , initialize);

function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById)
	{
		// point to crtitical elements
		var oButton = document.getElementById('do-caps');
		var oEntry = document.getElementById('entry');

		// if they all exist
		if(oButton && oEntry){
			// apply behaviour to button
			oButton.addEventListener('click' ,doCaps);
		}
	}
}

// try out the new String method
function doCaps()
{
	// point to the input field
	var oEntry = document.getElementById('entry');

	// use the new method to update the input text
	oEntry.value = oEntry.value.initialCaps();
}

// extending String capabilities by adding a new method
// to capitalize the first letter of each word

String.prototype.initialCaps = function()
{
	// get the input text
	var sText = this.toString();

	// separate individual words;
	var aWords = sText.split(' ');

	// capitalize each word
	for(var i = 0;i < aWords.length;i++){
		var sInitial = aWords[i].charAt(0);
		var sRemainder = aWords[i].substr(1);
		aWords[i] = sInitial.toUpperCase() + sRemainder.toLowerCase();
	}

	// reassemble the array of words back into a string
	return aWords.join(' ');
}
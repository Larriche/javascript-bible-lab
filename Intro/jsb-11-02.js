// initialize when the page has loaded
window.onload = initialize;

var oInput;       // (global) input field to make uppercase

// apply behaviours when page has loaded
function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById)
	{
		// apply event handler to the button
		oInput  = document.getElementById('converter');

		if(oInput){
			oInput.addEventListener('change',upperMe)
		}

		// apply event handler to the form
		var oForm = document.getElementById('UCform');
		if(oForm){
			oForm.addEventListener('submit',upperMe);
		}
	}
}

// make the text UPPERCASE
function upperMe(evt)
{
	// consolidate event handling
	if(!evt) evt = window.event;

	// set input field value to the uppercase version of itself
	var sUpperCaseValue = oInput.value.toUpperCase();
	oInput.value = sUpperCaseValue;

	// cancel default behaviour(esp form submission)
	if(evt.preventDefault) evt.preventDefault();

	// IE method
	return false;
}
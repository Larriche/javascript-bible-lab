window.onload = insertDateTime;

// insert the date and time
function insertDateTime()
{
	// ensure a DOM-aware user agent
	if(!document.getElementById) return;
	if(!document.createTextNode) return;

	// create a date-time object
	var now = new Date();

	// get current date and time as string
	var nowStr = now.toLocaleString();

	// point to the target element where we want to insert the date and time
	var output = document.getElementById('output');

	// make sure the target is found
	if(!output) return;

	// delete everything in the target
	while(output.firstChild)
	{
		output.removeChild(output.firstChild);
	}

	// use the date-time string to create a new text node for the page
	var outputText = document.createTextNode(nowStr);

    // insert the new text into the span
    output.appendChild(outputText);
}
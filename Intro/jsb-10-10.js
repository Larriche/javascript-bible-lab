// initialize when the page is loaded
window.onload = initialize;

function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById)
	{
		// point to critical elements
		var oButtonCreate = document.getElementById('create-window');
		var oButtonClose  = document.getElementById('close-window');

		// if they all exist
		if(oButtonCreate && oButtonClose){
			// apply behaviours
			oButtonCreate.onclick = makeNewWindow;
			oButtonClose.onclick = closeNewWindow;
		}
	}
}

var newWindow;

function makeNewWindow()
{
	newWindow = window.open("","","height=300,width=300");
}

function closeNewWindow()
{
	if(newWindow){
		newWindow.close();
		newWindow = null;
	}
}
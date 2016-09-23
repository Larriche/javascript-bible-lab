// initialize when the page has loaded
window.onload = initialize;

var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" ,
              "July" , "August" , "September" , "October" , "November" , "December"];

var dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday",
            "Saturday"];

function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById){
		// pint to the paragraph to contain the date
		oOutput = document.getElementById('output');

		// if it exists, replace its contents with the date
		if(oOutput){
			// remove all child nodes from the paragraph
			while(oOutput.firstChild){
				oOutput.removeChild(oOutput.firstChild);
			}

			// create a text node with the date
			var sDate = customDateString(new Date());
			var oNewText = document.createTextNode(sDate);

			// insert content into paragraph
			oOutput.appendChild(oNewText);
		}
	}
}

function customDateString(oDate)
{
	var theDay = dayNames[oDate.getDay()];
	var theMonth = monthNames[oDate.getMonth()];
	var theYear = oDate.getFullYear();

	return theDay + "," + theMonth + " " + oDate.getDate() + " , " + theYear;
}
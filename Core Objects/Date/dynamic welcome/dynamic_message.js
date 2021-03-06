window.onload = initialize;

var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" ,
              "July" , "August" , "September" , "October" , "November" , "December"];

var dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday",
            "Saturday"];

function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById){
		// point to the target paragraph
		var oDateDisplay = document.getElementById('date');
		var oGreeting = document.getElementById('greeting');

		// if they exist , plug in new content
		if(oDateDisplay && oGreeting){
			var oNow = new Date();
			var sDate = customDateString(oNow);
			replaceTextContent(oDateDisplay , sDate);

			// plug day-part into greeting
			var sDayPart = dayPart(oNow);
			replaceTextContent(oGreeting , sDayPart);
		}
	}
}

// generate a formatted dat
function customDateString(oDate)
{
	var theDay = dayNames[oDate.getDay()];
	var theMonth = monthNames[oDate.getMonth()];
	var theYear = oDate.getFullYear();
	return theDay + ", " + theMonth + " " + oDate.getDate() + " , " + theYear;
}

// get the part of the day
function dayPart(oDate)
{
	var theHour = oDate.getHours();

	if(theHour < 6){
		return "wee hours";
	}

	if(theHour < 12){
		return "morning";
	}

	if(theHour < 18){
		return "afternoon";
	}

	return "evening";
}

// replaces the text contents of a page lement
function replaceTextContent(oElement , sContent)
{
	// if the object exists
	if(oElement){
		// remove all child nodes
		while(oElement.firstChild){
			oElement.removeChild(oElement.firstChild);
		}

		// create a text node with the new content
		var oNewText = document.createTextNode(sContent);

		// insert that content
		oElement.appendChild(oNewText);
	}
}
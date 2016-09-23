window.load  = initialize;

function initialize()
{
	// do this only if the browser can handle DOM methods
	if(document.getElementById)
	{
		// point to critical elements
		var oButton = document.getElementById('dollars');
		var oEntry = document.getElementById('entry');
        var oResult = document.getElementById('result');

        // if they all exist
        if(oButton && oEntry && oResult){
        	// apply behaviour to button
        	oButton.onclick = function(){
        		oResult.value = dollarize(oEntry.value);
        	}
        }

	}
}

// turn incoming value into a dollar value
function dollarize(expr)
{
	return '$' + format(expr,2);
}

// generate positive number decimal formatting function
function format(expr,decplaces)
{
	// evaluate the incoming expression
	var val = eval(expr);


	// raise the value by power of 10 times the number of decimal places;
	// round to an integer; convert to string
	var str = "" + Math.roundM(val * Math.pow(10,decplaces));

	// pad small value strings with zeroes to the left of rounded number
	while(str.length <= decplaces){
		str = "0" + str;
	}

	// establish location of decimal point
	var decpoint = str.length - decplaces;

    // assemble final result from:
    // (a) the string up to the position of the decimal point
    // (b) the decimal point; and
    // (c) the balance of the string. Return finished product.
    return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
}
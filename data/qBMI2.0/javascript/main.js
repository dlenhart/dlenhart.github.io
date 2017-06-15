//snowytech.com  
//v2.0
//December 2015


var slide = {
	transition : "pop"
};
var answerOne = "#answerPop";
var invalidPop = "#invalid";

// Begin main bmiE function ---------------------------------------------
var bmiE = function() {
	var x;
	var y;
	x = document.getElementById('height');
	y = document.getElementById('weight');
	z = document.getElementById('feet');
	za = document.getElementById('inches');
	var xSelect = selector.options[selector.options.selectedIndex].value;

	// Form validation. If forms accurate invoke isValid function to calculate.
	if (xSelect === "eng2") {
		if (isNaN(z.value && za.value)) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else if (z.value === "" || z.value === null) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else if (za.value === "" || za.value === null) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else if (y.value === "" || y.value === null) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else {
			isValid();
		}

	}

	else if (xSelect === "eng") {
		validate(x, y);
	} else if (xSelect === "metric") {
		validate(x, y);
	} else if (xSelect === "metric2") {
		validate(x, y);
	}

	// Validate function---------------------------------------
	function validate(x, y) {
		if (isNaN(x.value && y.value)) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else if (x.value === "" || x.value === null) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else if (y.value === "" || y.value === null) {
			$.mobile.changePage(invalidPop, slide);
			return false
		} else {
			// invoke inValid() and perform calculations
			isValid();
		}
	}

	// isValid function--if valid, calculate numbers depending on which
	// selection --------
	function isValid() {
		if (xSelect === "metric") {
			answer = y.value / Math.pow(x.value, 2);

		}
		if (xSelect === "metric2") {
			answer = y.value / Math.pow((x.value / 100), 2);

		}
		if (xSelect === "eng") {
			answer = [ y.value / Math.pow(x.value, 2) ] * 703;

		}
		if (xSelect === "eng2") {
			getinVal = parseFloat(za.value);
			getInches = z.value * 12 + getinVal;
			answer = [ y.value / Math.pow(getInches, 2) ] * 703;

		}

		// Invoke popup and display output
		$.mobile.changePage(answerOne, slide);
		document.getElementById('answer').innerHTML = Math.round(answer * 100) / 100;
	}

	if (answer <= 15.99) {
		document.getElementById('answerOut').innerHTML = "Severe Thinness";
		return false
	} else if (answer >= 16.00 && answer <= 16.99) {
		document.getElementById('answerOut').innerHTML = "Moderate Thinness";
		return false
	} else if (answer >= 17.00 && answer <= 18.49) {
		document.getElementById('answerOut').innerHTML = "Mild Thinness";
		return false
	} else if (answer >= 18.50 && answer <= 24.99) {
		document.getElementById('answerOut').innerHTML = "Normal Weight";
		return false
	} else if (answer >= 25.00 && answer <= 29.99) {
		document.getElementById('answerOut').innerHTML = "Overweight";
		return false
	} else if (answer >= 30.00 && answer <= 34.99) {
		document.getElementById('answerOut').innerHTML = "Obese Class I";
		return false
	} else if (answer >= 35.00 && answer <= 39.99) {
		document.getElementById('answerOut').innerHTML = "Obese Class II";
		return false
	} else if (answer >= 40.0) {
		document.getElementById('answerOut').innerHTML = "Obese Class III";
		return false
	}

}
// end bmiE() function ------------------------------------------------------

// -- checkV -- Hides and displays fields depending on selection--
function checkV(val) {
	if (val === "eng2") {
		dispFeet();
		dispInch();
		document.getElementById('height').style.display = 'none';
		document.getElementById('heightlbl').style.display = 'none';
	} else if (val === "eng") {
		dispHei();
		hideEng();
	} else if (val === "metric") {
		dispHei();
		hideEng();
	} else if (val === "metric2") {
		dispHei();
		hideEng();
	} else {
		hideEng();
	}

}

function dispFeet() {
	document.getElementById('feetlbl').style.display = 'block';
    document.getElementById('hideFeet').style.display = 'block';
}
function dispInch() {
	document.getElementById('inchlbl').style.display = 'block';
    document.getElementById('hideInch').style.display = 'block';
}
function hideEng() {
    document.getElementById('hideFeet').style.display = 'none';
    document.getElementById('hideInch').style.display = 'none';
}
function dispHei(){
	document.getElementById('height').style.display = 'block';
	document.getElementById('heightlbl').style.display = 'block';
}

//Refreshes fields when selecting different mode------------------
function refresh(){
	document.getElementById('height').value = "";
	document.getElementById('weight').value = "";
	document.getElementById('feet').value = "";
	document.getElementById('inches').value = "";
}

// Button click invokes main BMI function
$(document).ready(function() {

	$('#calcuBMI').tap(function() {
		bmiE();
	});

	$('#reSetButton').tap(function() {
		refresh();
	});

});

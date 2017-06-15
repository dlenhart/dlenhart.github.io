/*
Calcu Pack - Sales Calc
-Drew D. Lenhart
-snowytech.com
-Dec 2015
-----------------------------------------------------------------------*/

/* Sales Tax Calculator-----------------------------------------------------------------------*/
var invalidPop = "#invalid";
var answerOne = "#answerPop";

var answer, costOut, ansOut, taxOut, cost, tax, finalAnswer, finalCost, finalPayment;

function calc_sales() {
	cost = document.getElementById('price');
	tax = document.getElementById('tax');
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if (isNaN(cost.value)) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	if (isNaN(tax.value)) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	if (cost.value === "" || cost.value === null) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	if (tax.value === "" || tax.value === null) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	/*End Form validation---------------------------------------------------------*/

	costOut = parseFloat(cost.value);
    answer = costOut * (tax.value / 100);
	ansOut = costOut + answer;

	finalAnswer = Math.round(answer * 100) / 100;
    finalCost = Math.round(cost.value * 100) / 100;
    finalPayment = Math.round(ansOut * 100) / 100;
    
    $("#answer").html("Total Tax: $" + finalAnswer);
    $("#answer3").html("Orig cost: $" + finalCost);
    $("#answer2").html("Total Payment: $" + finalPayment);

	$.mobile.changePage(answerOne, { allowSamePageTransition: true, transition: "fade" });

    return false;
}


function resetPage() {
	document.getElementById('answer').innerHTML = "";
	document.getElementById('answer2').innerHTML = "";
	//resets the value of the text boxes.
	document.getElementById('price').value = "";
	document.getElementById('tax').value = "";
	
	answer = null;
	costOut = null;
	ansOut = null;
	taxOut = null;
    finalAnswer = null;
    finalCost = null;
    finalPayment = null;
	
	var myState = $("select#state");
    myState[0].selectedIndex = 0;
    myState.selectmenu("refresh");
    
    $("#recent_calc").html("");
                           
	return false;
}

//State selector values - Populates the text box with tax rate jquery
$(document).on("change", "#state", function () {
    $("#tax").val(this.value); // this.value is enough for you
}).val($('#tax').val()).change(); // for pre-selection trigger

//Calculate button fires calculate function
$("#sales_t").click(function () {
    calc_sales();
});
//Reset button fires resetPage function
$("#reset_t").click(function () {
    resetPage();
});

//When ok button is clicked, send back data to last calc box
$("#send_back").click(function () {
    $("#recent_calc").html("<div class='alert alert-info text-center' role='alert'>Last Calculation:<br />Tax: $" + finalAnswer + "<br />Cost: $" + finalCost + "<br />Payment: $" + finalPayment + "</div>");
});

/* End -- Sales Tax Calculator-----------------------------------------------------------------------*/
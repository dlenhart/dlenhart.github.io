/*
Calcu Pack - Tip Calc
-Drew D. Lenhart
-snowytech.com
-Dec 2015
-----------------------------------------------------------------------*/

/* Tip Calculator-----------------------------------------------------------------------*/
var answerOne2 = "#answerPop2";
var meal, tip, xSelect, xPeople, tipOut, totBill, billOut, splitOut, finalTip, finalBill, finalBillOut, finalSplit;

function tipCalc() {
	meal = document.getElementById('meal');
	tip = document.getElementById('tip');
	xSelect = selector.options[selector.options.selectedIndex].value;
	xPeople = people.options[people.options.selectedIndex].value;
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if (isNaN(meal.value)) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	if (meal.value === "" || meal.value === null) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	/*End Form validation---------------------------------------------------------*/
    
	tipOut = meal.value * xSelect;
	totBill = parseFloat(meal.value);
	billOut = totBill + tipOut;
    splitOut = billOut / xPeople;
    
    finalTip = Math.round(tipOut * 100) / 100;
    finalBill = Math.round(billOut * 100) / 100;
    finalBillOut = xPeople + " people.";
    finalSplit = Math.round(splitOut * 100) / 100;
    
    $("#outTip").html("Total Tip: $" + finalTip);
    $("#outTip2").html("Total bill: $" + finalBill);
    $("#outTip4").html("Splitting bill w/ " + finalBillOut);
    $("#outTip3").html("Price per person = $" + finalSplit);
    
    $.mobile.changePage(answerOne2, { allowSamePageTransition: true, transition: "fade" });
    
	return false;
}


function resetTip() {
	document.getElementById('outTip').innerHTML = "";
	document.getElementById('outTip2').innerHTML = "";
	//resets the value of the text boxes.
	document.getElementById('meal').value = "";
	
	var myselector = $("select#selector");
    myselector[0].selectedIndex = 0;
    myselector.selectmenu("refresh");
	
	tipOut = null;
	totBill = null;
	billOut = null;
	splitOut = null;
    finalTip = null;
    finalBill = null;
    finalBillOut = null;
    finalSplit = null;
	
	var mypeople = $("select#people");
    mypeople[0].selectedIndex = 0;
    mypeople.selectmenu("refresh");
    
    $("#recent_tip").html("");
    
	return false;
}

//Calculate button fires calculate function
$("#tip_c").click(function () {
    tipCalc();
});
//Reset button fires resetPage function
$("#tip_r").click(function () {
    resetTip();
});

//When ok button is clicked, send back data to last calc box
$("#send_back_tip").click(function () {
    $("#recent_tip").html("<div class='alert alert-info text-center' role='alert'><em>Last Calculation:</em><br />Bill: $" + totBill + "<br />Tip: $" + finalTip + "<br />Total Bill: $" + finalBill + "</div>");
});

/* End -- Tip Calculator-----------------------------------------------------------------------*/
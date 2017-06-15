/*
Calcu Pack - 1.04
-Drew D. Lenhart
-snowytech.com
-May 2012
-----------------------------------------------------------------------*/

/* Sales Tax Calculator-----------------------------------------------------------------------*/

var invalidPop = "#invalid";
var slide = { transition: "fade" };
var answerOne = "#answerPop";
var answerOne2 = "#answerPop2";
var answerOne3 = "#answerPop3";

$.mobile.buttonMarkup.hoverDelay

function blah(cost, tax){
	
	
	var cost;
	var tax;
	var answer;
	var costOut;
	var ansOut;
	var taxOut;
	cost = document.getElementById('price');
	tax = document.getElementById('tax');
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if(isNaN(cost.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}
	if(isNaN(tax.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}
	if(cost.value === "" || cost.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "Please enter a number!";*/
	}
	if(tax.value === "" || tax.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
	}
	/*End Form validation---------------------------------------------------------*/	
	
	
	costOut = parseFloat(cost.value);
		
	answer = costOut * (tax.value/100);
	
	ansOut = costOut + answer;
		
	$.mobile.changePage(answerOne, slide);
	
	document.getElementById('answer').innerHTML = "Total Tax: $" + Math.round(answer*100)/100;
	
	document.getElementById('answer3').innerHTML = "Orig cost: $" + Math.round(cost.value*100)/100;
	document.getElementById('answer2').innerHTML = "Total Payment: $" + Math.round(ansOut*100)/100;
	return false;	
}


function resetPage(){
	document.getElementById('answer').innerHTML = "";
	document.getElementById('answer2').innerHTML = "";
	//resets the value of the text boxes.
	document.getElementById('price').value = "";
	document.getElementById('tax').value = "";
	
	answer = null;
	costOut = null;
	ansOut = null;
	taxOut = null;
	
	
	var myState = $("select#state");
    myState[0].selectedIndex = 0;
    myState.selectmenu("refresh");
	return false;
}


//State selector values - Populates the text box with tax rate jquery

$(document).ready(function() {

    $("#state option").filter(function() {
        return $(this).val() == $("#tax").val();
    }).attr('selected', true);

    $("#state").live("change", function() {

        $("#tax").val($(this).find("option:selected").attr("value"));
    });
});


/* End -- Sales Tax Calculator-----------------------------------------------------------------------*/

/* Tip Calculator-----------------------------------------------------------------------*/

function tipCalc(meal, tip){
	
	
	var meal;
	var tip;
	meal = document.getElementById('meal');
	tip = document.getElementById('tip');
	var xSelect = selector.options[selector.options.selectedIndex].value;
	var xPeople = people.options[people.options.selectedIndex].value;
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if(isNaN(meal.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}
	if(meal.value === "" || meal.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "Please enter a number!";*/
	}
	//if(tip.value === "" || tip.value === null){
		//$.mobile.changePage(invalidPop, slide);
		//return false;
	//}
	/*End Form validation---------------------------------------------------------*/	
	
	var tipOut;
	var totBill;
	var billOut;
	var splitOut;
	
	tipOut = meal.value * xSelect;
	totBill = parseFloat(meal.value);
	billOut = totBill + tipOut;
	
	splitOut = billOut/xPeople;
	
	$.mobile.changePage(answerOne2, slide);
	
	document.getElementById('outTip').innerHTML = "Total Tip: $" + Math.round(tipOut*100)/100;
	document.getElementById('outTip2').innerHTML = "Total bill: $" + Math.round(billOut*100)/100;
	
	document.getElementById('outTip4').innerHTML = "Splitting bill w/ "+ xPeople + " people.";
	
	document.getElementById('outTip3').innerHTML = "Price per person = $" + Math.round(splitOut*100)/100;
	return false;	
}


function resetTip(){
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
	
	var mypeople = $("select#people");
    mypeople[0].selectedIndex = 0;
    mypeople.selectmenu("refresh");
	return false;
}

/* End -- Tip Calculator-----------------------------------------------------------------------*/


/* Discount Calculator-----------------------------------------------------------------------*/

function discount(orPrice){
		
	var orPrice = document.getElementById('orPrice');
	var orSales = document.getElementById('taxTwo');
	var xDisc = disCo.options[disCo.options.selectedIndex].value;
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if(isNaN(orPrice.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}
	if(isNaN(orSales.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}

	if(orPrice.value === "" || orPrice.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
	}
	
	if(orSales.value === "" || orSales.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
	}
	/*End Form validation---------------------------------------------------------*/	
	
	var andPri;
	var ansDis;
	var ansPri;
	var andSal;
	var ansFin;
	var ansFin2;
	
	andPri = parseFloat(orPrice.value);
	ansDis = andPri * xDisc;
	
	ansPri = andPri - ansDis; // Final Price after discount 
	andSal = parseFloat(orSales.value);  //Parse to integer for the Sales tax.
	
	ansFin = ansPri * (andSal/100);
	
	ansFin2 = ansPri + ansFin;
	//ansDis2 = orPrice - ansDis;
	
	$.mobile.changePage(answerOne3, slide);
	
	document.getElementById('ansDiscount').innerHTML = "You save: $" + Math.round(ansDis*100)/100;
	document.getElementById('ansDiscount2').innerHTML = "Before Tax: $" + Math.round(ansPri*100)/100;
	document.getElementById('ansDiscount3').innerHTML = "Tax: $" + Math.round(ansFin*100)/100;
	document.getElementById('ansDiscount4').innerHTML = "After Tax: $" + Math.round(ansFin2*100)/100;
	return false;	
}


function resetDisc(){
	document.getElementById('ansDiscount').innerHTML = "";
	document.getElementById('ansDiscount2').innerHTML = "";
	//resets the value of the text boxes.
	document.getElementById('orPrice').value = "";
	document.getElementById('taxTwo').value = "";
	
	var myselect = $("select#disCo");
    myselect[0].selectedIndex = 0;
    myselect.selectmenu("refresh");
	
	var myStater = $("select#state2");
    myStater[0].selectedIndex = 0;
    myStater.selectmenu("refresh");
	
	andPri = null;
	ansDis = null;
	ansPri = null;
	andSal = null;
	ansFin = null;
	ansFin2 = null;
	
	return false;
}

$(document).ready(function() {

    $("#state2 option").filter(function() {
        return $(this).val() == $("#taxTwo").val();
    }).attr('selected', true);

    $("#state2").live("change", function() {

        $("#taxTwo").val($(this).find("option:selected").attr("value"));
    });
});

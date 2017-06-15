/*
Calcu Pack - Disc Calc
-Drew D. Lenhart
-snowytech.com
-Dec 2015
-----------------------------------------------------------------------*/

/* Discount Calculator-----------------------------------------------------------------------*/
var answerOne3 = "#answerPop3";

var andPri, ansDis, ansPri, andSal, ansFin, ansFin2, finalSavings, finalBeforeTax, finalTax, finalAfter;

function discount() {
	var orPrice = document.getElementById('orPrice');
	var orSales = document.getElementById('taxTwo');
	var xDisc = disCo.options[disCo.options.selectedIndex].value;
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if (isNaN(orPrice.value)) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	if (isNaN(orSales.value)) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}

	if (orPrice.value === "" || orPrice.value === null) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	
	if (orSales.value === "" || orSales.value === null) {
		$.mobile.changePage(invalidPop, { allowSamePageTransition: true, transition: "fade" });
		return false;
	}
	/*End Form validation---------------------------------------------------------*/

	andPri = parseFloat(orPrice.value);
	ansDis = andPri * xDisc;
	
	ansPri = andPri - ansDis; // Final Price after discount 
	andSal = parseFloat(orSales.value);  //Parse to integer for the Sales tax.
	
	ansFin = ansPri * (andSal / 100);
    ansFin2 = ansPri + ansFin;
    
    finalSavings = Math.round(ansDis * 100) / 100;
    finalBeforeTax = Math.round(ansPri * 100) / 100;
    finalTax = Math.round(ansFin * 100) / 100;
    finalAfter = Math.round(ansFin2 * 100) / 100;
    
    $("#ansDiscount").html("You save: $" + finalSavings);
    $("#ansDiscount2").html("Before Tax: $" + finalBeforeTax);
    $("#ansDiscount3").html("Tax: $" + finalTax);
    $("#ansDiscount4").html("After Tax: $" + finalAfter);
    
    $.mobile.changePage(answerOne3, { allowSamePageTransition: true, transition: "fade" });

	return false;
}


function resetDisc() {
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
    finalSavings = null;
    finalBeforeTax = null;
    finalTax = null;
    finalAfter = null;
    
    $("#disc_disc").html("");
	
	return false;
}

$(document).ready(function () {

    $("#state2 option").filter(function () {
        return $(this).val() === $("#taxTwo").val();
    }).attr('selected', true);

    $("#state2").on("change", function () {

        $("#taxTwo").val($(this).find("option:selected").attr("value"));
    });
    
    //Calculate button fires calculate function
    $("#sales_d").click(function () {
        discount();
    });
    //Reset button fires resetPage function
    $("#reset_d").click(function () {
        resetDisc();
    });
    //Reset button fires resetPage function
    $("#send_back_dis").click(function () {
        $("#disc_disc").html("<div class='alert alert-info text-center' role='alert'><em>Last Calculation:</em><br />Save: $" + finalSavings + "<br />Before Tax: $" + finalBeforeTax + "<br />Tax: $" + finalTax + "<br />After Tax: $" + finalAfter + "</div>");
    });
});

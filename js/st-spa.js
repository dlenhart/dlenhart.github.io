/*!
    Title: ST-SPA - Single Page App
    Version: 1.0.0
    Date: 04/11/17
    Author: Drew D. Lenhart
    Repo: https://github.com/snowytech/st-spa
    Description: A simple single page application using materialize.  JS file for 
	navigation buttons and page scrolling.
*/

(function($) {
	
	var speed = 400;
	
	//Nav bar scroll/animate
	$('#spa-menu a').click(function(e){
		e.preventDefault();
		
		var current = $(this);
		var link = current.attr('href');
		
		$('html, body').animate({
			scrollTop: $(link).offset().top
		}, speed, 'swing', function(){
			window.location.hash = link;
		});
	
	});
	
	//Return to top
	$('#topbtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, speed, 'swing', function(){
			window.location.hash = "home";
		});
    });

})(jQuery);
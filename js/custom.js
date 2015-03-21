
$(document).ready(function  () {
	
	$('#loading').fadeOut('slow', function  () {
		// body...
		$(this).remove();
		init();
		
	})

});

function init () {
	// video pepup
	popUp();


	// countdown timer

	countdown();


	// smooth scroll

	smoothScroll();
	
	// scrollup

	scrollUp();

	// type writer effect.
	typeWrite();


}

function popUp () {

	// src: dimsemenov.com/plugins/magnific-popup/

	$('.watch-video').magnificPopup({
        items: [
        	{
	        src: 'http://vimeo.com/103671108',
	        type: 'iframe' // this overrides default type
	      },
        ]
    });

}

function countdown () {
	
	// src: http://keith-wood.name/countdown.html
	layout = $('.timer').html();
	var newYear = new Date(); 
	newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
	$('.timer').countdown({until: newYear, layout: layout}); 
	 
	
}

function smoothScroll () {
	
	// src: https://github.com/kswedberg/jquery-smooth-scroll

	$.smoothScroll({
		speed: 20,
	});	

	// scroll to about section in header.

	$('.scroll-to-about').on('click', function (e) {
		e.preventDefault();
		$.smoothScroll({
			scrollTarget: '#about',
			easing: 'easeInOutBack',
			speed: 1500,
		})
	});
}


function scrollUp () {

	// src: http://markgoodyear.com/2013/01/scrollup-jquery-plugin/

	 $.scrollUp({
        animation: 'fade',
        scrollText: '&#xf106'
    });
	 
	// available optoins
	/**
	    scrollName: 'scrollUp', // Element ID
	    topDistance: '300', // Distance from top before showing element (px)
	    topSpeed: 20000, // Speed back to top (ms)
	    animation: 'none', // Fade, slide, none
	    animationInSpeed: 1000, // Animation in speed (ms)
	    animationOutSpeed: 0, // Animation out speed (ms)
	    scrollText: '&#xf106;', // Text for element
	    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  	**/

	
}


// type writer

function typeWrite () {
	// src: https://github.com/mattboldt/typed.js/
	$('.type-writer .type-here').typed({
        strings: ["buy a house.", "pay for college.", "invest for retirement.", "start a business."],
        typeSpeed: 110,
        backDelay: 2000,
        loop: true,
      });
}

// stellar

function stellar () {
	
	$.stellar({
		 horizontalScrolling: false,
	});
}

// background slideshow

// background animation

function backgroundSlideshow () {

	//src: https://github.com/srobbin/jquery-backstretch
	  $('header').backstretch([
          'images/bg-slider/2.jpg',
          'images/bg-slider/1.jpg',
          'images/bg-slider/4.jpg',
          'images/bg-slider/3.jpg',
        ], {
          duration: 5000,
          fade: 800,
     });


}
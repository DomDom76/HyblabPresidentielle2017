$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',

        navigation: true,
        navigationPosition: 'right',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: true,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        fadingEffect: false,
        normalScrollElements: '#slide3',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

         //Design
        controlArrows: true,
        verticalCentered: true,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

	    //Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

         lazyLoading: true,

         //events

	    onLeave: function(index, nextIndex, direction)
	    {
	        //$('#titre_gauche').hide();
	        if (nextIndex===1)
	        {
	            $('#fp-nav').fadeOut();
	        }

	        
	    },
	        afterLoad: function(anchorLink, index)
	    {
	        if (index===1)
	        {
	            $('#fp-nav').hide();

	            $('#div_apparition_fleche').addClass('apparition_fleche');
	            reset_anim_slide3();

	            /* Reset animation autres pages */
	            /*$("#text_slide3").removeClass('dezoom');
	            $("#titre_slide3").removeClass('apparition_text_slide3');
	            $("#ville1_side3").removeClass('apparition_ville1_slide3');
	            $("#text_slide3").removeClass('disparition_text_slide3');
	            $("#titre_slide3").removeClass('disparition_text_slide3');*/
	        }
	        else
	        {
	            $('#fp-nav').fadeIn();
	        }

	        if (index===2)
            {
                $('#p1').addClass('apparition_p1');
                $('#p2').addClass('apparition_p2');
                $('#p3').addClass('apparition_p3');
                $('#social_network').addClass('apparition_logos');
            }

	        if (index===3)
            {
                $('#partie1_footer').addClass('apparition_partie1_footer');
                $('#partie2_footer').addClass('apparition_partie2_footer');
            }
        }
     });
});


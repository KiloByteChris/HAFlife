/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(document).ready( function(){
    // Get the position of the scroll bar so that the opacity can be set according to the location on the page
    var scrollStart = jQuery(window).scrollTop();
    var scrollCount = 0;
    // Select the elements on the page
    //var backgroundLogo = jQuery('.background-logo');
    var goldWrapper = jQuery('#gold-wrapper');
    var homeFadeWrapper = jQuery('#home-fade-wrapper');
    // backgroundLogo.fadeTo(600, 1);
    if(scrollStart <= 150) {
        //backgroundLogo.delay(800).css({opacity: '1'});
        //goldWrapper.css({opacity: '0'});
        homeFadeWrapper.css({opacity: '0'});
    }
    if(scrollStart > 150){
        //backgroundLogo.css({opacity: '.1'});
        //goldWrapper.css({opacity: '.3'});
        homeFadeWrapper.css({opacity: '.3'});
    }
    jQuery( window ).scroll(function() {
        var scrollPosition = jQuery(window).scrollTop();
        //var logoOpacity = backgroundLogo.css('opacity');
        if(scrollPosition <= 150 /*&& logoOpacity <= .5*/){
            //backgroundLogo.css({opacity: '1'});
            //goldWrapper.css({opacity: '0'});
            homeFadeWrapper.css({opacity: '0'});
            jQuery('body.custom-background').css({backgroundImage: 'url(http://localhost/HAFlife/wordpress-4.9.8/wordpress/wp-content/uploads/2018/11/background_logo_large.png)'});
        }else if(scrollPosition > 150 /*&& logoOpacity > .5*/){
            //backgroundLogo.css({opacity: '.1'});
            //goldWrapper.css({opacity: '.3'});
            homeFadeWrapper.css({opacity: '.3'});
            jQuery('body.custom-background').css({backgroundImage: 'url(http://localhost/HAFlife/wordpress-4.9.8/wordpress/wp-content/uploads/2018/12/background_logo_large_opacity10.png)'});
            // jQuery('body').css({backgroundImage: 'url(http://localhost/HAFlife/wordpress-4.9.8/wordpress/wp-content/uploads/2018/12/background_logo_large_opacity30.png)'});
        }
    });
});

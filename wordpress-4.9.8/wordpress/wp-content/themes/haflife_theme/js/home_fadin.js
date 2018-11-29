/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(document).ready( function(){
    var scrollStart = jQuery(window).scrollTop();
    var scrollCount = 0;
    var backgroundLogo = jQuery('.background-logo');
    var goldWrapper = jQuery('#gold-wrapper');
    // backgroundLogo.fadeTo(600, 1);
    if(scrollStart <= 150) {
        backgroundLogo.delay(800).css({opacity: '1'});
        goldWrapper.css({opacity: '0'});
    }
    if(scrollStart > 150){
        backgroundLogo.css({opacity: '.1'});
        goldWrapper.css({opacity: '.3'});
    }
    jQuery( window ).scroll(function() {
        var scrollPosition = jQuery(window).scrollTop();
        var logoOpacity = backgroundLogo.css('opacity');
        if(scrollPosition <=150 && logoOpacity <= .5){
            console.log(logoOpacity);
            backgroundLogo.css({opacity: '1'});
            goldWrapper.css({opacity: '0'});
        }else if(scrollPosition >150 && logoOpacity > .5){
            backgroundLogo.css({opacity: '.1'});
            goldWrapper.css({opacity: '.3'});

        }
    });
});

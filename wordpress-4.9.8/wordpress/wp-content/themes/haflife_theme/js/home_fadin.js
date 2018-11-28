/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(document).ready( function(){
    var scrollStart = jQuery(window).scrollTop();
    var backgroundLogo = jQuery('.background-logo');
    var goldWrapper = jQuery('#gold-wrapper');
    backgroundLogo.fadeTo(600, 1);
    // if(scrollStart <= 49) {
    //     backgroundLogo.delay(800).css({opacity: '1'});
    //     goldWrapper.css({opacity: '0'});
    // }
    // if(scrollStart > 49){
    //     backgroundLogo.css({opacity: '.1'});
    //     goldWrapper.css({opacity: '.3'});
    // }
    jQuery( window ).scroll(function() {
        var scrollPosition = jQuery(window).scrollTop();
        // if(scrollPosition <= 49 ) {
        //     backgroundLogo.fadeTo(800, 1);
        //     goldWrapper.fadeTo(800, 0);
        // }
        if(scrollPosition > 49 ) {
            backgroundLogo.fadeTo(800, .1);
            goldWrapper.fadeTo(800, .3);
        }
    });
});

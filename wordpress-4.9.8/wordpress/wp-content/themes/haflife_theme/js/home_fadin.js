/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(document).ready( function(){
    jQuery('.background-logo').fadeTo(800, 1);
    jQuery('#gold-wrapper').fadeTo(1600, .3);
    jQuery('.home-tagline, .mission-statement, .home-welcome').delay(800).fadeTo(1600, 1);
    jQuery('.background-logo').fadeTo(1600, .1);
    //Old OnClick style display
    // jQuery('#content').click( function() {
    //     jQuery('.home-tagline').fadeTo(800, 1);
    //     jQuery('.mission-statement').fadeTo(800, 1);
    //     jQuery('.home-welcome').fadeTo(800, 1);
    //     jQuery('#gold-wrapper').fadeTo(800, .3);
    //     jQuery('.background-logo').fadeTo(800, .1);
    // })
});

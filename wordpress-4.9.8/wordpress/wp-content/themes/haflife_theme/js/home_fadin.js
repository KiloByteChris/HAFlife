/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(document).ready( function(){
    jQuery('.background-logo').fadeTo(800, 1);
    jQuery('#content').click( function() {
        jQuery('.home-tagline').fadeTo(800, 1);
        jQuery('.mission-statement').fadeTo(800, 1);
        jQuery('.home-welcome').fadeTo(800, 1);
        jQuery('#gold-wrapper').fadeTo(800, .3);
        jQuery('.background-logo').fadeTo(800, .1);
    })
});

/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(document).ready( function(){
    // turn the right border of the nav menu gold when the user hovers over a link
    // jQuery('#masthead').on('hover', '.main-navigation li', function() {
    //     jQuery('.main-navigation ul').css({borderRight: '1px solid #ffd700'});
    //     console.log('1');
    // });
    // jQuery('.main-navigation li').hover(function() {
    //     jQuery('.main-navigation ul').css({borderRight: '1px solid #ffd700'});
    // }, function() {
    //     jQuery('.main-navigation ul').css({borderRight: '1px solid #fff'});
    // });
    //
    // jQuery('main-navigation a').click( function(){
    //     jQuery('.main-navigation ul').css({borderRight: '1px solid #ffd700'});
    //     console.log('mousedown');
    // });

    //jQuery('.background-logo').animate({opacity: '.1'}, [1000000]);
    jQuery('#content').click( function() {
        console.log(this);
        console.log('click');
        jQuery('.home-tagline').fadeTo(800, 1);
        jQuery('.mission-statement').fadeTo(800, 1);
        jQuery('.home-welcome').fadeTo(800, 1);
        jQuery('#gold-wrapper').fadeTo(800, .3);
        jQuery('.background-logo').fadeTo(800, .1);
    })
});

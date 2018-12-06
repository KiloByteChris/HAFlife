/**
 * File home-fadin.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
 jQuery('.menu-dots').mouseover(function() {
     console.log('yeah');
     jQuery('.menu-dots').css({'color': '#ffd700'});
 });
jQuery(document).ready( function(){
    // Get the position of the scroll bar so that the opacity can be set according to the location on the page
    var scrollStart = jQuery(window).scrollTop();
    var scrollCount = 0;
    // Select the elements on the page
    var goldWrapper = jQuery('#gold-wrapper');
    var homeFadeWrapper = jQuery('#home-fade-wrapper');
    // Set the number of pixels before the fade in
    var fadePosition = 150;
    // Check to see how for the window has scrolled. Set the opacity of the wrapper.
    if(scrollStart <= fadePosition) {
        homeFadeWrapper.css({opacity: '0'});
    }
    if(scrollStart > fadePosition){
        homeFadeWrapper.css({opacity: '.3'});
    }
    //Prevent the logo animation from happening on pages that arn't the home page.
    if(jQuery('.gold-wrapper-pages').length > 0){
        jQuery('body.custom-background').css({backgroundImage: 'url(http://localhost/HAFlife/wordpress-4.9.8/wordpress/wp-content/uploads/2018/12/background_logo_large_opacity5.png)'});

    }else{
        // If the current page is the homepage, then check for the window to scroll
        jQuery( window ).scroll(function() {
            var scrollPosition = jQuery(window).scrollTop();
            if(scrollPosition <= fadePosition){
                homeFadeWrapper.css({opacity: '0'});
                jQuery('body.custom-background').css({backgroundImage: 'url(http://localhost/HAFlife/wordpress-4.9.8/wordpress/wp-content/uploads/2018/11/background_logo_large.png)'});
            }else if(scrollPosition > fadePosition){
                homeFadeWrapper.css({opacity: '.2'});
                jQuery('body.custom-background').css({backgroundImage: 'url(http://localhost/HAFlife/wordpress-4.9.8/wordpress/wp-content/uploads/2018/12/background_logo_large_opacity5.png)'});
            }
        });
    }
});

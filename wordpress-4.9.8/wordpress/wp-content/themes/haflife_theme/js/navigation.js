/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var container, button, menu, links, i, len;

	// Set variable values for the menu animations
	var homeFadeInValue = 150;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			//HOMEPAGE TOGGLE MENU OFF
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			// Query the window for scroll position. Scroll position is used to tell if the logo has been faded yet.
			var scrollPosition = jQuery(window).scrollTop();
			// Query the opacity of the logo. Used as an error catch on opacity transitions.
	        var logoOpacity = jQuery('background-logo').css('opacity');
			if(scrollPosition <= homeFadeInValue){
				jQuery('#gold-wrapper').fadeTo(200, 0);
			}else if(scrollPosition > homeFadeInValue){
				jQuery('#gold-wrapper').fadeTo(200, .3);
			}
			jQuery('#mobile-menu-container').animate({opacity: '0'}, [200]);
			jQuery('#mobile-menu-container').css({display: 'none'});
			jQuery('.entry-title, .home-tagline, .mission-statement, .home-welcome').fadeTo(200, 1);
			//PAGES MENU TOGGLE OFF
			jQuery('.gold-wrapper-pages').fadeTo(200, .5);
			jQuery('.artist-content').fadeTo(200, 1);
			jQuery('.site-footer').fadeTo(200, 1);
			jQuery('.ig-block').fadeTo(200, 1);
		} else {
			//HOMEPAGE TOGGLE MENU ON
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
			jQuery('.entry-title, .home-tagline, .mission-statement, .home-welcome').fadeOut(400, 0);
			jQuery('#mobile-menu-container').css({display: 'block'});
			jQuery('#mobile-menu-container').animate({opacity: '1'}, [800]);
			jQuery('#gold-wrapper').animate({opacity: '1'}, [800]);
			//PAGES TOGGLE MENU ON
			jQuery('.gold-wrapper-pages').animate({opacity: '1'}, [800]);
			jQuery('.artist-content').fadeOut(500, 0);
			jQuery('.ig-block').fadeOut(500, 0);
			jQuery('.site-footer').fadeOut(500, 0);
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );
} )();

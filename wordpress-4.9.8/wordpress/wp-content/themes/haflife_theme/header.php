<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package HAFlife_theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'haflife_theme' ); ?></a>
	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			// the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<?php
			else :
				?>
				<?php
			endif;
			$haflife_theme_description = get_bloginfo( 'description', 'display' );
			if ( $haflife_theme_description || is_customize_preview() ) :
				?>

			<?php endif; ?>
		</div><!-- .site-branding -->
		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><i class="menu-dots fa fa-ellipsis-v" aria-hidden="true"></i>
				<?php esc_html_e( '', 'haflife_theme' ); ?>
			</button>
			<div id="mobile-menu-container">
				<?php the_custom_logo(); ?>
				<?php wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				) );?>
				<div id="primary-menu-contacts">
						<?php dynamic_sidebar( 'primary-menu-contact' );?>
				</div><!-- .primary-menu-contact -->
			</div><!-- #mobile-menu-container -->
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">

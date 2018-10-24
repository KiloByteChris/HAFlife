<?php
/**
 * This is the template that displays the homepage HAFlife
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package HAFlife_theme
 */


if(is_page('HAFLife'))
{
get_header('HAFLife');
}
else
{
get_header();
}
wp_head();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'HAFlife' );


		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

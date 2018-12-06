<?php
/**
 * Template part for displaying page content in page.php

 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package HAFlife_theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
	<?php haflife_theme_post_thumbnail(); ?>
	<div class="entry-content">
		<div class="gold-wrapper-pages"></div>
		<div class="gold-wrapper-pages"></div>
		<?php
		the_content();
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->

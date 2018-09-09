<?php
function indfox_setup() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_script( 'my_script', get_template_directory_uri() . '/script.js', array(), '1.0');
}

function features(){
	add_theme_support('title-tag');
	add_theme_support( 'post-thumbnails' );
}

add_action('after_setup_theme', 'features');
add_action( 'wp_enqueue_scripts', 'indfox_setup' );
?>
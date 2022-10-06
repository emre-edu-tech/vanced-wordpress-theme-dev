<?php
/**
 * Theme Functions
 * 
 * @package LimitlessWP
 */

// IMPORTANT NOTE: Prefix all the functions in functions.php file with the prefix limitlesswp
// Add stylesheet and scripts
function limitlesswp_load_scripts() {
    // enqueue theme style using get_template_directory_uri()
    // wp_enqueue_style('limitlesswp-main-styles', get_template_directory_uri() . '/style.css', [], '1.0', 'all');
    // enqueue theme style using get_stylesheet_directory_uri()
    // wp_enqueue_style('limitlesswp-main-styles', get_stylesheet_directory_uri() . '/style.css', [], '1.0', 'all');
    // enqueue theme style using get_stylesheet_uri()
    // IMPORTANT NOTE: filemtime() should be used while development
    // Register Styles
    wp_register_style('limitlesswp-main-styles', get_stylesheet_uri(), [], filemtime(get_template_directory() . '/style.css'), 'all');
    wp_register_style('limitlesswp-bootstrap-styles', get_template_directory_uri() . '/assets/src/library/css/bootstrap.min.css', [], '4.6', 'all');

    // Register Scripts
    wp_register_script('limitlesswp-main-script', get_template_directory_uri() . '/assets/main.js', [], filemtime(get_template_directory() . '/assets/main.js'), true);
    wp_register_script('limitlesswp-bootstrap-script', get_template_directory_uri() . '/assets/src/library/js/bootstrap.min.js', ['jquery'], '4.6', true);

    // Enqueue Styles
    wp_enqueue_style('limitlesswp-main-styles');
    wp_enqueue_style('limitlesswp-bootstrap-styles');

    // Enqueue Scripts
    wp_enqueue_script('limitlesswp-main-script');
    wp_enqueue_script('limitlesswp-bootstrap-script');
}
add_action('wp_enqueue_scripts', 'limitlesswp_load_scripts');
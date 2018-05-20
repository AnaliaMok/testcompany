<?php

/**
 * Post Type: Testimonials.
 */
function register_testimonials_cpt() {
	$labels = array(
		"name" => __( "Testimonials", "" ),
		"singular_name" => __( "Testimonial", "" ),
		"menu_name" => __( "Testimonials", "" ),
		"all_items" => __( "All Testimonials", "" ),
		"add_new" => __( "Add New", "" ),
		"add_new_item" => __( "Add New Testimonial", "" ),
		"edit_item" => __( "Edit Testimonial", "" ),
		"new_item" => __( "New Testimonial", "" ),
		"view_item" => __( "View Testimonial", "" ),
		"view_items" => __( "View Testimonials", "" ),
		"search_items" => __( "Search Testimonials", "" ),
		"not_found" => __( "No Testimonials", "" ),
		"not_found_in_trash" => __( "No Testimonial found in trash", "" ),
	);

	$args = array(
		"label" => __( "Testimonials", "" ),
		"labels" => $labels,
		"description" => "Client Testimonials",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "testimonials",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "testimonials", "with_front" => true ),
		"query_var" => true,
		"menu_icon" => "dashicons-nametag",
		"supports" => array( "title", "thumbnail", "revisions" ),
	);

	register_post_type( "testimonials", $args );
}

add_action( 'init', 'register_testimonials_cpt' );

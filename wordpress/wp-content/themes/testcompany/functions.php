<?php

// Frontend origin
require_once 'inc/frontend-origin.php';

// ACF commands
require_once 'inc/class-acf-commands.php';

// Logging functions
require_once 'inc/log.php';

// CORS handling
require_once 'inc/cors.php';

// Admin modifications
require_once 'inc/admin.php';

// Add Menus
require_once 'inc/menus.php';

// Add Headless Settings area
require_once 'inc/acf-options.php';

// Add custom API endpoints
require_once 'inc/api-routes.php';

// Add custom post types
require_once 'inc/custom_post_types.php';

// Add ACF fields
//require_once 'acf-json/acf_fields.php';

// Custom ACF Filters
// function acf_load_header_text($field){
//   return $field;
// }
// add_filter('acf/load_field/name=page_header_text', 'acf_load_header_text');
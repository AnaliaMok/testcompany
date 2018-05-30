<?php

/**
 * Custom Post Types
 */

if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_general-page-settings',
		'title' => 'General Page Settings',
		'fields' => array (
			array (
				'key' => 'field_5b018e39f437b',
				'label' => 'Header Text',
				'name' => 'page_header_text',
				'type' => 'text',
				'instructions' => 'Enter main/top-level header text',
				'required' => 1,
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5b018e68f437c',
				'label' => 'SubHeader Text',
				'name' => 'page_subheader_text',
				'type' => 'text',
				'instructions' => 'Enter optional subheader text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5b019138a3d2c',
				'label' => 'Hero Main Text',
				'name' => 'hero_main_text',
				'type' => 'textarea',
				'instructions' => 'Enter the body text for the hero header',
				'default_value' => '',
				'placeholder' => '',
				'maxlength' => '',
				'rows' => 4,
				'formatting' => 'none',
			),
			array (
				'key' => 'field_5b018ef5f437e',
				'label' => 'Hero Image or Solid Color',
				'name' => 'hero_image_or_solid_color',
				'type' => 'radio',
				'instructions' => 'Select to display either a hero image or use a solid hero color',
				'choices' => array (
					'hero_image' => 'Hero Image',
					'hero_color' => 'Solid Color',
				),
				'other_choice' => 0,
				'save_other_choice' => 0,
				'default_value' => 'hero_image',
				'layout' => 'horizontal',
			),
			array (
				'key' => 'field_5b018ea1f437d',
				'label' => 'Header Background Image',
				'name' => 'header_background_image',
				'type' => 'image',
				'instructions' => 'Select a hero image with a 16:9 aspect ratio. (E.g. 1920x1080)
	',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_5b018ef5f437e',
							'operator' => '==',
							'value' => 'hero_image',
						),
					),
					'allorany' => 'all',
				),
				'save_format' => 'url',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
			array (
				'key' => 'field_5b018f75f437f',
				'label' => 'Header Background Color',
				'name' => 'header_background_color',
				'type' => 'color_picker',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_5b018ef5f437e',
							'operator' => '==',
							'value' => 'hero_color',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
			),
			array (
				'key' => 'field_5b018fa3f4380',
				'label' => 'Header Overlay Color',
				'name' => 'header_overlay_color',
				'type' => 'color_picker',
				'instructions' => 'Select an overlay color to appear over the background image',
				'required' => 1,
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_5b018ef5f437e',
							'operator' => '==',
							'value' => 'hero_image',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '#1A2930',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'default',
			'hide_on_screen' => array (
				0 => 'the_content',
			),
		),
		'menu_order' => 0,
	));
	register_field_group(array (
		'id' => 'acf_partner-settings',
		'title' => 'Partner Settings',
		'fields' => array (
			array (
				'key' => 'field_5b04c7abdc2d9',
				'label' => 'Partner Logo',
				'name' => 'partner_logo',
				'type' => 'image',
				'required' => 1,
				'save_format' => 'object',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'partners',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
	register_field_group(array (
		'id' => 'acf_project-settings',
		'title' => 'Project Settings',
		'fields' => array (
			array (
				'key' => 'field_5b02153b070ba',
				'label' => 'Project Featured Image',
				'name' => 'project_featured_image',
				'type' => 'image',
				'required' => 1,
				'save_format' => 'object',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
			array (
				'key' => 'field_5b020bb2de256',
				'label' => 'Project Title',
				'name' => 'project_title',
				'type' => 'text',
				'required' => 1,
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5b020bebde257',
				'label' => 'Project Description',
				'name' => 'project_description',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'yes',
			),
			array (
				'key' => 'field_5b020c05de258',
				'label' => 'Client Company',
				'name' => 'project_client_company',
				'type' => 'text',
				'instructions' => 'Enter name of associated client',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5b020c7cde259',
				'label' => 'Project Technologies',
				'name' => 'project_technologies',
				'type' => 'wysiwyg',
				'instructions' => 'Write a list of technologies or specializations to display',
				'default_value' => '',
				'toolbar' => 'basic',
				'media_upload' => 'no',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'projects',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'default',
			'hide_on_screen' => array (
				0 => 'the_content',
			),
		),
		'menu_order' => 0,
	));
	register_field_group(array (
		'id' => 'acf_services-settings',
		'title' => 'Services Settings',
		'fields' => array (
			array (
				'key' => 'field_5b00cfc2bf108',
				'label' => 'Service Name',
				'name' => 'service_name',
				'type' => 'text',
				'instructions' => 'Name of Service',
				'required' => 1,
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5b00d0917dfec',
				'label' => 'Service Icon or Class',
				'name' => 'service_icon_or_class',
				'type' => 'radio',
				'instructions' => 'Choose between uploading a service icon or entering a font awesome icon class',
				'choices' => array (
					'icon' => 'Service Icon',
					'class' => 'Service Class',
				),
				'other_choice' => 0,
				'save_other_choice' => 0,
				'default_value' => 'icon',
				'layout' => 'horizontal',
			),
			array (
				'key' => 'field_5b00cfd4bf109',
				'label' => 'Service Icon',
				'name' => 'service_icon',
				'type' => 'image',
				'required' => 1,
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_5b00d0917dfec',
							'operator' => '==',
							'value' => 'icon',
						),
					),
					'allorany' => 'all',
				),
				'save_format' => 'url',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
			array (
				'key' => 'field_5b00d0fb7dfed',
				'label' => 'Service Class',
				'name' => 'service_class',
				'type' => 'text',
				'instructions' => 'Enter full font-awesome icon class (E.g.	fas fa-desktop)',
				'required' => 1,
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_5b00d0917dfec',
							'operator' => '==',
							'value' => 'class',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'services',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
	register_field_group(array (
		'id' => 'acf_testimonial-settings',
		'title' => 'Testimonial Settings',
		'fields' => array (
			array (
				'key' => 'field_5b00ca807ed13',
				'label' => 'Client Headshot',
				'name' => 'client_headshot',
				'type' => 'image',
				'required' => 1,
				'save_format' => 'url',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
			array (
				'key' => 'field_5b00cafb7ed14',
				'label' => 'Client Testimonial',
				'name' => 'client_testimonial',
				'type' => 'textarea',
				'required' => 1,
				'default_value' => '',
				'placeholder' => 'Write what the client had to say',
				'maxlength' => 420,
				'rows' => 4,
				'formatting' => 'none',
			),
			array (
				'key' => 'field_5b00cbac7ed15',
				'label' => 'Client Name',
				'name' => 'client_name',
				'type' => 'text',
				'instructions' => 'Write the client\'s full name only',
				'required' => 1,
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
			array (
				'key' => 'field_5b00cbca7ed16',
				'label' => 'Client Company',
				'name' => 'client_company',
				'type' => 'text',
				'instructions' => 'Write client\'s affiliated company name',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'testimonials',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}

---
title: Hide Meta Boxes for a Page Template
description: Using Piklist, you can easily hide some meta boxes when a certain page template is selected in WordPress
hidden: true
---

Using Piklist, you can easily hide some meta boxes when a certain page template is selected in WordPress. This tutorial will show you how using two Piklist filters: `piklist_get_file_data` and `piklist_add_part`.

All of the code in this tutorial will go in your theme’s `functions.php` file, or your main plugin file.

### Add a custom parameter to the Piklist comment block.
Pikist uses a number of parameters in the comment block to control access to a meta box. The first step is to tell Piklist you want to use a custom parameter using the `piklist_part_data` filter. We’ll name our parameter "Hide for Template".

```
add_filter('piklist_part_data', 'my_custom_comment_block', 10, 2);

function my_custom_comment_block($data, $folder) {

  // If not a Meta-box section than bail
  if($folder!= 'meta-boxes') {

    return $data;

  }

  // Allow Piklist to read our custom comment block attribute: "Hide for Template", and set it to hide_for_template
  $data['hide_for_template'] = 'Hide for Template';

  return $data;
}
```

### Assign meta-box access to user role, “no-role”, if the page template is selected
One of the parameters you can use in the Piklist comment block is `role`. This allows you to set which user role has access to a meta-box. In this step, we are going to change which user role can view the meta-box ONLY if our page template is selected. We’ll change the meta-box access to a made up user role called “no-role”.

```
add_filter('piklist_part_process_callback', 'my_hide_for_template', 10, 2);
function my_hide_for_template($part, $type) {

    global $post;

    // If not a meta box than bail
    if($type != 'meta-boxes') {
        return $part;
    }


    // Check if any page template is set in the comment block
    if (!empty($part['data']['hide_for_template'])) {

        // Get the active page template
        $active_template = pathinfo(get_page_template_slug($post->ID), PATHINFO_FILENAME);

                $active_template = empty($active_template) ? 'default' : $active_template;

            // Does the active page template match what we want to hide?
            if (strpos($part['data']['hide_for_template'], $active_template) !== false) {

                // Change meta-box access to user role: no-role
                $part['data']['role'] = 'no-role';
            }
    }
    return $part;
}
```

### Usage
In the comment block of the meta-box where you want to restrict access, use your new parameter: `Hide for Template`
```
/*
Title: Custom Sections
Post type: page
Hide for Template: full-width, another-template
*/
```

IMPORTANT: You need to change your template and press SAVE to hide the metaboxes.

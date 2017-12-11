---
title: Creating Separate Taxonomies for each User
description: In this tutorial we’ll provide each logged in user with their own set of private tags.
hidden: true
---

![Metabox](/images/separate-user-taxonomies.jpg)

In this tutorial we’ll provide each logged in user with their own set of private tags.

First, you will need to create your taxonomy using the `piklist_taxonomies` filter.

We’ll assume you will be using a non-hierarchical(like Tags) taxonomy, and we will name them 'personal_tags'. However, we will do something special with the name. To allow separate taxonomies for each logged in user, we will append their user ID to the end of the taxonomy name. So the user with the ID of 1, will be using 'personal_tags_1', and the user with the ID of 2, will be using 'personal_tags_1'.

## Full snippet
```
add_filter('piklist_taxonomies', 'my_custom_taxonomies');
  function my_custom_taxonomies($taxonomies) {
    global $current_user;
    get_currentuserinfo(); // Get logged in user info

    $taxonomies[] = array(
      'post_type' => array('post')
      ,'name' => 'personal_tags_' . $current_user->ID // Append User ID to taxonomy name
      ,'configuration' => array(
        'hierarchical' => false
        ,'labels' => piklist('taxonomy_labels', $current_user->display_name . "'s Tag") // Append user name to Taxonomy labels
        ,'show_ui' => true
        ,'query_var' => true
        ,'rewrite' => array(
          'slug' => 'personal_tags_' . $current_user->ID // Append user ID to taxonomy slug
        )
        ,'show_admin_column' => true
        ,'comments' => true
      )
    );

    return $taxonomies;
  }
 ```

---
title: Add WYSISYG to your Excerpt Box
description: To add some style to your excerpts, you can easily add a WYSIWYG editor to your excerpt box.
hidden: true
---

![Metabox](/images/post-excerpt-wysiwyg.jpg)

## Description
To add some style to your excerpts, you can easily add a WYSIWYG editor to your excerpt box.

### First, remove the default excerpt box
**Custom post type**

If you’re registering your own post type, include the `supports` [parameter](http://codex.wordpress.org/Function_Reference/register_post_type) but don’t include `excerpt` in the array. This will tell WordPress not to render the excerpt box.

**Built in post type**

Use the standard WordPress function [`remove_post_type_support`](http://codex.wordpress.org/Function_Reference/remove_post_type_support), to remove the editor. For example, to remove the editor from Posts, place this in your theme’s functions.php file, or your main plugin file:
```
function my_remove_post_type_support() {
  remove_post_type_support('post', 'excerpt');
}
add_action('init', 'my_remove_post_type_support', 10);
```

### Now, add your own editor with Piklist
* Create your metabox.
* Add the excerpt field, and make sure you set the following:
	* `'scope' => 'post'` since WordPress saves this data in the post table.
	* `'field' => 'post_excerpt'` is the field name for the default excerpt field.
	* `'template' => 'field'` Uses the Piklist "field-only" template with no label.

```
piklist('field', array(
    'type' => 'editor'
    ,'scope' => 'post'
    ,'template' => 'field'
    ,'field' => 'post_excerpt'
    ,'options' => array (
     'media_buttons' => false
     ,'teeny' => true
    )
  ));
  ```

  That’s it. Your done.

---
title: Add Subtitle field to the Post screen
description: Insert a subtitle filed to the Post screen
hidden: true
---

![Metabox](/images/userguide-subtitle.png)

The Piklist folder structure makes it very easy to create Meta-Boxes, Settings Sections, etc, with limited code. Sometimes, however, you may need to insert a field in a specific place. Usually this is tied to a WordPress hook.

The Piklist `field` function, can be used outside the Piklist folder structure, and placed inside a standard function.

For this tutorial, we will insert a “Subtitle” field, under the Post Title field. A few things:

* The following code will go into your Theme’s functions.php file, or your plugin file. It does NOT go into the Piklist parts/ directory.
* To place a field after the Post Title, we are going to use to the standard WordPress hook, [`edit_form_after_title`](https://make.wordpress.org/core/2012/12/01/more-hooks-on-the-edit-screen/). This hook allows you to insert information after the Post Title field.
* The same Piklist field function that we would use in a parts/ folder, we will use in a function instead.

Here’s the code:
```
function my_add_sub_title() {
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'text'
    ,'template' => 'field' // format the field without a label
    ,'attributes' => array(
      'class' => 'large-text'
      ,'placeholder' => 'Enter subtitle here'
    )
  ));
}
add_action('edit_form_after_title', 'my_add_sub_title');
```

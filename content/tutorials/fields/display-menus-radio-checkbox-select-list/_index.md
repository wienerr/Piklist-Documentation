---
title: Display Menus as a Radio, Checkbox or Select list
description: Using Piklist you can easily display your Menus as Radio, Checkboxes or a Select list (dropdowns). Easily include them in custom theme settings, or when creating posts. This simple tutorial will show you how.
hidden: true
---

![Metabox](/images/userguide-menus-as-list.jpg)

## Description
Using Piklist you can easily display your Menus as Radio, Checkboxes or a Select list (dropdowns). Easily include them in custom theme settings, or when creating posts. This simple tutorial will show you how.

* Install Piklist
* Decide if you are going to build your Piklist code as a plugin or in your theme.
* With Piklist you can display fields as Metaboxes, on a Settings page or a Widget. Choose which one you want to use.

Now we can get started and write some code!  We’re are going to use the WordPress function `wp_get_nav_menus()`, to get our menus.  This function stores data in an array, and with Piklist, parsing an array and displaying it as a list is really easy.  This array stores all menus in an Object, and then breaks them out.  You have access to fields like term_id, name, slug, etc.  We are going to assign each item in the dropdown to the slug, but show the name:

```
piklist('field', array(
  'type' => 'select'
  ,'field' => 'sidebar_left'
  ,'label' => 'Choose Sidebar Menu'
  ,'value' => 'none'
  ,'choices' => array(
      '' => 'Choose Menu'
    )
    + piklist(wp_get_nav_menus()
    ,array(
      'slug'
      ,'name'
    )
  )
));
```

Let’s take a look at this code:

* First we created a standard Piklist Select list.
* The only major change is the choices array. We told Piklist to use the wp_get_nav_menus() function.
* The next array tells Piklist what should be the KEY for the field, and what should be the VALUE.  In this case we selected slug as the KEY, and name as the VALUE to show in the list.

**Checkbox:**

To make this a Checkbox, just change `'type' => 'select'`, to `'type' => 'checkbox'`.

**Radio Buttons:**

To make this Radio Buttons, just change `'type' => 'select'`, to `'type' => 'radio'`.

Yes, it’s that easy!

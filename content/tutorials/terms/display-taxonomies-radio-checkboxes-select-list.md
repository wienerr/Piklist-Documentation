---
title: Display Taxonomies as Radio, Checkboxes or Select list
description: Using Piklist you can easily display your Taxonomies as Radio, Checkboxes or a Select list (dropdowns)
hidden: true
---

![Metabox](/images/userguide-tax-as-list.jpg)

Using Piklist you can easily display your Taxonomies as Radio, Checkboxes or a Select list (dropdowns).  This simple tutorial will show you how.

* Install Piklist
* Decide if you are going to build your Piklist code as a plugin or in your theme.
* With Piklist you can display fields as Metaboxes, on a Settings page or a Widget. Choose which one you want to use.

Now we can get started and write some code!  In this example, we are going to pull the standard WordPress categories, this works for custom taxonomies as well.

We’re are going to use the WordPress function `get_terms()`, to get our taxonomy values. This function stores data in an array, and with Piklist, parsing an array and displaying it as a Select List is really easy.  As you can see from the [WordPress Codex page](http://codex.wordpress.org/Function_Reference/get_terms), this array stores all data in an Object, and then breaks them out.  You have access to fields like `term_id`, `name`, `parent` etc.  We are going to assign each item in the select list to the `term_id`, but show the `name`. This is added to the Piklist parameter choices:

```
piklist('field', array(
  'type' => 'select'
  ,'scope' => 'taxonomy'
  ,'field' => 'category'
  ,'label' => 'Categories'
  ,'description' => 'Terms will appear when they are added to this taxonomy.'
  ,'choices' => array(
      '' => 'Choose Term'
    )
    + piklist(get_terms(array(
      'taxonomy' => 'piklist_demo_type'
      ,'hide_empty' => false
    ))
    ,array(
      'term_id'
      ,'name'
    )
  )
));
```


Let’s take a look at this code:

* First we created a standard Piklist Select list.
* Notice we set the `scope` here. In most cases Piklist will automatically determine the `scope`. But when SAVING to a taxonomy you will need to set `'scope' => 'taxonomy'`. Here we are saving to the taxonomy 'category'. If this code was on a Settings page, and you wanted to save this data as a Setting, you would not set Scope.
* The `choices` array gets pulled in dynamically. We told Piklist to use the `get_terms()` function, and told it to get the `piklist_demo_type` taxonomy values. We also passed the `hide_empty` parameter to Piklist.  This parameter is standard to the `get_terms()` function and can be found at the Codex.
* The next array tells Pikist what should be the KEY for the field, and what should be the VALUE.  In this case we selected `term_id` as the KEY, and name as the VALUE to show in the list.

**Radio Buttons:**
To make these Radio Buttons, just change `'type' => 'select'`, to `'type' => 'radio'`.

**Checkboxes:**
To make these Checkboxes, just change `'type' => 'select'`, to `'type' => 'checkbox'`.

Yes, it’s that easy!

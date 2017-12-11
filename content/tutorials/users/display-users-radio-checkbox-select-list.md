---
title: Display Users as a Radio, Checkbox or Select list
description: Using Piklist you can easily display your Users as Radio, Checkboxes or a Select list (dropdowns).
hidden: true
---

![Metabox](/images/userguide-users-as-list.jpg)

Using Piklist you can easily display your Users as Radio, Checkboxes or a Select list (dropdowns).  This simple tutorial will show you how.

* Install Piklist
* Decide if you are going to build your Piklist code as a plugin or in your theme.
* With Piklist you can display fields as Meta-boxes, on a Settings page or a Widget. Choose which one you want to use.

Now we can get started and write some code!  We're are going to use the WordPress function `get_users()`, to get our users.  This function stores data in an array, and with Piklist, parsing an array and displaying it as a Select List is really easy.  As you can see from the WordPress Codex page, this array stores all users in an Object, and then breaks them out.  You have access to fields like `ID`, `user_login`, `user_pass`, etc.  We are going to assign each item in the dropdown to the ID, but show the `display_name`:

```
piklist('field', array(
 'type' => 'select'
 ,'field' => 'my_users'
 ,'label' => 'Choose a user'
 ,'attributes' => array(
   'class' => 'text'
 )
 ,'choices' => array(
    '' => 'Choose User'
  )
  + piklist(
   get_users(
     array(
      'orderby' => 'display_name'
      ,'order' => 'asc'
     )
     ,'objects'
   )
   ,array(
     'ID'
     ,'display_name'
   )
  )
));
```


Let's take a look at this code:

* First we created a standard Piklist Select list.
* The only major change is the `choices` array. We told Piklist to use the `get_users()` function, and then passed the `orderby` and order parameters to Piklist.  These parameters are standard to the `get_users()` function and can be found at the [WordPress Codex](http://codex.wordpress.org/Function_Reference/get_users).
* The next array tells Piklist what should be the KEY for the field, and what should be the VALUE.  In this case we selected ID as the KEY, and DISPLAY_NAME as the VALUE to show in the list.


**Checkbox:**
To make this a Checkbox, just change `'type' => 'select'`, to `'type' => 'checkbox'`.

**Radio Buttons:**
To make this Radio Buttons, just change `'type' => 'select'`, to `'type' => 'radio'`.

Yes, it's that easy!

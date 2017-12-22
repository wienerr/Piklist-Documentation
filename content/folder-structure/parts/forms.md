---
title: "Forms"
description: "With Piklist you can easily create forms to use on the front of your site, or in the admin. You can create as many files as you like and place them in this folder. Each file will render one form."
---

### `/parts/forms/`

With Piklist you can easily create forms to use on the front of your site, or in the admin. You can create as many files as you like and place them in this folder. Each file will render one form.

```
<?php
/*
Title: Post Submit
Method: post
Message: Post Saved
Logged in: true
*/

  // Where to save this form
  piklist('field', array(
    'type' => 'hidden'
    ,'scope' => 'post'
    ,'field' => 'post_type'
    ,'value' => 'post'
  ));


  piklist('field', array(
    'type' => 'text'
    ,'scope' => 'post'
    ,'field' => 'post_title'
    ,'label' => __('Title', 'piklist')
    ,'attributes' => array(
      'wrapper_class' => 'post_title'
      ,'style' => 'width: 100%'
    )
  ));

  piklist('field', array(
    'type' => 'text'
    ,'scope' => 'post'
    ,'field' => 'post_content'
    ,'label' => __('Content', 'piklist')
    ,'attributes' => array(
      'wrapper_class' => 'post_content'
      ,'style' => 'width: 100%'
    )
  ));


  piklist('field', array(
    'type' => 'hidden'
    ,'scope' => 'post'
    ,'field' => 'post_status'
    ,'value' => 'pending'
  ));

  // Submit button
  piklist('field', array(
    'type' => 'submit'
    ,'field' => 'submit'
    ,'value' => 'Submit'
  ));
 ```

**[View Tutorials &rightarrow;](/tutorials/forms/)**

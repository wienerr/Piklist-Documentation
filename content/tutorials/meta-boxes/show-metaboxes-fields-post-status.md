---
title: Show Metaboxes and Fields by Post Status
description: With web applications and powerful websites, there will be times you want to only show a metabox or metafield when a post is in a particular post status.
hidden: true
---

With web applications and powerful websites, there will be times you want to only show a meta-box or metafield when a post is in a particular post status.  This becomes extra powerful when paired with the Piklist capability parameter, which allows you to show/hide a field based on a user role or capability. For an Order Management system, you may want an order notes field hidden until the estimate becomes an order. Well, Piklist makes it easy to do just that.

In this tutorial, you will learn how to show or hide a meta-box or metafield based on the Post Status.

* First let’s build a meta-box using our [base tutorial](/tutorials/meta-boxes/meta-boxes-creating-metaboxes-and-fields/).  Once completed you should have a working Meta Box with three fields.
* Piklist allows you to show/hide the entire Meta Box by using the status parameter, or by individual field by using the on_post_status parameter.

## SHOW entire Meta Box by Post Status(es)
In the comment block at the top of your meta box file (demo-metabox.php if you used the base tutorial), add the following line of code:

`Status: draft`

Now, this meta box will only show when the post is in the draft status.

You can also use a list of Post Statuses.  For example, let’s says you have an Order Management system and you created your own set of custom post statuses. You only want to show this meta box when the order (a custom post type) is in the estimate and estimate-approved statuses. You would list them separately by a comma, with NO SPACES. So your code would look like this:

`Status: estimate,estimate-approved`

If you started with our base tutorial, then your full header code snippet would look like this:
```
<?php
/*
Title: My Demo Meta Box
Post Type: post
Status: estimate,estimate-approved
*/
```

## HIDE a Meta Field by Post Status(es)
You can also hide individual fields by post status. Again, we start with the base tutorial.  In this example, let’s hide the text box only when the post is in the publish status. Here we use the on_post_status parameter, which takes takes an array of parameters.  It’s a little bit more complicated, but you can just copy and paste the code.

```
'on_post_status' => array(
  'hide' => 'publish'
 )
 ```

 If we go back to our Order Management system example, we may want to hide this field if the order is in any of the following post statuses: ready-to-ship, in-shipping, shipped and closed.  You can list them like this:

 ```
 'on_post_status' => array(
  'hide' => array(
    'ready-to-ship','in-shipping','shipped','closed'
    )
)
```

If the statuses are in order, you can also just use a range of post statuses, separated by a double-hyphen. This code does the same thing as the one above:

```
'on_post_status' => array(
  'hide' => 'ready-to-ship--closed'
 )
 ```

 The entire snippet for this field would look like this:

 ```
 piklist('field', array(
  'type' => 'text'
  ,'field' => 'demo_text'
  ,'label' => 'Text box'
  ,'description' => 'Field Description'
  ,'value' => 'Default text'
  ,'on_post_status' => array(
    'hide' => 'publish'
   )
  ,'attributes' => array(
    'class' => 'text'
  )
));
```

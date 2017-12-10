---
title: Lock Field Values based on Post Status
description: Piklist allows you to lock a field value (making it read-only), when the post status changes. A perfect example of this is if you want to lock post meta once a post is published.
hidden: true
---

![Metabox](/images/userguide-locked-field.jpg)

## Description
Piklist allows you to lock a field value (making it read-only), when the post status changes. A perfect example of this is if you want to lock post meta once a post is published.

Here’s how we do that:

If you are already using Piklist, then skip to step 4.

Install Piklist

Decide if you are going to build your Piklist code as a plugin or in your theme.

With Piklist you can display fields as metaboxes, on a Settings page or a Widget. Choose which one you want to use.

Create your field the standard Piklist way.  For this tutorial we will create a text box.  The only difference is that you will add the [`on_post_status`](/fields/field-parameters
/#on-post-status) parameter. You’ll notice that it is set to show values when the post status equals publish.

```
piklist('field', array(
  'type' => 'text'
  ,'field' => 'text_no'
  ,'label' => 'Sample field locked'
  ,'value' => 'Not editable'
  ,'help' => 'This is help text.'
  ,'attributes' => array(
    'class' => 'text'
  )
  ,'on_post_status' => array(
    'value' => 'publish'
  )
));
```

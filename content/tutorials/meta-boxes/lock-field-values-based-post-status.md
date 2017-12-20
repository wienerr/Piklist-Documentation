---
title: Lock Field Values based on Post Status
description: Piklist allows you to lock a field value (making it read-only), when the post status changes. A perfect example of this is if you want to lock post meta once a post is published.
hidden: true
---

![Metabox](/images/userguide-locked-field.jpg)

## Description
Piklist allows you to lock a field value (making it read-only), when the post status changes. A perfect example of this is if you want to lock post meta once a post is published.

{{< show-tutorial-start-folders >}}

Here’s how we do that:

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

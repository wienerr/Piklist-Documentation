---
title: Show Fields by User Capability or Role
description: Insert a subtitle filed to the Post screen
hidden: true
---

With web applications and powerful websites, there will be times you want to only show a metabox or metafield to a particular user role or capability. For an Order Management system you may want your customers to see certain fields, while your employees can see them all. Or maybe you want Administrators and Editors to be able to leave notes on a post that no one else can see.  Well, Piklist makes it easy to do just that.

In this tutorial, we will show you how you can easily control who sees your data.

Piklist allows you to show/hide either the entire metabox, or each individual field… with just one line of code.

Just add the `capability` or `role` parameter to your field:
```
piklist('field', array(
  'type' => 'text'
  ,'scope' => 'post_meta'
  ,'field' => 'demo_text'
  ,'label' => 'Text box'
  ,'description' => 'Field Description'
  ,'value' => 'Default text'
  ,'capability' => 'edit_pages'
  ,'attributes' => array(
    'class' => 'text'
  )
));
```

---
title: Building Pointers without code
description: Piklist let's you build WordPress pointers without code.
hidden: true
---

![Metabox](/images/building-pointers-without-code.png)

## Description

Piklist let's you build WordPress Pointers without code.  No PHP. No Javascript.

In this tutorial, we will create a simple WordPress pointer.

{{< show-tutorial-start-folders >}}

* Create a PHP file in your `/parts/pointers/` folder. If the folder doesn't exist, then create it.
* Add the following code to your file:

```
<?php
/*
Title: WordPress Dashboard
Anchor ID: #menu-dashboard
Edge: top
Align: bottom
*/
?>

<p>The WordPress dashboard is a great place to get information about your website.</p>
```

The comment block at the top takes a minimum of four parameters:

* `Title`: The title of your pointer.
* `Anchor ID`: The ID of the item you want to attach the pointer to. This can be a div #, li #, any HTML ID.
* `Edge`: Which edge of the pointer (left, right, top, bottom) should be adjacent to the target.
* `Align`: How the pointer should be aligned on this edge, relative to the target (top, bottom, left, right, middle).


That's it! You have a new pointer.

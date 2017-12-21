---
title: Creating Help Tabs for WordPress
description: Creating Help Tabs for WordPress is super easy with Piklist.
hidden: true
---
![Metabox](/images/tutorial-help-tab-with-sidebar.png)


## Description
Creating Help Tabs for WordPress is super easy with Piklist.

In this example, we'll create some help for your custom Post Type. You should already have a custom Post Type registered and working in WordPress.

{{< show-tutorial-start-folders >}}

* In your `parts/help/` folder create a new PHP file to hold your notice code. This file can be named anything you want.
* Add the following to the top of your file:

```
<?php
/*
Title: Content Help
Page: your_custom_post_type
*/
?>
```

This comment block tells Piklist to create a Help tab for the page `yourdomain.com/wp-admin/post-new.php?post_type=your_custom_post_type`.

* Under this comment block add your help text.

```
This post type is used for a special purpose.
```

### Full Snippet

```
<?php
/*
Title: Content Help
Page: your_custom_post_type
*/
?>

This post type is used for a special purpose.
```

## Add a Help Sidebar

WordPress also allows for a sidebar in your help.

* Create another PHP file in the same folder. It can be named anything you want. Add this to the top:

```
<?php
/*
Page: your_custom_post_type
Sidebar: true
*/
?>
```

This code tells Piklist to create a Help sidebar on the same page as your help.

* Add your sidebar help below it:

```
<p>

  <h4>Help is just a click away.</h4>

  <ol>
    <li>
    <a href="//yoursite.com/contact-us target="_blank">Contact us</a></li>
    <li><a href="https://google.com/" target="_blank">Search Google</a></li>
  </ol>

</p>
```

You're done!

### Full Snippet

```
<?php
/*
Page: your_custom_post_type
Sidebar: true
*/
?>

<p>

  <h4>Help is just a click away.</h4>

  <ol>
    <li>
    <a href="//yoursite.com/contact-us target="_blank">Contact us</a></li>
    <li><a href="https://google.com/" target="_blank">Search Google</a></li>
  </ol>

</p>
```

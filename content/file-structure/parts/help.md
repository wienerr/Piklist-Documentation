---
title: "Help"
---

### `/parts/help/`

With Piklist you can easily create Contextual Help menus.

You can create as many files as you like and place them in this folder. Each file will render one Help Tab.

```
<?php
/*
Title: Post Help
Capability: manage_options
Page: post.php
*/
?>

<p>
  <?php _e('Here is some help, 'piklist');?>
</p>

```

**[View Tutorials &rightarrow;](/tutorials/help/)**

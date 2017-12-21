---
title: Building your first Admin Notice
description: Piklist makes it super easy to create admin notices in WordPress.
hidden: true
weight: 1
---

## Description
Piklist makes it super easy to create admin notices in WordPress, usually with no PHP.

{{< show-tutorial-start-folders >}}

* In your `parts/notices/` folder create a new PHP file to hold your notice code. This file can be named anything you want.
* Add the following to the top of your file:

```
<?php
/*
Notice Type: info
Dismiss: true
*/
?>
```

This simple comment block, creates an admin notice in the WordPress "info" style. And allows the user to dismiss it.

 * Underneath the comment block add your message:

 ```
 <p>The site will be offline tomorrow night for maintenance.</p>
 ```

 That's it!

## Full Code Snippet


 ```
 <?php
 /*
 Notice Type: info
 Dismiss: true
 */
 ?>
  <p>This website will be offline tomorrow night for maintenance.</p>
  ```

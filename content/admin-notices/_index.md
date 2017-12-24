---
title: "Admin Notices"
description: "Creating Admin Notices with Piklist is very easy, and can be done without writing any PHP."
weight: 110
---

### `/parts/notices/`


Creating Admin Notices with Piklist is very easy, and can be done without writing any PHP.

1. Decide whether you are going to include your notice in a plugin or theme.
1. Create a `notices/` folder in your `parts/` folder (e.g. `/parts/notices/`).
1. Now, create a php file in your notices folder. This file will hold your notice code.
1. At the top of the file, add the following comment block which tells Piklist this is an “updated” type notice, and can be dismissible by the user.

```
<?php
/*
Notice Type: updated
Dismiss: true
*/
?>
<p>This is my notice</p>
```

### [View Tutorials &rightarrow;](/tutorials/admin-notices/)

---
title: "Creating an Admin Notice"
chapter: true
---
## Description


Creating Admin Notices with Piklist is very easy, and can be done without writing any PHP.

Decide whether you are going to include your notice in a plugin or theme.
Create a `notices/` folder in your `parts/` folder (e.g. `/parts/notices/`).
Now, create a php file in your notices folder. This file will hold your notice code.
At the top of the file, add the following comment block which tells Piklist this is an “updated” type notice, and can be dismissible by the user.
```
<?php
/*
Notice Type: updated
Dismiss: true
*/
?>
<p>This is my notice</p>
```

You can find a full list of available parameters for notices here.

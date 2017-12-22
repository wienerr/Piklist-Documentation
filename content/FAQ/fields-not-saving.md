---
title: "Why aren’t my fields saving?"
description: "The most common reason for fields not saving is because a post type uses the default WordPress “custom fields” meta box. This meta box actually duplicates the inputs used by your fields."
---

The most common reason for fields not saving is because a post type uses the default WordPress “custom fields” meta box. This meta box actually duplicates the inputs used by your fields.

If you are registering a post type, make sure `custom-fields` is not in the “supports” array.

To remove the custom-fields meta box from a WordPress default post type, or one that is registered by another plugin, use [`remove_post_type_support()`](https://developer.wordpress.org/reference/functions/remove_post_type_support/).

This code should go in your theme's `functions.php` file, or your plugin file.

{{< gist sbruner fb4d015d8c7444ceefb8e4e5057f2ccf >}}

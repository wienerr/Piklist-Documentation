---
title: "Piklist enable your theme"
chapter: true
---
## Description
Adding Piklist meta-boxes, fields, settings pages, Widgets, etc. to your theme is very easy.

1. First you need to add the proper <a href="{{< ref "folder-structure.md" >}}">folder structure</a> to your theme. Piklist works by searching the active theme for the /piklist folder and then processing the sub-folders and files within it.

2. Most Piklist code will go in the folder structure you set up. But other Piklist code, like registering Post Types, would go in your theme’s functions.php file.

## IMPORTANT
You cannot include the Piklist plugin in your theme. It needs to remain a separate plugin.

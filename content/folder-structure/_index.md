---
title: "Folder Structure"
description: "Customizing with Piklist is as easy as creating the proper folder structure in your theme or plugin, and placing files in those folders."
weight: 1100
---

Customizing with Piklist is as easy as creating the proper folder structure in your theme or plugin, and placing files in those folders.

To help keep your code organized, Piklist uses a pre-defined folder/file structure that makes it easy for you to add functionality to your site.

Piklist utilizes a folder for each major section of WordPress. You create these folders in your theme or plugin and place the appropriate files in them. Piklist will automatically load these files correctly.

## Folder Structure for your theme

If you want to use your theme for your Piklist files, open your theme’s main folder and add a folder called “piklist”. Inside that folder add another called “parts” and then add any Piklist folders you will need. Your folder structure should look like this:

```text
/theme-folder
  /piklist
    /add-ons
    /parts
      /admin-pages (Do not use for settings pages)
      /dashboard
      /help
      /media
      /meta-boxes
      /notices
      /pointers
      /settings
      /terms
      /updates
      /users
      /widgets
      /workflows
```

## Folder Structure for your plugin

You can also create a Piklist plugin if you want. The folder structure is slightly different than the one for a theme. Open your plugin’s main folder and add a “parts” folder. In that folder add any folders you will need. Your folder structure should look like this:

```text
/plugin-folder
  /add-ons
  /parts
    /admin-pages (Do not use for settings pages)
    /dashboard
    /help
    /media
    /meta-boxes
    /notices
    /pointers
    /settings
    /terms
    /updates
    /users
    /widgets
    /workflows
```

---
title: "Folder Structure"
---

When creating fields, forms, widgets, etc., with Piklist, you place your code a file that is located in the proper folder. For example, when creating widgets, your code would go in the ``/widgets/`` folder.

Piklist has a predefined folder structure which it scans for your code.

### Theme folder structure
```
/theme-folder
  /piklist
    /parts
      /admin-pages (Do not use for settings pages)
      /dashboard
      /forms
      /help
      /media
      /meta-boxes
      /notices
      /pointers
      /settings
      /shortcodes
      /terms
      /updates
      /users
      /widgets
      /workflows
```

### Plugin folder structure
```
/plugin-folder
  /parts
      /admin-pages (Do not use for settings pages)
      /dashboard
      /forms
      /help
      /media
      /meta-boxes
      /notices
      /pointers
      /settings
      /shortcodes
      /terms
      /updates
      /users
      /widgets
      /workflows
```
### IMPORTANT
If you are writing a Piklist plugin, make sure you <a href="{{< ref "writing-a-plugin-for-piklist.md" >}}">register it with Piklist</a>.

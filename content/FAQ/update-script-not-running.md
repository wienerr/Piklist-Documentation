---
title: "Update script not running"
description: "Fix update script issues."
weight: 15
---

Piklist allows you to easily create [update scripts](/updates/) that run on certain versions of your plugin. If the script doesn't run, you may have an issue with the `piklist_active_plugin_versions` setting:

* Deactivate and delete Piklist
* Open your database. In the `wp_options` table, look for this field: `piklist_active_plugin_versions` and delete it.
* Reinstall piklist
* The `piklist_active_plugin_versions` should come back to your db.
* Log back into WordPress. The update script should run.

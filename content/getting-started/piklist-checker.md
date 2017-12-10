---
title: "Piklist checker"
---

![Piklist Checker message](/images/piklist-checker.jpg)

Use the Piklist checker when creating plugins that require Piklist. The Piklist Checker makes it easy for you to notify users from your plugin when Piklist is not active. Since your plugin requires Piklist, not having Piklist installed and activated would provide an unpleasant user experience. Piklist Checker is designed to alleviate that.

If the user attempts to activate a Piklist plugin, without activating Piklist first, they will get a message notifying them the plugin was deactivated and instructions on how to get Piklist.

## Usage
Piklist checker is designed to be easy to include in your plugin.

Include the Piklist Checker file in your Piklist plugin or theme. You can always get the most up-to-date version of Piklist Checker at <a href="http://plugins.svn.wordpress.org/piklist/assets/class-piklist-checker.php">WordPress.org</a>.

### Plugin
Add the following to your plugin. Notice the checker code is wrapped in a function that hooks to the ``init`` action.
{{< gist sbruner bd657c0fbe5d15900f93 >}}

### Theme
If you’re using Piklist in your theme, this code should go in the ``functions.php`` file. Notice the added parameter after ``__FILE__``:
{{< gist sbruner d0bf54bca71f76e1636b >}}

### Example
You can find an example of implementing the Piklist Checker in the <a href="https://wordpress.org/plugins/wp-helpers/">WordPress Helpers plugin</a>.

---
title: "Built-in Demos"
description: "You can get a good overview of what Piklist is capable of by activating the included “Piklist Demos” add-on."
weight: 10
---
Piklist allows you to work with WordPress like never before. At its basic level, you can easily create metaboxes/metafields (also known as custom fields) for Posts, Pages, media and user profiles, as well as easy Settings pages, Widgets and Dashboard Widgets. You will need to write a little bit of code to use Piklist, but it’s minimal and we’ve included lots of examples. Let’s get started!

1. Install Piklist like you would any other Plugin.
2. Once installed, activate Piklist. You will see a Piklist item in your WordPress menu.
3. Now you can start adding power to your theme and plugins. Check out our tutorials for a detailed overview.

### Included Demos
You can get a good overview of what Piklist is capable of by activating the included “Piklist Demos” add-on:

1. Hover over the “Piklist” menu item, and then click on “Settings”.
2. You should now see options for Settings. Under the Add-ons tab is the “Extend Piklist” area containing the “Piklist Demos” add-on. Click on “Activate”, and then on “Save Changes”.
![Add-ons menu](/images/add-ons-menu.jpg)
3. You will now have access to the Piklist Demos:

Custom Post Type and Settings: Go to Piklist Demos > Add New. Create a new demo here and it will show up under Piklist Demos.

Sample Widgets: Go to Appearance > Widgets > Piklist Demo Widgets.

![Add-ons menu](/images/demos.jpg)




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

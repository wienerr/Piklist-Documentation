---
title: "Writing a plugin for Piklist"
chapter: true
---
## Description
Writing a plugin to take advantage of Piklist is very simple. The only additional step is registering your plugin with Piklist, otherwise, this is just like writing a regular WordPress plugin. Like all plugins, Piklist plugins also live in your wp-content/plugins/ folder.

### Registering your plugin with Piklist
When writing WordPress plugins that rely on other plugins, you usually have to use hooks and filters… but not with Piklist. We’ve simplified the process for you.

1. First create a folder to hold your plugin. The folder name can be anything you want… this is the same as any other plugin you would write.

2. Then create your main plugin file, and make sure it’s the same name as your folder. So if your plugin is in the folder /my-cool-plugin/, then the main file should be named my-cool-plugin.php, as suggested on WordPress.org.

3. Now, add the standard WordPress file headers to the top… this is also the same as any other plugin you would write.

4. Now, here’s how you tell Piklist your plugin exists. Add one more line to the file header you just created: ``Plugin Type: Piklist``. That’s it! Your new plugin header would look something like this:
```
<?php
/*
Plugin Name: Name Of The Plugin
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: The Plugin's Version Number, e.g.: 1.0
Author: Name Of The Plugin Author
Author URI: http://URI_Of_The_Plugin_Author
Plugin Type: Piklist
License: A "Slug" license name e.g. GPL2
*/
?>
```
As long as you have Piklist activated on your site, this plugin will now run properly.

Now you just need to create the proper <a href="{{< ref "folder-structure.md" >}}">folder structure</a> so you can start creating fields and more.

Creating plugins has never been easier!

### Adding your plugin to WordPress.org
Let your users know Piklist is powering your plugin:

1. Add a <a href="http://plugins.svn.wordpress.org/piklist/assets/powered-by-piklist.png">“Powered by Piklist”</a> logo to your plugin banner. You can download it here >

2. Add “Piklist” as a tag in your readme.txt file.

3. Add the following information to your readme.txt file. This code is formatted for markup, which WordPress.org uses to parse your readme.txt file. The spaces after the second line are intentional and create a line break.

```
> #### Powered by Piklist
> WordPress Helpers requires the Piklist framework.   
> <a href="http://wordpress.org/extend/plugins/piklist/">You can download and install Piklist for free.</a>

```

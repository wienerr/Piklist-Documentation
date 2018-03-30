---
title: Getting started with Shortcodes
description: Creating Shortcodes with Piklist is super easy.
hidden: true
---

## Description

Creating Shortcodes with Piklist is super easy. In this tutorial, we'll create a shortcode to display post meta in your post content.

{{< show-tutorial-start-folders >}}

* If you don't already have a `shortcodes` folder, create one: `/parts/shortcodes/`
* Next we need to create the shortcode files.  Piklist shortcodes are made up of two:
    * `shortcode-name.php`: This file holds the shortcode output, and is the **only required file for a shortcode**. (i.e. example.php)
    * `shortcode-name-form.php`: Settings fields for your shortcode are placed in this file. (i.e. example-form.php)

### Shortcode Form File
Let’s start with example-form.php, which will hold the fields the user will fill in to control the Shortcode. This file is only required if you want to add settings to your Shortcode.

At the top of the file add this code:
```
<?php
/*
Name: Post Meta
Description: Embed the value of post meta
Shortcode: postmeta
Inline: true
*/
```
This code is a PHP comment block that tells Piklist a few things:
* `Name`: Name of your shortcode.
* `Description`: A description of your shortcode.
* `Shortcode`: The actual shortcode that will appear in your code.
* `Inline`: Tells Piklist you want to display the shortcode output inline, instead of in a block.


Now, let’s create our field, a text box for the Post Meta key:

```
piklist('field', array(
  'type' => 'text'
  ,'field' => 'meta_key'
  ,'label' => 'Meta Key'
));
```

At this point, you should see an "Add Shortcode" button on your edit post screen. If you press it, a form will pop up, and one of the shortcode options will be `Meta Key`. Enter a meta key and save.

### Full Snippet: Shortcode Form File

```
<?php
/*
Name: Post Meta
Description: Embed the value of post meta
Shortcode: postmeta
Inline: true
*/

piklist('field', array(
  'type' => 'text'
  ,'field' => 'meta_key'
  ,'label' => 'Meta Key'
));
```

### Shortcode Output File
**The output file is the only required file**, since settings may not be necessary for some shortcodes. Open `example.php`. At the top of the file, we will add a comment block that will control the configuration of the shortcode. This comment block is very similar to what you would see in a standard WordPress plugin or theme. The only required parameter is `shortcode`:

```
<?php
/*
Shortcode: postmeta
*/
```

Now we'll add the output code. All the data you save in the shortcode form is saved in the `$arguments` array.

```
if ( isset( $arguments['meta_key'] ) ) {

    echo get_post_meta( get_the_id(), $arguments['meta_key'], true );

}
```

### Full Snippet: Shortcode Output File

```
<?php
/*
Shortcode: postmeta
*/

if ( isset( $arguments['meta_key'] ) ) {

    echo get_post_meta( get_the_id(), $arguments['meta_key'], true );

}
```

You just built a shortcode!

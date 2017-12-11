---
title: Easy Widgets
description: Building widgets with Piklist is incredibly simple.  You can use a fraction of the code WordPress requires to make very powerful widgets.
hidden: true
weight: 1
---

Building widgets with Piklist is incredibly simple.  You can use a fraction of the code WordPress requires to make very powerful widgets.  In this tutorial, we will create a widget that includes three fields: select, text and ColorPicker.

* The first step is to create the proper folder structure in your theme. Create a piklist folder, and then a parts subfolder, and then add a widgets subfolder. You can see the supported Piklist folder structure here.
* Next we need to create the widget files.  Piklist widgets are made up of two:
	* `widget-name.php`: This file holds the widget output, and is the **only required file for a widget**. (i.e. example.php)
	* `widget-name-form.php`: Settings fields for your widget are placed in this file. (i.e. example-form.php)

### Widget Settings File
Let’s start with example-form.php, which will hold the fields the user will fill in to control the widget. This file is only required if you want to add settings to your widget.

Now, let’s create our first field, a text box:
```
piklist('field', array(
  'type' => 'text'
  ,'field' => 'demo_text'
  ,'label' => 'Title'
  ,'description' => 'Field Description'
  ,'value' => 'Default text'
  ,'attributes' => array(
    'class' => 'text'
  )
));
```

This simple array will create a text box that automatically saves as a widget setting. The `'type' => 'text'` variable tells Piklist what sort of field to render. Also, notice that this is very similar to the way you create fields for meta-boxes.

Now, let’s create our select field, a select field:

```
piklist('field', array(
  'type' => 'select'
  ,'field' => 'demo_select'
  ,'label' => 'Select box'
  ,'description' => 'Choose from the dropdown.'
  ,'attributes' => array(
  'class' => 'text'
  )
  ,'choices' => array(
    'option1' => 'Option 1'
    ,'option2' => 'Option 2'
    ,'option3' => 'Option 3'
  )
));
```


Notice that this array is very similar to the one used to create the text box. Just two differences:

* `'type' => 'select'`: Tells Piklist that you want to render a select field.
* The choices array adds your choices.

That’s it! Everything else is the same.

One more field to go in this tutorial. Let’s create our `colorPicker` field. Normally, you would need to add Javascript and CSS to create this field… but not with Piklist!

```
piklist('field', array(
  'type' => 'colorpicker'
  ,'field' => 'demo_colorpicker'
  ,'label' => 'Choose a color'
  ,'value' => '#aee029'
  ,'description' => 'Click in the box to select a color.'
  ,'attributes' => array(
    'class' => 'text'
  )
  ));
  ```

  Seriously, that’s all you need to create a ColorPicker field. You will notice this is pretty much the same code used to create the text box, except we set `'type' => 'colorpicker'`.

#### Full Code Snippet for Widget Settings: example-form.php:

  ```
<?php

piklist('field', array(
 'type' => 'text'
 ,'field' => 'demo_text'
 ,'label' => 'Text box'
 ,'description' => 'Field Description'
 ,'value' => 'Default text'
 ,'attributes' => array(
 'class' => 'text'
 )
));

piklist('field', array(
 'type' => 'select'
 ,'field' => 'demo_select'
 ,'label' => 'Select box'
 ,'description' => 'Choose from the dropdown.'
 ,'attributes' => array(
 'class' => 'text'
 )
 ,'choices' => array(
 'option1' => 'Option 1'
 ,'option2' => 'Option 2'
 ,'option3' => 'Option 3'
 )
));

piklist('field', array(
 'type' => 'colorpicker'
 ,'field' => 'demo_colorpicker'
 ,'label' => 'Choose a color'
 ,'value' => '#aee029'
 ,'description' => 'Click in the box to select a color.'
 ,'attributes' => array(
 'class' => 'text'
 )
 ));
```

### Widget Output File

**The output file is the only required file**, since settings may not be necessary for some widgets. Open `example.php`. At the top of the file, we will add a comment block that will control the configuration of the widget. This comment block is very similar to what you would see in a standard WordPress plugin or theme. Here are the minimum variables required:

```
<?php
/*
Title: My Demo Widget
Description: A description of what my widget does
*/
```

This comment block tells Piklist you want to name your widget, "My Demo Widget", with the description showing up in the widget edit screen.

Now let's add the standard WordPress widget variables. These are dictated by your theme:

```
<?php echo $before_widget; ?>

<?php echo $before_title; ?>

<?php echo $after_title; ?>

<?php echo $after_widget; ?>
```

Then add in your fields where you want them to show:

```
<?php echo $before_widget; ?>

<?php echo $before_title; ?>

<?php echo $settings['demo_text']; ?>!

<?php echo $after_title; ?>

<?php echo $settings['demo_select']; ?>!

<?php echo $settings['demo_colorpicker']; ?>!

<?php echo $after_widget; ?>
```

You just built a widget!

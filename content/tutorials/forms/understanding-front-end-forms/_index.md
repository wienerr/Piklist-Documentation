---
title: Understanding Front End Forms
description: Piklist makes creating Front End forms as easy as creating fields in the WordPress admin
hidden: true
---

Piklist makes creating Front End forms as easy as creating fields in the WordPress admin. In most cases you can use the same field code you used in the admin, plus you need to define the `scope` parameter.  `scope` tells Piklist where to save your data. In the admin, this can be auto-detected, but not with front-end forms.

Front end form code goes in your `forms/` folder.

* Start adding fields to your form.
* Remember to set the `scope` parameter to each field.

Once you’re finished adding your fields, you will also need to add a submit button:
```
piklist('field', array(
    'type' => 'submit'
    ,'field' => 'submit'
    ,'value' => 'Submit'
  ));
```

Once your form is saved, Piklist will automatically create a shortcode for it. You can use this shortcode to access your form.

If your form is in a PLUGIN (i.e. wp-content/plugins/my-plugin/parts/forms/my-form.php), you should use this shortcode:

`[piklist_form form="my-form" add_on="my-plugin"]`

`"my-form"`: the name of the file in your forms/ folder
`"my-plugin`": the name of your plugin slug

If your form is in a THEME (i.e. wp-content/themes/my-theme/piklist/parts/forms/my-form.php), then use a shortcode like this:

`[piklist_form form="my-form" add_on="theme"]'

`"my-form"`: the name of the file in your forms/ folder
`"theme": leave this set to the word "theme"

Sample forms are included in the built-in Piklist Demos:
`/plugins/piklist/add-ons/piklist-demos/parts/forms/`

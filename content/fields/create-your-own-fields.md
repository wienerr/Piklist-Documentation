---
title: "Create your own field"
weight: 99
---

With Piklist, you can easily create your own fields to use in your projects.

* To start, you should have a `/parts` folder in your theme or plugin to put Piklist parts files.
* Add a subfolder called `/fields/`. The structure should look like `/parts/fields/`.
* Create a file in the `/fields/` folder. Any files in this folder can become fields automatically registered with Piklist.
* The name of your file is important since it will become the name of your field. For demonstration purposes we’ll create our own checkbox field and call it my-checkbox, so the file name is `my-checkbox.php`.
* Depending on the type of field you want to create, you may want to copy/paste from an existing Piklist field. For this demo, we are going to open the default Piklist checkbox file, `piklist/parts/fields/checkbox.php`, copy everything and paste it into `my-checkbox.php`.
* Make any changes to this field you like, and you’re done!

### Usage
When using your new checkbox, use the type my-checkbox. It should look like this:
```
piklist('field', array(
    'type' => 'my-checkbox', // custom field type
    'field' => 'custom-checkbox',
    'label' => 'Custom Select Field',
    'choices' => array(
      'first' => 'First Choice',
      'second' => 'Second Choice',
      'third' => 'Third Choice'
    )
  ));
 ```

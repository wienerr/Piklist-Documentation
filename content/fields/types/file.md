---
title: "file (upload) Field"
menuTitle: "file (upload)"
---
### `'type' => 'file'`

Create a file upload field. Uses either the WordPress media uploader, or a basic uploader.

## Custom Parameters
The file field takes the following custom parameters. Include them within the `options` array.

**basic**

Piklist allows for two different file upload fields in the WordPress admin, a Basic uploader and the standard Media uploader. To use the Media uploader, do not set this parameter at all.

NOTES:

* The basic uploader is not supported in Widgets. Use the Media Uploader.
* If the basic uploader is on a form that has validation, and the validation fails, the uploader will be empty.

* Input:  Array
* Default:  false
* Example: `'basic' => true`

**button**

Set button text.

* Input:  Array
* Example: `'button' => 'Add File'`

**modal_title**

Set the title in the modal window (Media Uploader only)

* Input:  Array
* Example: `'modal_title' => 'Add File(s)'`

**preview_size**

The preview size of the image

* Input:  Array
* values:  Any registered image size
* Default:  thumbnail
* Example: 	`'preview_size' => 'medium'`

**save**

Save either the attachment ID or the url to the file to the database.

* Input:  Array
* values:  'id' or 'url'
* Default:  id
* Example: 	`'save' => 'url'`




```
  piklist('field', array(
    'type' => 'file'
    ,'field' => 'my_upload_basic_field'
    ,'scope' => 'post_meta'
    ,'label' => 'Basic Upload Field'
    ,'options' => array(
      'basic' => true
    )
  ));
```

```
  piklist('field', array(
    'type' => 'file'
    ,'field' => 'my_upload_field'
    ,'scope' => 'post_meta'
    ,'label' => 'Media Uploader'
    ,'options' => array(
      'modal_title' => 'Add File(s)'
      ,'button' => 'Add'
    )
  ));
```

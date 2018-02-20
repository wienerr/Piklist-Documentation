---
title: "select Field"
menuTitle: "select"
---
### `'type' => 'select'`

**Basic Select Field**
```php
piklist('field', array(
    'type' => 'select',
    'field' => 'my_select',
    'label' => 'My select',
    'choices' => array(
      'first' => 'First Choice',
      'second' => 'Second Choice',
      'third' => 'Third Choice'
    )
  ));
```


**Select Field with Optgroup**
```php
piklist('field', array(
    'type' => 'select'
    ,'field' => 'select_optgroup'
    ,'label' => __('Select with Option Groups', 'piklist-demo')
    ,'value' => 'third'
    ,'choices' => array(
      'Group 1' => array(
        'first' => __('First Choice', 'piklist-demo')
        ,'second' => __('Second Choice', 'piklist-demo')
        ,'third' => __('Third Choice', 'piklist-demo')
      )
      ,'Group 2' => array(
        'first' => __('First Choice', 'piklist-demo')
        ,'second' => __('Second Choice', 'piklist-demo')
        ,'third' => __('Third Choice', 'piklist-demo')
      )
    )
  ));
```

**Multiselect**

Add the following to the `attributes` array `'multiple' => 'multiple'`
```
piklist('field', array(
    'type' => 'select',
    'field' => 'my_multiselect',
    'label' => 'My Multiselect',
    'choices' => array(
      'first' => 'First Choice',
      'second' => 'Second Choice',
      'third' => 'Third Choice'
    ),
    'attributes' => array(
      'multiple' => 'multiple' // Allow a select field to accept multiple selections
    )
  ));
  ```

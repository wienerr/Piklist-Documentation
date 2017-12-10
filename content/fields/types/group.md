---
title: "Group Field"
menuTitle: "Group"
---
### `'type' => 'group'`

Adds a group of fields.

If `field` parameter is set, a serialized array is created of the field group, otherwise they will be saved as individual meta. Individual meta can easily be searched.
The columns field parameter is especially helpful in Field Groups for more complex layouts like address blocks.

### Examples
```php
piklist('field', array(
    'type' => 'group'
    ,'field' => 'address_group'
    ,'label' => __('Address (Grouped)', 'piklist-demo')
    ,'list' => false
    ,'description' => __('A grouped field with the field parameter set.', 'piklist-demo')
    ,'fields' => array(
      array(
        'type' => 'text'
        ,'field' => 'address_1'
        ,'label' => __('Street Address', 'piklist-demo')
        ,'required' => true
        ,'columns' => 12
        ,'attributes' => array(
          'placeholder' => 'Street Address'
        )
      )
      ,array(
        'type' => 'text'
        ,'field' => 'address_2'
        ,'label' => __('PO Box, Suite, etc.', 'piklist-demo')
        ,'columns' => 12
        ,'attributes' => array(
          'placeholder' => 'PO Box, Suite, etc.'
        )
      )
      ,array(
        'type' => 'text'
        ,'field' => 'city'
        ,'label' => __('City', 'piklist-demo')
        ,'columns' => 5
        ,'attributes' => array(
          'placeholder' => 'City'
        )
      )
      ,array(
        'type' => 'select'
        ,'field' => 'state'
        ,'label' => __('State', 'piklist-demo')
        ,'columns' => 4
        ,'choices' => piklist_demo_get_states()
      )
      ,array(
        'type' => 'text'
        ,'field' => 'postal_code'
        ,'label' => __('Postal Code', 'piklist-demo')
        ,'columns' => 3
        ,'attributes' => array(
          'placeholder' => 'Postal Code'
        )
      )
    )
  ));
```

### Usage
#### Display Grouped Fields
If `field` value is set for the group, unserialize the contents of the field like this:
```
$group_data = get_post_meta($post->ID, 'field_name', true);
$group_data = maybe_unserialize($group_data); // nice WP helper function to unserialize if needed
print_r($group_data); // output the results
  ```

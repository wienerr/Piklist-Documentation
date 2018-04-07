## match

Checks to see if two fields match.

### Options

#### field
The field name to match

```php
piklist('field', array(
    'type' => 'password'
    ,'scope' => 'user'
    ,'field' => 'user_pass_repeat'
    ,'label' => 'Repeat New Password'
    ,'value' => false // Setting to false forces no value to show in form.
    ,'validate' => array(
      array(
        'type' => 'match'
        ,'options' => array(
          'field' => 'user_pass' // does this match the field user_pass_repeat
        )
      )
    )
  ));
```

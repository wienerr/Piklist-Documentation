## range

Verifies that the data entered is within the defined range.

### Options

#### min
The minimum allowed value.
default: 1

#### max
The maximum allowed value
default: 10


```php
,'validate' => array(
      array(
        'type' => 'range'
        ,'options' => array(
          'min' => 2
          ,'max' => 8
        )
      )
    )
```

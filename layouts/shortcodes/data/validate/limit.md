## limit

Verifies that the number of items are within the defined limit.

### Options

#### min
The minimum allowed value.
default: 1

#### max
The maximum allowed value
default: infinite

#### count
Determines what you want to count: words, characters, files, images, add-more's

values: words, characters

default: false (files, images, add-more's)


```php
,'validate' => array(
      array(
        'type' => 'limit'
        ,'options' => array(
          'min' => 2
          ,'max' => 2
        )
      )
    )
```


```php
,'validate' => array(
      array(
        'type' => 'limit'
        ,'options' => array(
          'min' => 2
          ,'max' => 6
          ,'count' => 'characters'
        )
      )
    )
```

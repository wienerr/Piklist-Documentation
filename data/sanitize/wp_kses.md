## wp_kses

Makes sure that only the allowed HTML element names, attribute names and attribute values plus only sane HTML entities will be saved.

Codex reference for parameters: [wp_kses](http://codex.wordpress.org/Function_Reference/wp_kses)

```php
'sanitize' => array(
  array(
    'type' => 'wp_kses'
    ,'options' => array(
      'allowed_html' => array(
        'strong' => array()
        ,'a' => array(
          'href' => array()
          ,'title' => array()
        )
      )
      ,'allowed_protocols' => array('http')
    )
  )
)
```

## title

Specifically, HTML and PHP tags are stripped, and (in a ‘save’ context) accents are removed (accented characters are replaced with non-accented equivalents). Despite the name of this function, the returned value is intended to be suitable for use in a URL, not as a human-readable title.

Codex reference for parameters: [sanitize_title](http://codex.wordpress.org/Function_Reference/sanitize_title)

```php
'sanitize' => array(
  array(
    'type' => 'title'
    ,'options' => array(
      'fallback' => 'my-fallback-title'
    )
    ,'context' => 'save'
  )
)

```

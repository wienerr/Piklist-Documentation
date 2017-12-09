## file_name

Removes special characters that are illegal in filenames on certain operating systems and special characters requiring special escaping to manipulate at the command line. Replaces spaces and consecutive dashes with a single dash. Trim period, dash and underscore from beginning and end of filename.

Codex reference for parameters: [sanitize_file_name](http://codex.wordpress.org/Function_Reference/sanitize_file_name)

```php
'sanitize' => array(
      array(
        'type' => 'file_name'
      )
    )
```

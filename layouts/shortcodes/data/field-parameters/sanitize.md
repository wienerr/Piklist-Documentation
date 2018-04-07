## sanitize

Untrusted data entered into your form should be sanitized and validated before saving. By default Piklist uses the WordPress `$wpdb->prepare` method to handle your data, insuring it is SQL-escaped before saving to prevent against SQL injection attacks.

Piklist also adds another level of sanitization you can use at the field level, and makes it easy to use. A library of sanitization functions are included with Piklist, or you can create your own.

Since data sanitization depends on the type of data and the context in which it is used, the `sanitize` parameter allows you to choose how to clean your data, and accepts the following parameters:

* Input:  parameters

### Sub Parameters:

#### type
The type of sanitization function to run.
`'type' => 'html_class'`

#### options
An array of arguments to pass to the function.
`'options' => array( 'fallback' => 'my-default-fallback' )`

#### callback
Override the default Piklist callback function with your own.
`'callback' => 'my-custom-callback`

Examples:
```
// sanitize parameter example. Must be in field function
,'sanitize' => array(
  array(
   'type' => 'html_class'
   ,'options' => array(
     'fallback' => 'my-default-class'
   )
   ,'callback' => 'my-custom-callback'
 )
)
```

```
// Use the built-in sanitize function: file_name
  piklist('field', array(
    'type' => 'text'
    ,'label' => 'File Name'
    ,'field' => 'sanitize_file_name'
    ,'description' => 'Converts multiple words to a valid file name'
    ,'sanitize' => array(
      array(
        'type' => 'file_name'
      )
    )
  ));
 ```

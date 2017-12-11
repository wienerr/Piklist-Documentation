## request_value

Make a field required. If this field is not filled in the form will not save.

NOTE: Piklist uses server-side authentication instead of browser-side authentication to do required verification. The pro is that it’s more secure, the con is that the user has to press “save” before the validation kicks in.

If you want the convenience of browser-side verification you could add the HTML5 "required" attribute as well. See example below.

* Input: boolean
* Default: false

```
// required with Piklist
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'text_required'
    ,'label' => 'Enter some required text'
    ,'required' => true
  ));
```

```
// required with Piklist and HTML 5
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'text_required_2'
    ,'label' => 'Enter some required text'
    ,'required' => true
    ,'attributes' => array(
      'required' => 'required' // HTML 5 validation
    )
  ));
```

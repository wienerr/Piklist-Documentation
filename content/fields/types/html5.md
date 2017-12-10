---
title: "HTML5 Fields"
menuTitle: "HTML5"
---

Piklist supports the following HTML 5 fields:

* color
* date
* datetime
* datetime-local
* email
* month
* range
* search
* tel
* time
* url
* week
* number


You can use Piklist field parameters to customize these fields.

### Example

```
piklist('field', array(
    'type' => 'email',
    'field' => 'my_html5_email',
    'label' => 'Enter your email address',
    'attributes' => array( // Pass HTML5 attributes in the attributes array
      'required' => 'required',
      'placeholder' => 'Enter email address'
    )
  ));
```

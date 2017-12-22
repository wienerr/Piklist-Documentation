---
title: Conditionally Show Fields
description: Piklist makes it easy to show one or more fields, based on the value of another field, and so much more.
hidden: true
---

## Description
Piklist makes it easy to show one or more fields, based on the value of another field, and so much more. The Piklist conditions parameter is very powerful, and you can see all the options in the documentation.

In this tutorial, if the user clicks on the “Yes” radio button to subscribe to our newsletter, we will show an “Email” text field.

* Conditional fields work on almost every page in WordPress. In this tutorial we are going to build these fields for a Post.

* First let’s build a metabox using our [base tutorial](/getting-started/). You can stop at "Adding Fields", since we will be creating our own fields.

* Now, let’s add two fields:
    1. The Control field will be a radio button
    2. The Conditional field will only display if “Yes” is selected in the radio button.

### Build the Control Field

Building the Control field in Piklist is exactly the same as building any other field. There is absolutely nothing different about it. In this case, we are going to build the standard radio field that will ask the user if they want to subscribe to the newsletter:

```
piklist('field', array(
 'type' => 'radio'
 ,'field' => 'subscribe_to_newsletter'
 ,'label' => 'Would you like to subscribe to our newsletter?'
 ,'attributes' => array(
 'class' => 'text'
 )
 ,'choices' => array(
   'yes' => 'Yes'
   ,'no' => 'No'
 )
 ,'value' => 'no'
));
```

Note, that we set `value => 'no'`. This sets the default value of the field to “No”, which hides the email box.

### Build the Conditional Field

Let’s start with a standard Piklist text box.
```
piklist('field', array(
 'type' => 'text'
 ,'field' => 'email_address'
 ,'label' => 'Email Address'
 ,'description' => 'Please enter your email address'
 )
));
```

Now we are going to add the "conditions" array:
```
,'conditions' => array(
   array(
    'field' => 'subscribe_to_newsletter'
    ,'value' => 'yes'
   )
 )
```

This array can actually hold a variety of conditions. In this case, we are saying: **If the field “subscribe_to_newsletter” (our Control field name) equals yes, then show this field.**

All together the conditional field looks like this:
```
piklist('field', array(
 'type' => 'text'
 ,'field' => 'email_address'
 ,'label' => 'Email Address'
 ,'description' => 'Please enter your email address'
 ,'conditions' => array(
     array(
      'field' => 'subscribe_to_newsletter'
      ,'value' => 'yes'
     )
   )
));
```

### Full Code Snippet:

```
piklist('field', array(
 'type' => 'radio'
 ,'field' => 'subscribe_to_newsletter'
 ,'label' => 'Would you like to subscribe to our newsletter?'
 ,'attributes' => array(
 'class' => 'text'
 )
 ,'choices' => array(
   'yes' => 'Yes'
   ,'no' => 'No'
 )
 ,'value' => 'no'
));

piklist('field', array(
 'type' => 'text'
 ,'field' => 'email_address'
 ,'label' => 'Email Address'
 ,'description' => 'Please enter your email address'
 ,'conditions' => array(
   array(
    'field' => 'subscribe_to_newsletter'
    ,'value' => 'yes'
   )
 )
));
```

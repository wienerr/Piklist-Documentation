## email_exists

Checks that the entered email is not already registered to another user.

Uses the standard WordPress function [`email_exists`](https://codex.wordpress.org/Function_Reference/email_exists)

```php
'validate' => array(
      array(
        'type' => 'email_exists'
      )
    )
```

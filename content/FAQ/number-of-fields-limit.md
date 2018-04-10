---
title: "Is there a limit on the number of Piklist fields?"
description: "How to fix field limit issues."
weight: 15
---

There is no limit to how many fields you can create and display with Piklist. However, your server limits how many can be used on each page.  

This is not a Piklist issue... it's part of your servers configuration.

The most common solution is adjusting your `max_vars` setting. This is a PHP setting which sets the maximum variables that can be used in one page load.

Once you increase this limit, Piklist can finish rendering all it's fields.

You can change the setting in either your `php.ini`, or `.htaccess` file:

### php.ini

```
max_input_vars = 3000
suhosin.get.max_vars = 3000
suhosin.post.max_vars = 3000
suhosin.request.max_vars = 3000
```

### .htaccess

```
php_value max_input_vars 3000
php_value suhosin.get.max_vars 3000
php_value suhosin.post.max_vars 3000
php_value suhosin.request.max_vars 3000
```

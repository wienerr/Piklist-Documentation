---
title: Working with Field Relationships
description: Piklist allows you to relate any object to any object.
hidden: true
---

Piklist relationships allow you to relate any object to any object.

In this tutorial we'll use the classic books example, assuming our post types are book and chapter, and a user can be an author.
We'll cover the `post_has`, `post_belongs`, and `relate_query` parameters.

First let's add the chapter relate field to the book post type. Since this is a post type we're adding a field to, the
file goes in the `/parts/meta-boxes/` folder.
 
Create a file and add this code:
```php
/**
 * Title: Chapters
 * Post Type: book
 * Context: normal
 * Priority: high
 */

piklist('field', array(
  'type' => 'select'
  ,'title' => 'Chapters'
  ,'choices' => piklist(get_posts(array(
    'numberposts' => -1
    ,'post_type' => 'chapters'
  )), array('ID', 'post_title'))
  ,'relate' => array( 'scope' => 'post' )
  ,'attributes' => array( 'class' => 'multiple' )
));
```

Create a second file in the `/parts/user/` folder. Now let's add the books relate field to the author:
```php
/**
 * Title: Books
 * Capability: edit_books
 */

piklist('field', array(
  'type' => 'select'
  ,'title' => 'Books'
  ,'choices' => piklist(get_posts(array(
    'numberposts' => -1
    ,'post_type' => 'books'
  )), array('ID', 'post_title'))
  ,'relate' => array( 'scope' => 'post' )
  ,'attributes' => array( 'class' => 'multiple' )
));
```

## Querying data by relationships

Like most parts of Piklist, you can use **standard WordPress functions to retrieve your data**. Relationships are not different.

**Important Note:** When using the `get_posts()` function make sure ou include `'suppress_filters' => false`, otherwise 
WordPress won't allow Piklist to extend the function. `WP_Query` allows filters by default.

Get a book's chapters:
```php
$chapters = get_posts(array(
  'post_type' => 'chapter'
  ,'numberposts' => -1
  ,'suppress_filters' => false
  ,'relate_query' => array(
    array(
      'id' => $book_id
      ,'relate' => 'belongs'
    )
  )
));
```

Here's a shorthand method, which has the same result and works for simple queries. There's also a `post_belongs` counterpart.
```php
$chapters = get_posts(array(
  'post_type' => 'chapter'
  ,'numberposts' => -1
  ,'suppress_filters' => false
  ,'post_belongs' => $book_id
));
```

Get an author's books:
```php
$books = get_posts(array(
  'post_type' => 'book'
  ,'numberposts' => -1
  ,'suppress_filters' => false
  ,'relate_query' => array(
    array(
      'id' => $user_id
      ,'scope' => 'user'
      ,'relate' => 'has'
    )
  )
));
```

Please note that we're including `scope` in the relate array but I didn't in the first example. This is because in the first example the scope is the same for both objects. I could put `'scope' => 'post'`, but it's unnecessary.

Get either books' authors
```php
$authors = get_users(array(
  'relate_query' => array(
    'compare' => 'OR'
    ,array(
      'id' => $book_one_id
      ,'scope' => 'post'
      ,'relate' => 'belongs'
    )
    ,array(
      'id' => $book_two_id
      ,'scope' => 'post'
      ,'relate' => 'belongs'
    )
  )
));
```

To get an author that has both books, you would simply change `'compare' => 'OR'` to `'compare' => 'AND'` – and this is not case sensitive.

Advanced example of getting books that belong to ( Author 1 AND Author 2 ) OR Author 3:
```php
$books = get_posts(array(
  'post_type' => 'book'
  ,'numberposts' => -1
  ,'suppress_filters' => false
  ,'relate_query' => array(
    'compare' => 'OR'
    ,array(
      'compare' => 'AND'
      ,array(
        'id' => $user_one_id
        ,'scope' => 'user'
        ,'relate' => 'has'
      )
        'id' => $user_two_id
        ,'scope' => 'user'
        ,'relate' => 'has'
      )
    )
    ,array(
      'id' => $user_three_id
      ,'scope' => 'user'
      ,'relate' => 'has'
    )
  )
));
```

## How relationships are stored
Let’s talk about how relate data is stored for a moment. In our case we have a book post type relating to a chapter post 
type. As mentioned, in this case the book _owns_ the chapter; that is to say, when creating a book the user selects 
which chapters will be in it — makes sense!

The way Piklist stores this is that in the _chapter’s_ meta it adds a `__relate_post` meta key wherein the value is the 
ID of the event that owns it. This is later used when performing relate queries.

So if you look at the book’s meta, you won’t see anything added about the chapter. Why? Because it’s not designed to put 
anything there. Look at the chapter’s meta. You should find it there. For this reason, you don’t need to specify a 
field, as relate fields are a special type which store in their own way. In short, the _owned_ object stores the meta.

Note: we're talking about two post types, here. In the case of a user that owns a post type, the post type would have
`__relate_user` in the meta. The possibilities are `__relate_post`, `__relate_user`, and `__relate_comment`.

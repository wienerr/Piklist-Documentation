---
title: Working with Field Relationships
description: Piklist allows you to relate any object to any object.
hidden: true
---

Piklist relationships allow you to relate any object to any object.

In this tutorial we'll use the classic books example, assuming our post types are book and chapter, and a user can be an author.
We'll cover the `post_has`, `post_belongs`, and `relate_query` parameters.

Since we're using Post Types, all this code goes in your `/parts/meta-boxes/` folder.

First let's add the chapter relate field to the book post type. Create a file and add this code:
```
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
  ,'relate' => array(
    'scope' => 'post'
  )
  ,'attributes' => array(
    'multiple' => 'multiple'
  )
));
```

Create a second file in the same `/parts/meta-boxes/` folder. Now let's add the books relate field to the author:
```
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
  ,'relate' => array(
    'scope' => 'post'
  )
  ,'attributes' => array(
    'multiple' => 'multiple'
  )
));
```

## Usage

Like most parts of Piklist, you can use **standard WordPress functions to retrieve your data**. Relationships are not different.

Get a book's chapters:
```
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

Same as the old method, and still works
```
$chapters = get_posts(array(
  'post_type' => 'chapter'
  ,'numberposts' => -1
  ,'suppress_filters' => false
  ,'post_belongs' => $book_id
));
```

Get an author's books:
```
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
```
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
```
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

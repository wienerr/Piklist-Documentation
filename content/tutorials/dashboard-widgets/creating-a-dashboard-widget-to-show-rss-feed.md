---
title: Create a Dashboard Widget to show an RSS Feed.
description: Piklist makes it super easy to create Dashboard Widgets in WordPress.
hidden: true
weight: 1
---

## Description
Piklist makes it super easy to create Dashboard Widgets in WordPress. This way you can concentrate on your widget code, and let Piklist do the hard part.

{{< show-tutorial-start-folders >}}

* Create a PHP file in your `/parts/dashboard/` [folder](/folder-structure/). It doesn't matter what you name the file. For this example we'll call it `rss-news.php`.
* At the top of the file, add this code:

```
<?php
/*
Title: Piklist News
Capability: read
*/
?>
```

This code tells Piklist to create a Dashboard Widget named "Piklist News", and any user with the `read` capability can see it. If you go to your admin Dashboard you will see the widget show up.

* The next step is to add the code to grab the RSS feed and render it. We'll use the code example for the [`fetch_feed`](https://codex.wordpress.org/Function_Reference/fetch_feed) example on wordpress.org.

That's it! You just created a Dashboard Widget.

### Full Snippet

```
<?php
/*
Title: Piklist News
Capability: read
*/

include_once( ABSPATH . WPINC . '/feed.php' );

// Get a SimplePie feed object from the specified feed source.
$rss = fetch_feed( 'http://piklist.com/rss/' );

$maxitems = 0;

if ( ! is_wp_error( $rss ) ) : // Checks that the object is created correctly

    // Figure out how many total items there are, but limit it to 5.
    $maxitems = $rss->get_item_quantity( 5 );

    // Build an array of all the items, starting with element 0 (first element).
    $rss_items = $rss->get_items( 0, $maxitems );

endif;
?>

<ul>
    <?php if ( $maxitems == 0 ) : ?>
        <li><?php _e( 'No items', 'my-text-domain' ); ?></li>
    <?php else : ?>
        <?php // Loop through each feed item and display each item as a hyperlink. ?>
        <?php foreach ( $rss_items as $item ) : ?>
            <li>
                <a href="<?php echo esc_url( $item->get_permalink() ); ?>"
                    title="<?php printf( __( 'Posted %s', 'my-text-domain' ), $item->get_date('j F Y | g:i a') ); ?>">
                    <?php echo esc_html( $item->get_title() ); ?>
                </a>
            </li>
        <?php endforeach; ?>
    <?php endif; ?>
</ul>

```

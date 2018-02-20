## Slug

#### Available in [Piklist Beta only](https://github.com/piklist/piklist/releases)

Display this group of fields for this object slug.

Piklist Parts: meta-boxes, terms, users, media, notices, workflows

* Input:  comma-delimited
* Returns:  array

When targeting a post, term or media item, use that items slug. When targeting a user, use their user ID.

Example:
```
slug: my-page
slug: my-page, my-term, my-media, a-user-id
```

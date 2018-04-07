## scope

The scope parameter tells Piklist where to save field data. In many cases this is the WordPress database table (i.e. post, post_meta, term, term_meta)

When creating fields for the WordPress admin, in most cases, you do not have to define scope. Piklist will automatically set it for you.

You MUST define scope when creating front-end forms.

Piklist allows you to mix-and-match field types within a form. So, one form can have fields that save information as post_meta, while other fields save to a taxonomy. Scope is what determines where the field data is saved. If you don’t set the scope parameter then it will default to where the field is used. For example, if you are creating a meta-box, then scope will automatically be set to post_meta. When working with front-end forms, you must set the scope for each field, so Piklist knows where to save your data.

If you want create a field that saves the `post_title`, then you would set `scope` to `post`, since the `post_title` field is in the `wp_posts` database table.

* Input:  string
* Default:  piklist_form::get_field_scope()

Example:
`'scope' => 'post'`

---
title: "How do I include Piklist in my plugin or theme?"
description: "Using Piklist with your plugin or theme."
---

While we understand why you may want to include Piklist in your plugin or theme, we believe it may negatively impact your users’ experience. Piklist is not a boilerplate framework and is always designed to be a standalone plugin. **Piklist will not work properly if included in another plugin or theme**.

If the user does install Piklist as a separate plugin, AND your plugin/theme, it invites multiple conflicts, including different versions of Piklist. This can cause your plugin, or other plugins/themes that rely on Piklist, not to work properly. In addition, you become solely responsible for keeping your code updated with the latest version of Piklist, instead of letting the user upgrade normally.

Additionally, if you plan on submitting your code to WordPress.org, they do not accept a plugin that includes an entire other plugin, inside it.

To make it easier for you to build your plugin on Piklist, we have created the [Piklist Checker](/Piklist-Documentation/getting-started/piklist-checker/). By including the Checker in your plugin, your users will be notified if Piklist is not installed, and they will be walked through the installation.

We hope you agree that keeping Piklist as a separate plugin makes sense for both you and your users. If not, there are other frameworks you can choose from that are designed to be included in plugins and themes.

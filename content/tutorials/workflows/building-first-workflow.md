---
title: Building Your First Workflow
description: Piklist Workflows allow you to add a tabbed system on Post and User. Additionally, you can add almost anything you want to each tab.
hidden: true
weight: 1
---


Piklist Workflows allow you to add a tabbed system on almost any admin page. Additionally, you can add almost anything you want to each tab.

IMPORTANT: Each Workflow tab loads a separate page, with a new url. If you change tabs without saving you will lose your data.

ALSO IMPORTANT: Workflows control the ENTIRE page, not just what is located under the tabs.

Each Workflow needs a minimum of two files:

## Header file
This file goes in the `/workflows` folder

The header sets the main parameters for the entire flow. Entering the parameters into a comment block is all that's required of the header file.

### Parameters

#### Flow
Define a unique name for your flow. The name will tie together all your tabs.
Example: `My Flow`

#### Page
What pages the flow should display on. This can be multiple pages, separated by commas.
Example: `post.php, post-new.php, post-edit.php, admin.php, your_custom_setting`

#### Post Type
For custom post type flows, please define the post type.
Example: `my_cpt`

#### Header
Tells Piklist this is a WorkFlow header file. Set this to: `true`.

#### Position
Where on the page should the WorkFlow display. The Workflow system can currently display in five WordPress hook locations:

`'header' => 'in_admin_header'`

`'body' => 'all_admin_notices'`

`'title' => 'edit_form_after_title'`

`'editor' => 'edit_form_after_editor'`

`'profile' => 'profile_personal_options'`

```
/*
Flow: My Flow
Page: post.php, post-new.php, post-edit.php, admin.php
Post Type: my_cpt
Header: true
Position: title
*/
```


## Tab file
This file goes in the `/workflows` folder

Each tab in your Workflow gets its own file. Each file uses a comment block to link it to a Workflow.

**TIP: You must create at least two tabs for WorkFlows to show up.**


### Parameters

#### Title
The title of the Workflow tab.
Example: `My Tab`

#### Order
Defines the sort order of the tabs.
Example: `10`

#### Flow
Should be the same value as the header file.
Example: `My Flow`

#### Page
What pages the individual tab should display on. This can be multiple pages, separated by commas.
Example: `post.php, post-new.php, post-edit.php, admin.php`

#### Default
Sets this tab as the default tab.
IMPORTANT: Only use this parameter in ONE of your WorkFlow tab files.
Default: `true`

```
/*
Title: My Tab
Order: 10
Flow: My Flow
*/
```

So far we've created a Workflow and a tab, but we have not shown any content. When you click on a tab you are defining the entire page environment, not just the environment in the tab. You have to define which meta-boxes (or user sections, settings sections, term sections, etc) are shown on the entire page, even in the sidebar. This means when a user clicks on a WorkFlow tab you can hide or show fields in the actual tab and in the sidebar.

## Assign Meta Boxes, Sections, Etc. to Workflows.
** This file goes in the `/meta-boxes` folder, if you want to assign meta-boxes to this workflow. If you want to assign settings sections, then this file would go in the `/settings` folder.

In this example, we are creating and assigning a meta-box.

Create a meta-box the way you normally would with Piklist.

In the comment block of your meta box file add the following two parameters:

```
Tab: My Tab
Flow: My Flow
```

So, if this was the original comment block for your meta box:
```
/*
Title: Text Fields
Post Type: piklist_demo
*/
```

It would now look like this:
```
/*
Title: Text Fields
Post Type: piklist_demo
Tab: My Tab
Flow: My Flow
*/
```

Your meta-box will now show up under the “My Tab” tab of your workflow.

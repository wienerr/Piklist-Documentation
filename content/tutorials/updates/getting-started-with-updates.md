---
title: Getting started with updates
description: Use Piklist updates to run your update scripts
hidden: true
weight: 1
---

If your plugin needs an update procedure, Piklist makes it quite easy. First create a php file, and drop it in the updates folder. The file name should be the current version of your plugin. So, if the update procedure is for version 2.0 of your plugin, then the file name should be 2.0.php.

{{< show-tutorial-start-folders >}}

Then write your update procedure.

### Example
This example is pulled from Piklist itself.

* This update scripts runs if you are upgrading from Piklist version 0.7.1.
* The script moves data from a legacy table to a new table, and drops the old table.
* You can find it in `piklist/parts/updates`

```
if (!defined('ABSPATH')) exit; // Exit if accessed directly

if (!class_exists('Piklist_Update_0_7_2'))
{
  class Piklist_Update_0_7_2
  {
    public function __construct()
    {
      add_action('admin_init', array($this, 'admin_init'));
    }

    public function admin_init()
    {
      global $wpdb;

      $legacy_table = $wpdb->prefix . 'piklist_cpt_relate';

      $count = $wpdb->get_var("SHOW TABLES LIKE '{$legacy_table}'");

      // Does the legacy table exist?
      if (!empty($count))
      {
        // Grab data from legacy table
        $data = $wpdb->get_results("SELECT * FROM {$legacy_table}", ARRAY_A);

        // Move data to new table
        foreach ($data as $row)
        {
          $wpdb->insert(
            $wpdb->post_relationships
            ,$row
            ,array(
              '%d'
              ,'%d'
              ,'%d'
            )
          );
        }

        // Delete legacy table
        $wpdb->query("DROP TABLE IF EXISTS {$legacy_table}");
      }
    }
  }
}

```

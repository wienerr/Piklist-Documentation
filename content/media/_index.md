---
title: "Media"
description: "With Piklist you can easily create Media meta-boxes in the admin. You can create as many files as you like and place them in this folder. Each file will render one meta-box."
weight: 170
---

### `/parts/media/`

With Piklist you can easily create Media meta-boxes in the admin. You can create as many files as you like and place them in this folder. Each file will render one meta-box.

```
<?php
/*
Title: Sample Media Fields
*/

  piklist('field', array(
    'type' => 'text'
    ,'field' => 'sample_text'
    ,'label' => __('Text', 'piklist')
    ,'attributes' => array(
      'class' => 'regular-text'
    )
  ));
 ```

### [View Tutorials &rightarrow;](/tutorials/media/)

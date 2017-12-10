---
title: "Datepicker Field"
menuTitle: "Datepicker"
---
### `'type' => 'datepicker'`

Create a jQuery datepicker field.

This field uses the standard jQuery DatePicker field, and respects the same options. Just define them in the Piklist options array. See examples below.

You can use Piklist field parameters to customize this field.

**Basic Datepicker field**
```
piklist('field', array(
    'type' => 'datepicker',
    'field' => 'my_date_field',
    'label' => 'Date',
    'value' => date('M d, Y', time() + 604800), // set default value
    'options' => array(
      'dateFormat' => 'M d, yy'
    )
  ));
 ```

 **Localizing the Datepicker field**

The datepicker field can be localized by translating these parameters. This example shows the field being translated into French.

```
piklist('field', array(
    'type' => 'datepicker',
    'field' => 'my_date_field',
    'label' => 'Date',
    'options' => array(
      'closeText'=>'Fermer',
      'prevText'=>'Précédent',
      'nextText'=>'Suivant',
      'currentText'=>'Aujourd\'hui',
      'monthNames'=>['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
      'monthNamesShort'=>['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
      'dayNames'=>['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      'dayNamesShort'=>['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
      'dayNamesMin'=>['D','L','M','M','J','V','S'],
      'weekHeader'=>'Sem.',
      'dateFormat'=>'dd/mm/yy',
      'firstDay'=>1,
      'isRTL'=>false,
      'showMonthAfterYear'=>false,
      'yearSuffix'=>''
    )
  ));
 ```

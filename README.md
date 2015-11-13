Input Date Formatter
==============================

___
___


Introduction
------------
This module consists of a directory, which formats a not formatted number typed into an input in a date format dd / mm / yyyy

___
___


Installation
------------
You can install the plugin by running the command below.
```
bower install --save inputDateFormatter=https://github.com/alexandruCochior/inputDateFormatter.git#0.2.0
```
Or if you want the last version without the 5 digit recognition.
```
bower install --save inputDateFormatter=https://github.com/alexandruCochior/inputDateFormatter.git#0.1.0
```
___
___

Registration
------------
After adding it as a dependency, register it in you application.
```
// This is located in your app.js file
angular
  .module('myAngularJSApplication', [
    ... // Several other registered modules
    'inputDateFormatter'
  ])
```
___
___

Use
------------
To use this module you just have to add the attribute "input-date-formatter" to desired text input fields.

jQuery HTML5 Placeholders Plugin
================================

Provides a [jQuery](http://jquery.com/) plugin to simplify working with HTML labels and HTML5 placeholders in form input tags.

This plugin aims to simplify development of forms in which you want display  `input` tags with HTML5 placeholders instead of `label` tags
on clients that support HTML5 but fall back to `label` tags when the placeholder attribute isn't supported.


You code your forms with standard `label` elements and then invoke this plugin to convert those labels into placeholders.
The plugin operates using [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) to provide backwards
compatibility with browsers lacking placeholder support.

Usage
-----

	<script type="text/javascript" src="./jquery.min.js"></script>
	<script type="text/javascript" src="./jquery.htm5placeholders.js"></script>
		
	<script type="text/javascript">
	//<![CDATA[
		$(document).ready(function() {
			// replace formId with the id of your form element 
			$('#formId').html5placeholders();
		});
	//]]>
	</script>
 

Sample Code
-----------

Create an HTML form with a label for each input:

	<form id="testForm" name="test">
		<div>
			<label for="name">First &amp; Last Name</label>
			<input type="text" name="name" />
		</div>
	</form>

On browsers that support HTML5 placeholders, this plugin converts the form to:

	<form id="testForm" name="test">
		<div>
			<input type="text" name="name" placeholder="First &amp; Last Name" />
		</div>
	</form>

Demo
----

This plugin will progressively enhance an HTML form by hiding labels and using the label text as a placeholder in the input field.

![Before Enhancement][before_image]

This will be converted to the view below, only if the browser supports placeholders.

![After Enhancement][after_image]


Requirements
------------

This plugin requires [jQuery](http://jquery.com/) 1.4 or newer.

Testing
-------

Tested with desktop browsers:

* Google Chrome / Mac OS
* Safari / Mac OS
* IE 8 / Windows XP

Tested with mobile browsers:

* Mobile Safari / iOS 5
* Google Chrome / Android 4.0
* IE 9 / Windows Phone 7.5

[before_image]: https://s3.amazonaws.com/jquery-html5placeholders/html5placeholder_demo_before.png
[after_image]: https://s3.amazonaws.com/jquery-html5placeholders/html5placeholder_demo_after.png
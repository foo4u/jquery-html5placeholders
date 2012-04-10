jQuery HTML5 Placeholders Plugin
================================

Provides a [jQuery](http://jquery.com/) plugin to simplify working with HTML labels and HTML5 placeholders in form input tags.

This plugin aims to simplify development of forms in which you want display  `input` tags with HTML5 placeholders instead of `label` tags
on clients that support HTML5 but fall back to `label` tags when the placeholder attribute isn't supported.


Using this plugin, you code your forms with standard `label` elements and then invoke this plugin to convert those labels into placeholders
where supported using [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement).
 

Sample
------

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

Requirements
------------

This plugin requires only requires [jQuery](http://jquery.com/) 1.4 or newer.


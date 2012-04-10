/**
 * Provides a jQuery plugin to manage the display
 * of labels when HTML5 placeholders are present.
 *
 * @author Scott Rossillo
 *
 */
(function( $ ) {

	var supportedInputTypes = ['text', 'email', 'password', 'search'];

	var placeholderSupport = function() {
		var input = document.createElement('input');
		return ('placeholder' in input);
	};
	
	var inputTypeSupported = function( $field ) {
		return ( $.inArray( $field.attr('type'), supportedInputTypes) >= 0);
	};
	
	$.fn.html5placeholders = function() {
		return this.each(function () {
			// plugin contents here
			var $form = $(this);
			
			if( placeholderSupport() ) {
				
				$form.find('input').each(function() { 
					
					var $field = $(this),
						$label = $form.find('label[for=' + $field.attr('name') +']').first();
					
					if($label.length && inputTypeSupported( $field )) {
						$field.attr('placeholder', $label.text());
						$label.hide();
					}
				});
			}
		});
	}
})(jQuery);

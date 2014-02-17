/**
 * Provides a jQuery plugin to manage the display
 * of labels when HTML5 placeholders are present.
 *
 * @author Scott Rossillo
 *
 */
(function( $ ) {

	var supportedInputTypes = ['email', 'password', 'search', 'tel', 'text'];

	var placeholderSupport = function() {
		var input = document.createElement('input');
		return ('placeholder' in input);
	};
	
	var inputTypeSupported = function( $field ) {
		return ( $.inArray( $field.attr('type'), supportedInputTypes) >= 0 );
	};
	
	$.fn.html5placeholders = function( options ) {
	
		var settings = $.extend(
			{
				hideSelectLabels: true,
				hideMethod: function(el) {
					el.css('position', 'absolute').css('clip', 'rect(1px, 1px, 1px, 1px)');
				}
			}, 
			options
		);
		
		return this.each(function () {
			// plugin contents here
			var $form = $(this);
			
			if( placeholderSupport() ) {
				
				$form.find('input').each(function() {
					
					var $field = $(this),
						$label = $form.find('label[for=\'' + $field.attr('id') +'\']').first();
					
					if($label.length && inputTypeSupported( $field )) {
						$field.attr('placeholder', $label.text());
						settings.hideMethod($label);
					}
				});
				
				// hide select labels if requested
				if( settings.hideSelectLabels ) {
					$form.find('select').each(function() {
						settings.hideMethod($form.find('label[for=\'' + $(this).attr('id') +'\']'));
					});
				}	
			}
		});
	}
})(jQuery);

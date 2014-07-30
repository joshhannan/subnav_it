(function( $ ) {
	$.fn.subnav_it = function( subnavigation, options ) {

		// DEFAULT OPTIONS
		var settings = $.extend({
			list_items: '.main_menu ul li a',
			sublist: '.subnav'
		}, options );

		var object = $(this);
		subnavigation = $(subnavigation);
		var menu_attr;
		var hover_intent;

		subnav = subnavigation.selector;
		sublist = subnavigation.selector+' '+settings.sublist;

		$(settings.list_items).mouseenter(function() {
			$(settings.list_items).removeClass('active');
			$(this).addClass('active');
			menu_attr = $(this).attr('rel');
			if( $(sublist+'#'+menu_attr+':empty').length > 0 ) {
				$(subnav).slideUp();
			} else {
				clearTimeout(hover_intent);
				hover_intent = setTimeout(function() {
					$(sublist).hide();
					$(subnav).slideDown();
					$('#'+menu_attr).fadeIn();
				}, 200);
			}
		});
		$(settings.list_items).mouseleave(function() {
			if( $(sublist+'#'+menu_attr+':empty').length > 0 ) {
				$(subnav).slideUp();
			} else {
				clearTimeout(hover_intent);
				hover_intent = setTimeout(function() {
					var test = $(sublist+':hover').length;
					if( test > 0 ) {

					} else {
						if( !$(sublist, subnav).is(':animated') ) {
							$(settings.list_items).removeClass('active');
							$(sublist).hide();
							$(subnav).slideUp();
						}
					}
				}, 200);
			}
		});
		$(subnav).mouseleave(function() {
			if( $(sublist+'#'+menu_attr+':empty').length > 0 ) {
				$(subnav).slideUp();
			} else {
				setTimeout(function() {
					var test = $(object.selector+':hover').length;
					if( test === 0) {
						if( !$(sublist, subnav).is(':animated') ) {
							$(settings.list_items).removeClass('active');
							$(sublist).fadeOut();
							$(subnav).slideUp();
						}
					}
				}, 5);
			}
		});
		return this;
	}; //  END SUBNAV FUNCTION
}(jQuery));
var $ = jQuery.noConflict();
	
	$(document).ready(function() {
		$('.scrollTo').click( function() { 
			var page = $(this).attr('href'); 
			var speed = 750; 
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 
			return false;
		});
		
		$(document).on('scroll', function() {

			if ($(window).width() > 770 ) {
				if ($(this).scrollTop() > 200) {
					$('#up').fadeIn();
					$('#scroll').show();
				} else {
					$('#up').fadeOut();
					$('#scroll').hide();
				}
			} else {
				if ($(this).scrollTop() > 10) {
					$('#up').show();
				} 
			}
		});
		
		$( document ).on( 'keydown', function ( e ) {
			if ( e.keyCode === 40 ) { 
				$('.headercontent .scrollTo').trigger('click');
			} 
		});
		
		$('[data-toggle="tooltip"]').tooltip(); 
		
		$("body").scrollspy({
			target: "#scroll",
			offset: 70
		});
		
		$('[data-spy="scroll"]').each(function(){
			var $spy = $(this).scrollspy('refresh');
		});
		
	});
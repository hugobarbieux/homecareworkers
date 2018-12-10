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

	var twitterShare = document.querySelector('[data-js="twitter-share"]');

	twitterShare.onclick = function(e) {
	  e.preventDefault();
	  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
	  if(twitterWindow.focus) { twitterWindow.focus(); }
	    return false;
	  }

	var facebookShare = document.querySelector('[data-js="facebook-share"]');

	facebookShare.onclick = function(e) {
	  e.preventDefault();
	  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
	  if(facebookWindow.focus) { facebookWindow.focus(); }
	    return false;
	}

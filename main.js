$('.clickme').click(function(){
	if ($(this).find('.hidden').is(":hidden")) {
		$('.hidden').slideUp();
		$('p:not(.hidden p)').css('color', '#4d4d4d');
		$('.caption').css('color', '#fff');
		$('.arrow').css('transform', 'rotate(0deg)');
		$('.arrow').attr('src', 'img/arrow-b.png');
		$('.red').hide();
		$('.grey').show();

		  $(this).find('.hidden').slideDown();
		 
		  $(this).find('p:not(.hidden p)').css({'color': '#c12c42', 
		  									'transition-duration': '0.4s'});
		  $(this).find('.arrow').css({'transform': 'rotate(360deg)',
									'transition-duration': '0.4s'});
		  $(this).find('.arrow').attr('src', 'img/arrow-t.png');
		  $(this).find('.red').show();
		  $(this).find('.grey').hide();
	} else {
		$(this).find('.hidden').slideUp();

		$(this).find('p:not(.hidden p)').css('color', '#4d4d4d');
		$('.arrow').css('transform', 'rotate(0deg)');
		$('.arrow').attr('src', 'img/arrow-b.png');
		$(this).find('.red').hide();
		$(this).find('.grey').show();
		
	}

});



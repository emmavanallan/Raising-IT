$(document).ready(function(){

	//make the carousel work better
	$('a.carouselSlideTitle').each(function(){	
		var imgUrl = $(this).find('img').attr('src');
		$(this).css('background-image',  'url(' + imgUrl + ')');
	});


	//make homepage features images work better
	$('.homeFeature').each(function(){	
		var imgUrl = $(this).find('img').attr('src');
		$(this).css('background-image',  'url(' + imgUrl + ')');
	});


	$('.homeFeature ').wrap('<div class="feature-wrapper"></div>');
	
	//move the Newsletter up a level and wrap it in a container
	$('.NewsletterSign-up').prependTo($('.pageFooterWrapper'));
	$('.NewsletterSign-up').wrap('<div class="newsletter-container"></div>');
	$('.groupSignUpBtn').wrap('<div class="formQuestion"></div>');

	//contact page
	// $('body.contact article.post').wrap('<div class="pageWrapper"></div>');

	//if we are logged in, hide the newsletter sign up form
	if ($("header.pageHeader").find(".adminBar").length > 0){ 
	  $('.newsletter-container').hide();
	}

});
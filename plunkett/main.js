$(document).ready(function(){

	//make the carousel work better
	$('a.carouselSlideTitle').each(function(){	
		var imgUrl = $(this).find('img').attr('src');
		$(this).css('background-image',  'url(' + imgUrl + ')');
	});

	//make the carousel work better
	$('a.carouselSlide').each(function(){	
		var imgUrl = $(this).find('img').attr('src');
		$(this).css('background-image',  'url(' + imgUrl + ')');
	});

	//make homepage features images work better
	$('.homeFeature').each(function(){	
		var imgUrl = $(this).find('img').attr('src');
		$(this).css('background-image',  'url(' + imgUrl + ')');
	});

	$('.homeFeature ').wrap('<div class="feature-wrapper"></div>');
	
	//move the mobile menu button to the right container
	$('.menuMainAlt, #menuMain').prependTo($('header.pageHeader .headerContent'));

	//move the admin menu to the right container
	$('.menuAdminContainer').prependTo($('header.pageHeader .headerContent'));

	//move the Newsletter up a level and wrap it in a container
	$('.NewsletterSign-up').prependTo($('.pageFooterWrapper'));
	$('.NewsletterSign-up').wrap('<div class="newsletter-container"></div>');
	$('.groupSignUpBtn').wrap('<div class="formQuestion"></div>');

	//contact page
	// $('body.contact article.post').wrap('<div class="pageWrapper"></div>');

	//Appeals
	$('.appealActions').appendTo($('.appealWidgetsWrapper'));

	//if we are logged in, hide the newsletter sign up form
	if ($("header.pageHeader").find(".adminBar").length > 0){ 
	  $('.newsletter-container').hide();
	}

	//move comments above form
	$('.commentsListWrapper').prependTo($('.commentForm'));

});
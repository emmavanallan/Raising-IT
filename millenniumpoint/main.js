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

	$('section.carousel').append('<div class="strapline"><h1>Where science, technology and learning come to life</h1></div>');

	$('section.carousel li a.carouselSlideTitle').click(function(e) {
	    e.preventDefault();
	});

	//move the intro to after the features
	$('.homeIntroWrapper').insertAfter($('.homeFeaturesWrapper'));

	//make homepage features images work better
	$('.homeFeature > a').each(function(){	
		var imgUrl = $(this).find('img').attr('src');
		$(this).css('background-image',  'url(' + imgUrl + ')');
	});

	//wrap homepage items
	$('.homeFeature').wrap('<div class="feature-wrapper"></div>');
	$('.homeFeed').wrap('<div class="feed-wrapper"></div>');
	
	//move the mobile menu button to the right container
	$('.menuMainAlt, #menuMain').prependTo($('header.pageHeader .headerContent'));

	//move the admin menu to the right container
	$('.menuAdminContainer').prependTo($('header.pageHeader .headerContent'));

	//move the Newsletter up a level and wrap it in a container
	$('.NewsletterSign-up').prependTo($('.pageFooterWrapper'));
	$('.NewsletterSign-up').wrap('<div class="newsletter-container"></div>');
	$('.groupSignUpBtn').wrap('<div class="formQuestion"></div>');

	//if we are logged in, hide the newsletter sign up form
	if ($("header.pageHeader").find(".adminBar").length > 0){ 
	  $('.newsletter-container').hide();
	}

	//move comments above form
	$('.commentsListWrapper').prependTo($('.commentForm'));

});
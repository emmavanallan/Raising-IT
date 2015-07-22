$(document).ready(function(){

	//put the nav menu in the right container
	$('.menuMainAlt, nav.menuMain').prependTo($('.headerContent'));

	//make the carousel work better

	$('a.carouselSlideTitle').each(function(){	
		var imgUrl = $(this).find('img').attr('src');

		$(this).css('background-image',  'url(' + imgUrl + ')');
	});

	// $('a.carouselSlideTitle').find('img').attr('')
	// .css('background-image',  'url(' + imgUrl + ')');

	//move the homepage intro to the right place
	$('.homeIntroWrapper').insertAfter($('.homeFeaturesWrapper'));

	//move the footer divs to the right container
	$('.footerBox2, .NewsletterSign-up').prependTo($('.pageFooterWrapper'));
	
	$('.footerBox1.NewsletterSign-up').wrap('<div class="newsletter-container"></div>');
	$('.groupSignUpBtn').wrap('<div class="formQuestion"></div>');

	//contact page
	$('body.contact article.post').wrap('<div class="pageWrapper"></div>');

	//if we are logged in, hide the newsletter sign up form
	if ($("header.pageHeader").find(".adminBar").length > 0){ 
	  $('.newsletter').hide();
	}

});
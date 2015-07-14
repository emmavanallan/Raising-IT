$(document).ready(function(){

	//put the nav menu in the right container
	$('.menuMainAlt, nav.menuMain').prependTo($('.headerContent'));

	// add in the social icons
	$('.mainCallToAction ul.socialIcons').replaceWith('<ul class="socialIcons"><li class="helpline"><a href=""><i class="fa fa-envelope-o"></i> helpline@ataxia.org.uk</a></li><li class="phone"><a href=""><i class="fa fa-phone"></i> 0845 644 0606</a></li><li class="fbook"><a href=""><i class="fa fa-facebook"></i> Talk</a></li><li class="twitter"><a href=""><i class="fa fa-twitter"></i> Twitter</a></li></ul>');
	
	//make the carousel work better
	var imgUrl = $('li.carouselSlide a.carouselSlideTitle img').attr('src');
	$('li.carouselSlide a.carouselSlideTitle').css('background-image',  'url(' + imgUrl + ')');

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
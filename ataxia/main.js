$(document).ready(function(){
	$('.menuMainAlt, nav.menuMain').prependTo($('.headerContent'));
	$('.mainCallToAction ul.socialIcons').replaceWith('<ul class="socialIcons"><li class="helpline"><a href=""><i class="fa fa-envelope-o"></i> helpline@ataxia.org.uk</a></li><li class="phone"><a href=""><i class="fa fa-phone"></i> 0845 644 0606</a></li><li class="fbook"><a href=""><i class="fa fa-facebook"></i> Talk</a></li><li class="twitter"><a href=""><i class="fa fa-twitter"></i> Twitter</a></li></ul>');
	$('.homeIntroWrapper').insertAfter($('.homeFeaturesWrapper'));
	$('.footerBox1').prependTo($('.pageFooterWrapper'));

	var imgUrl = $('li.carouselSlide a.carouselSlideTitle img').attr('src');

	$('li.carouselSlide a.carouselSlideTitle').css('background-image',  'url(' + imgUrl + ')');
	//console.log(imgUrl);
});
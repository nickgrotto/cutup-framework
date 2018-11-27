$(document).ready(function(){
	
	$('.home-header').slick({
		infinite: true,
		arrows: true,
		dots: true,
		fade: true,
		prevArrow: $('.home-slider-wrapper .home-prev'),
		nextArrow: $('.home-slider-wrapper .home-next')
	});

});
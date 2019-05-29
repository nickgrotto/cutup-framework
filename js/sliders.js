$(document).ready(function(){
	
	$('.header-slideshow .hero-slider').slick({
		infinite: true,
		arrows: true,
		dots: true,
		fade: true,
		appendDots: $('.header-slideshow .hero-dots'),
		prevArrow: $('.header-slideshow .hero-prev'),
		nextArrow: $('.header-slideshow .hero-next')
	});
	
	$('main .hero-slider').slick({
		infinite: true,
		arrows: true,
		dots: true,
		fade: true,
		appendDots: $('main .hero-dots'),
		prevArrow: $('main .hero-prev'),
		nextArrow: $('main .hero-next')
	});

	$('.events-slider').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.events-slider-wrapper .events-prev'),
		nextArrow: $('.events-slider-wrapper .events-next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});
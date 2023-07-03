$(document).ready(function() {


	$('.promo-slider').slick({
		autoplay: true,
		prevArrow: ' <span class="slick__prev"><i class="icon-arrow-left"></i></span>',
		nextArrow: ' <span class="slick__next"><i class="icon-arrow-right"></i></span>'
	});

	$('.portfolio-body__title').click(function() {
		$($(this)).addClass(".portfolio-body__title_active");
		if($('.portfolio-body__title').hasClass('portfolio-body__title_active')) {
			$('.portfolio-body__title').removeClass('portfolio-body__title_active');
		}
		$($(this)).addClass("portfolio-body__title_active");

	});

	$('.portfolio-body__btn').click(function() {
		$('.portfolio-body__img:nth-child(10)').nextAll('.portfolio-body__img').slideDown(300);
		$('.portfolio-body__btn').hide();
	});

	$('.choose-wrap__top_active').next('.choose-wrap__answer').show();
	
	$('.choose-wrap__top').click(function() {
		if($('.choose-wrap__top').hasClass('choose-wrap__top_active')) {
			$('.choose-wrap__top').removeClass('choose-wrap__top_active').next('.choose-wrap__answer').slideUp(400);
		}
		$($(this)).addClass('choose-wrap__top_active').next('.choose-wrap__answer').slideDown(400);
	});

	$('.choose-wrap__slider').slick({
		autoplay: true,
		dots: true,
		arrows: false
	});

	$('.blog-wrap__slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		slidesPerRow: 2
	});
	$('.blog-wrap__icon_flag').click(function() {
		$($(this)).toggleClass('blog-wrap__icon_flag-active');
	});

	
});
$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.main_slider ul').bxSlider({
	  pagerCustom: '.bx_pager'
	});
	$('.slider_product_wrap ul').bxSlider({
	   minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 316,
	  slideMargin: 20
	});
	$('.slider_color_wrap ul').bxSlider({
	   minSlides: 8,
	  maxSlides: 8,
	  slideWidth: 100,
	  slideMargin: 21
	});
	$('.slider_look_wrap ul').bxSlider({
	  minSlides: 5,
	  maxSlides: 5,
	  slideWidth: 172,
	  slideMargin: 24
	});

	//scroll to
	$('.totop').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-55},800);
		return false;
	});
});
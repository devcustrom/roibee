import Swiper from "swiper";

var swiper = new Swiper('.swiper-container', {
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },preloadImages: false,
  lazy: true
});

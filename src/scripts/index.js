window.$ = window.jQuery = require('jquery');
window.Swiper = require('swiper');


$(document).ready(function () {
var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    initialSlide: 32,
    loop: false,
    centeredSlides: true,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: true,
    uniqueNavElements: false,
    nextButton: '.calendar-arrow-next',
    prevButton: '.calendar-arrow-prev',
})
});

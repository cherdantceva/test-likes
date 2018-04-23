window.$ = window.jQuery = require('jquery');
window.Swiper = require('swiper');


$(document).ready(function () {
var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 7,
    initialSlide: 26,
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
$(function(){
    $('.bike__container-slider').slick({
        arrows: true,/*отключили кнопки next previous*/
        dots: true, /*добавили кнопки 1-n*/
        fade: true, /*плавное переключение, а не резкий слайдер слева на право*/
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.container__slider-item').slick({
        arrows: false,/*отключили кнопки next previous*/
        dots: true, /*добавили кнопки 1-n*/
        fade: true, /*плавное переключение, а не резкий слайдер слева на право*/
        autoplay: true,
        autoplaySpeed: 2000
    });
    
});
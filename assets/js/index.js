import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'

new Swiper('#atom-plugin-preview', {
    grabCursor: true,
    centeredSlides: true,
    preloadImages: false,
    lazy: true,
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

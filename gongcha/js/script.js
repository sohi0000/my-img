$(function () {

    function visual_slide__init() {
        var swiper = new Swiper('#visual .slider-wrap1 .swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                autoplay: 3000,
                renderBullet: function (index, className) {
                    var text = '';

                    if (index == 0) {
                        text = '2021 다이어리 프로모션';
                    } else if (index == 1) {
                        text = '쿠팡이츠 3천원 할인';
                    } else if (index == 2) {
                        text = '배달의민족 2천원 할인';
                    } else if (index == 3) {
                        text = '토피넛&다츠초코 신메뉴';
                    } else if (index == 4) {
                        text = '타로&흑임자 신메뉴';
                    } else if (index == 5) {
                        text = 'NEW 베스트 콤비네이션';
                    }

                    return '<span class="' + className + '">' + text + '</span>';
                },
            },
        });
    }

    visual_slide__init();


    function section1_slide__init() {

        var swiper = new Swiper('#section1 .slider-wrap2 .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                autoplay: 3000,
            },
        });



    }

    section1_slide__init();


    function section3_slider__init() {
        var swiper = new Swiper('#section3 .right .slider-wrap3 .swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
    }

    section3_slider__init();


});

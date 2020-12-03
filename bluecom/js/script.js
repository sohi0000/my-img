$(document).ready(function () {


    new fullpage('#fullpage', {
        autoScrolling: true,
        //        navigation: true,
        //        navigationPosition: 'right',


    });


    function BottomLine__init() {
        var $itemBottomLine = $('.hd-box > .menu > .bottom-line');

        $('.hd-box > .menu > ul > li').mouseenter(function () {
            var $this = $(this);
            var left = $this.position().left;
            var width = $this.width();
            $itemBottomLine.css('left', left);
            $itemBottomLine.css('width', width);
            $itemBottomLine.css('transition', '0.3s');
        });

        $('.hd-box > .menu > ul > li').eq(0).mouseenter();

        $('.hd-box > .menu > ul').mouseleave(function () {
            $itemBottomLine.css('left', '');
            $itemBottomLine.css('width', '');
            $itemBottomLine.css('transition', '1s');
        });
    };

    BottomLine__init();


    function slide1__init() {
        var swiper = new Swiper('#visual .swiper-container', {
            centeredSlides: true,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '#visual .swiper-container .swiper-button-next',
                prevEl: '#visual .swiper-container .swiper-button-prev',
            },
            pagination: {
                el: '#visual .swiper-container .swiper-pagination',
                clickable: true,
            },
            keyboard: true,
        });
    };

    slide1__init();

    function slide2__init() {
        var swiper1 = new Swiper('.section1-wrap .slide-wrap .swiper-container', {
            loop: true,
            speed: 800,
            //            autoplay: {
            //                delay: 5000,
            //                disableOnInteraction: false,
            //            },
            navigation: {
                nextEl: '.section1-wrap .button-next',
                prevEl: '.section1-wrap .button-prev',
            },
            pagination: {
                el: '.section1-wrap .swiper-pagination',
                clickable: true,
            },
            mousewheel: false,
            keyboard: true,
        });
        
        var swiper2 = new Swiper('.section1-wrap .slide-wrap2 .swiper-container', {
            loop: true,
            speed: 800,
            //            autoplay: {
            //                delay: 5000,
            //                disableOnInteraction: false,
            //            },
            navigation: {
                nextEl: '.section1-wrap .button-next',
                prevEl: '.section1-wrap .button-prev',
            },
            pagination: {
                el: '.section1-wrap .swiper-pagination',
                clickable: true,
            },
            mousewheel: false,
            keyboard: true,
        });
        
        swiper1.controller.control = [swiper2];
        
        swiper2.controller.control = [swiper1];
    };

    slide2__init();
    
    
    function slide3__init() {
      var swiper3 = new Swiper('.swiper-container',{
            loop: true,
      });  
        
        
    };
    
    slide3__init();
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});

$(function () {
    var swiper = new Swiper('#visual > .slider-wrap > .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                var text = '';
                
                if ( index == 0 ) {
                    text = 'dd';
                }
                else if ( index == 1 ) {
                    text = 'ff';
                }
                else if ( index == 2 ) {
                    text = 'ff';
                }
                else if ( index == 3 ) {
                    text = 'ff';
                }
                else if ( index == 4 ) {
                    text = 'ff';
                }
                else if ( index == 5 ) {
                    text = 'ff';
                }
                
                return '<span class="' + className + '">' + text + '</span>';
            },
        },
    });

})

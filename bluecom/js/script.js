$(document).ready(function () {


    new fullpage('#fullpage', {
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
            $itemBottomLine.css('transition', '1s');
        });
    }

    BottomLine__init();









});

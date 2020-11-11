$(document).ready(function () {


            $(".hd-tp-right ul li:last-child div").click(function () {
                $(".hd-tp-right ul li:last-child").toggleClass("active");
            });


            $('.slider').slick({

                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                    fade: true,
                    infinite: true,
                    arrows: true,
                    customPaging: function (slick, index) {
                        return '<div class="page-btn"></div>';}

                    });







            });

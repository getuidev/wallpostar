$(document).ready(function () {
    if ($(window).width() >= 1000) {
        $(window).scroll(function () {
            var sticky = $('.topNavBar');
            var slogo = $('.sticky_logo');
                scroll = $(window).scrollTop();
            if (scroll >= 113) {
                sticky.addClass('sticky-header');
                slogo.show();
            } else {
                sticky.removeClass('sticky-header');
                slogo.hide();
            }
        });
    }
    $(".search-icon").click(function () {
        $("#headerSearch").fadeToggle();
    });
    $("#toggleNav").click(function () {
        $("#megaMenu").slideToggle("slow", function () {
            if ($("#megaMenu").is(":visible")) {
                $("body").addClass("openMenu");
            } else {
                $("body").removeClass("openMenu");
            }
        });
    });
    $(".listItems li").click(function () {
        if ($(this).hasClass("active")) {
            $(".listItems li").removeClass("active")
        } else {
            $(".listItems li").removeClass("active");
            $(this).addClass("active");
        }
    });
    setTimeout(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".scrolltop").fadeIn() : $(".scrolltop")
                .fadeOut()
        }), $(".scrolltop").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    }, 500)
});
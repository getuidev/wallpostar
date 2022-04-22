$(document).ready(function () {
    $(window).scroll(function () {
        var sticky = $('.topNavBar'),
            scroll = $(window).scrollTop();
        if (scroll >= 113) {
            sticky.addClass('sticky-header');
        } else {
            sticky.removeClass('sticky-header');
        }
    });
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
});
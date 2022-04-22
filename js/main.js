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
});
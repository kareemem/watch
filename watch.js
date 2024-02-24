let headerHeight = $("header").height();
$(document).ready(function () {
    $("#load").slideUp(function () {
        $("#load").addClass("d-none");
        $("body").css("overflow-y", "scroll");
    });
});
$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > headerHeight) {
        $("#top").fadeIn(500);
    }else{
        $("#top").fadeOut(500);
    }
});
new WOW().init();
$(window).on('load resize', function () {
    var header_height = $('.header').height();
    $('.inside-look-component').css({
        marginTop: header_height
    , });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
$(function () {
    $("#nav").tinyNav();
    $(window).bind('scroll', function () {
        /*if ($(window).scrollTop() > 15) {
            $(' .secoundary_bar').css({
                padding: '20px 0'
            , });
        }
        else {
            $(' .secoundary_bar').css({
                padding: '30px 0'
            , });
        }*/
        /*   scroll fixed nav */
        var headerHeight = $('.header').outerHeight(true);
        var navHeight = $('.navigation').outerHeight(true);
        var navTopHeight = $('.navigation-top').outerHeight(true);
        var navTopOffset = $('.navigation-top').offset().top;
        var scrollDiff = navTopOffset - headerHeight;
        /* if ($(window).scrollTop() > (scrollDiff+navTopHeight)) {
            $('.navigation').addClass('navigation-fixed');
			$('.navigation-top').css('height',navHeight+'px');
        }
        else {
            $('.navigation').removeClass('navigation-fixed');
			$('.navigation-top').css('height','initial');
        } */
        /* if ($(window).scrollTop() > (scrollDiff) && $("#form-component").offset().top + headerHeight + navHeight < scrollPos) {} */
        if ($(window).scrollTop() > (scrollDiff) && $(window).scrollTop() < $("#form-component").offset().top - headerHeight - navHeight) {
            $('.navigation').addClass('navigation-fixed');
            $('.navigation-top').css('height', navHeight + 'px');
        }
        else {
            $('.navigation').removeClass('navigation-fixed');
            $('.navigation-top').css('height', 'initial');
        }
    });
});
//goto form component on click on "READ FULL REPORT"
$(".goto-form-component").click(function (event) {
    event.preventDefault();
    var sectionId = $(this).attr("href");
    var headerHeight = $('.header').outerHeight(true);
    var navHeight = $('.navigation').outerHeight(true);
    var currentSectionOffsetTop = $(sectionId).offset().top - headerHeight;
    //goto related section with animation
    $("html, body").animate({
        scrollTop: currentSectionOffsetTop
    }, 1000);
});
//goto related section based on id of section inside variable "sectionId" as parameter
$(".inside-look-component .navigation ul li a").click(function (event) {
    event.preventDefault();
    var sectionId = $(this).attr("data-section-id");
    //console.log(sectionId);
    //$(".inside-look-component .navigation ul li a").removeClass("active");
    //$(this).addClass("active");
    goToPageSection(sectionId);
});

function goToPageSection(sectionId) {
    var headerHeight = $('.header').outerHeight(true);
    var navHeight = $('.navigation').outerHeight(true);
    var currentSectionOffsetTop = $(sectionId).offset().top - headerHeight - navHeight;
    //goto related section with animation
    $("html, body").animate({
        scrollTop: currentSectionOffsetTop + 5
    }, 1000);
}
/* function goToPageSection(sectionId) {
    var headerHeight = $('.header').outerHeight(true);
    var navHeight = $('.navigation').outerHeight(true);
    var currentSectionOffsetTop = $(sectionId).offset().top - headerHeight - navHeight;
    //goto related section with animation
    if (navigator.userAgent.search("Firefox") > -1) {
        $("html, body").animate({
            scrollTop: currentSectionOffsetTop + 5
        }, 300);
    }
    else {
        $("html, body").animate({
            scrollTop: currentSectionOffsetTop
        }, 300);
    }
} */
$(document).on("scroll", onScroll);
//set navigation active based on content on scrolling
function onScroll(event) {
    var headerHeight = $('.header').outerHeight(true);
    var navHeight = $('.navigation').outerHeight(true);
    var scrollPos = $(document).scrollTop();
    $('.inside-look-component .navigation ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        //console.log($(currLink.attr("href")));
        if (refElement.position().top <= scrollPos + headerHeight + navHeight && refElement.position().top + refElement.height() > scrollPos + headerHeight + navHeight - 90) {
            $('.inside-look-component .navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

////on load top
$(document).ready(function () {
    var url = window.location.href;
    console.log(url);
    if (url.indexOf('#') < 0) {
        window.location.replace(url + "#");
    }
    else {
        window.location.replace(url);
    }
});
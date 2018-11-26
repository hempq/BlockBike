// A galéria scriptje
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

baguetteBox.run('.cards-gallery', {
    animation: 'slideIn'
});


// A collapsible scriptje

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active1");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Görgetés az oldal tetejére
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});


//Hamburger menu
$(document).ready(function () {

    //Hamburger menu lenyitása
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    //Hamburger menu zárodik ha a linkre katintunk
    $('.navbar li a').on("click", function () {
        $('.navbar-toggler').click();
    });

    var menu = $('.navbar.d-xl-none.d-lg-none.mb-4.hamburger');
    var origOffsetY = menu.offset().top;

    function scroll() {

        if ($(window).scrollTop() >= origOffsetY) {

            $(menu).addClass('fixed-top');

        } else {
            $(menu).removeClass('fixed-top');
        }
    }
    document.onscroll = scroll;

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("button-top").style.display = "block";
        } else {
            document.getElementById("button-top").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


});

// Testimonial scriptje

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: true
    });
});

// Lasu görgetés scriptje
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
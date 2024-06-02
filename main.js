$(window).scroll(function(){
    var targetElement = $('.fadein').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein').css('opacity', '1');
        $('.fadein').css('transform', 'translateY(0)');
    }
});

$(window).scroll(function(){
    var targetElement = $('.fadein2').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein2').css('opacity', '1');
        $('.fadein2').css('transform', 'translateY(0)');
    }
});

$(window).scroll(function(){
    var targetElement = $('.fadein3').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein3').css('opacity', '1');
        $('.fadein3').css('transform', 'translateY(0)');
    }
});
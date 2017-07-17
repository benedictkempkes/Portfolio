var main = function (){
    if($(window).width() > 500){
            $('.bannerText').fadeIn(3000);
    }
    $(window).resize(function(){
        if($(window).width() > 500){
            $('.bannerText').fadeIn(3000);
        }else{
            $('.bannerText').fadeOut(3000);
        }
    });
    //navbar
    $('#scrollToContact').click(function(){
        $('html, body').animate({ scrollTop: $(document).height() - $('.footer').height()  }, 1200);
    });
    $('#scrollToProjects').click(function(){
        $('html, body').animate({ scrollTop: $('.banner').height()  }, 1200);
    });
    $('#scrollToAbout').click(function(){
        $('html, body').animate({ scrollTop: $(document).height() - $('.about').height()  }, 1200);
    });
};

$(document).ready(main);
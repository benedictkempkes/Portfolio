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
};

$(document).ready(main);
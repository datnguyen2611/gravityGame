$(document).ready(function () {
   
    if (window.matchMedia('(max-width: 769px)').matches) {
        var flag = false;
        $(".collap_toggle").click(function () {
            console.log('a')
            $(this).toggleClass('activeCollap');
            $(this).each(function () {
                if ($(this).hasClass('activeCollap')) {
                    $(this).children().slideDown('slow', function () {
                        $(this).css("display", "block");
                    });
                    $(this).find(".icon_click").attr("src", "./src/assets/images/icon/up_icon.svg");
                        flag = true;
                } else {
                    $(this).children().not(":first-of-type").slideUp('slow', function () {
                        $(this).css("display", "none");
                    });
                    $(this).find(".icon_click").attr("src", "./src/assets/images/icon/down_icon.svg");
                    flag = false;
                    console.log("true");
                }
                // toggle table js in 767px
            });
        });
    } 

    $('.link_number_table').click(function(){
        $('.link_number_table').removeClass('active_number_bet');
        $('.change_bg').removeClass('shadow_active');
        $('.change_bg').attr('src','./src/assets/images/background/background_gray.svg');
        $(this).addClass('active_number_bet');
       
        if($(this).hasClass('active_number_bet')){
            $(this).find('.change_bg').attr('src','./src/assets/images/background/background_active.svg');
            $(this).find('.change_bg').addClass('shadow_active');
        }else{
            $(this).find('.change_bg').attr('src','./src/assets/images/background/background_gray.svg');
            $('.change_bg').removeClass('shadow_active');
        }
    });
   

    if($(' tbody').height() > 300){
        $('tbody').css({'overflow-y':'scroll','height':'21rem'});
    }else{
        $('tbody').css({'overflow-y':'none','height':'fit-content'}); 
        $('.scroll_bar_table').css('display','none');
    }
});

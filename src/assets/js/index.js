$(document).ready(function () {
  
    if (window.matchMedia('(max-width: 769px)').matches) {
        var flag = false;
        $(".collap_toggle").click(function () {
            $(this).toggleClass('activeCollap');
            $(this).each(function () {
                if ($(this).hasClass('activeCollap')) {
                    // $(this).children().slideDown('slow', function () {
                        $(this).children().css("display", "block");
                        
                    // });
                    $(this).find(".icon_click").attr("src", "./src/assets/images/icon/up_icon.svg");
                        flag = true;
                } else {
                    $(this).children().not(":first-of-type").slideUp('slow', function () {
                        $(this).css("display", "none");
                    });
                    $(this).find(".icon_click").attr("src", "./src/assets/images/icon/down_icon.svg");
                    flag = false;
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
   


    if($('.change_img').attr('data-content') == 'lose'){
        console.log(this)
        $('.change_img').attr('src','./src/assets/images/lose.png');
    }else if($('.change_img').attr('data-content') == 'win'){
        $('.change_img').attr('src','./src/assets/images/win.png');
    }else if($('.change_img').attr('data-content') == 'waiting'){
        
        $('.change_img').attr('src','./src/assets/images/loading.gif');
    }
    $('.popup_status').click(function(){
        $(this).fadeOut('slow');
    });

});

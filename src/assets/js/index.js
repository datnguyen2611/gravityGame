$(document).ready(function () {
    var flag = false;
    $(".collap_toggle").click(function () {
        $(this).toggleClass('activeCollap');
        $(this).each(function () {
            if ($(this).hasClass('activeCollap')) {
                $(this).children().slideDown('slow', function () {
                    $(this).css("display", "block");
                });
                $(this).find(".icon_click").attr("src", "./src/assets/images/icon/up_icon.svg");
                    flag = true;
              
                console.log("false");
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
});

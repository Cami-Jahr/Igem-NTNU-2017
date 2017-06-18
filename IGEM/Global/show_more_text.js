/**
 * Created by Joachim on 16/06/2017.
 */

$(document).on("click", ".dropdown_button", function () {
    $(this).next().slideDown();
    $(this).removeClass("dropdown_button");
    $(this).addClass("dragup_button");
    $(this).children(':nth-child(1)').hide();
    $(this).children(':nth-child(3)').show();

});

$(document).on("click", ".dragup_button", function () {
    $(this).next().slideUp();
    $(this).removeClass("dragup_button");
    $(this).addClass("dropdown_button");
    $(this).children(':nth-child(3)').hide();
    $(this).children(':nth-child(1)').show();
});

$(document).on("click", ".dropdown_collapse", function () {
    var pagePosition = $(window).scrollTop();
    var elementOffset = $(this).parent().prev().offset().top;
    var slideTime = 400;
    $(this).parent().slideUp(slideTime);
    $(this).parent().prev().removeClass("dragup_button");
    $(this).parent().prev().addClass("dropdown_button");
    if(pagePosition > elementOffset){
        $("html,body").animate({scrollTop:elementOffset}, slideTime);
    }
    $(this).parent().prev().children(':nth-child(3)').hide();
    $(this).parent().prev().children(':nth-child(1)').show();
});



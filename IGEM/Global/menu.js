/**
 * Created by Joachim on 16/06/2017.
 */
function slider() {
    if (document.body.scrollTop > 100) //Show the slider after scrolling down 100px
        $('#slider').stop().animate({"margin-left": '0', "margin-top": "100"});
    else
        $('#slider').stop().animate({"margin-left": '-200', "margin-top": "0"}, 100); //200 matches the width of the slider
}


$(window).scroll(function () {
    slider();
});


$(document).ready(function () {
    slider();
});
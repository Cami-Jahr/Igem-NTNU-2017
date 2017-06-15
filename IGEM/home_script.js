/**
 * Created by Joachim on 14/06/2017.
 */
$(function() {
    var div = $('#menu_field');
    var width = div.width();
    console.log(width);
    div.css('height', width * 0.5);
    $(".break_1").css("top",-width * 0.05);

});
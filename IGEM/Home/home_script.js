/**
 * Created by Joachim on 14/06/2017.
 */

var pricture_field_resize = function () {
    var div = $('#picture_field');
    var width = div.width();
    div.css('height', width * 0.5);
    $(".break_header").css("top",(-width * 0.05)+20);
};

window.onresize = pricture_field_resize;


/**
 * Created by Joachim on 12/06/2017.
 */

$(document).ready(function () {
    $(".menu_item").hover(
        function() {
            $(this).find(".menu_column").css("visibility", "visible")
        },
        function () {
            $(this).find(".menu_column").css("visibility", "hidden")
    })
});
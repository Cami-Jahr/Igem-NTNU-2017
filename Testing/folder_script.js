/**
 * Created by Joachim on 13/06/2017.
 */

$(document).ready(function () {
   $("#folder_menu > ul > li").click(function () {
       $(".active").removeClass("active");
       console.log(this);
       $(this).addClass("active");
   });
});
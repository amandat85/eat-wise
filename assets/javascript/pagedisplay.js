$(document).ready(function () {
    $(".wrapper").show();
    $(".dietaryReq").hide();
    $(".results").hide();
    $("#logout").hide();

$("#getStarted").on("click", function (e) {
    console.log(event);
    $(".wrapper").hide();
    $(".dietaryReq").show();
    $("#logout").show();
});
$("#search").on("click", function (e) {
    console.log(event);
    $(".dietaryReq").hide();
    $(".results").show();
    $("#logout").show();

});

});
$(document).ready(function () {
    $(".wrapper").show();
    $(".dietaryReq").hide();
    $(".results").hide();
    $("#logout").hide();

    $(".started").on("click", function (e) {
        $(".wrapper").hide();
        $(".dietaryReq").show();
        $("#logout").show();
    });
    $("#search").on("click", function (e) {
        $(".dietaryReq").hide();
        $(".results").show();
        $("#logout").show();
    });
});
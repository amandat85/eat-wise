document.querySelector("#info").addEventListener("click", function(){
    $("#disclaimer").addClass("show").css("display", "block");
    $("#closeModal").on("click", function () {
      $("#disclaimer").removeClass("show").css("display", "none");
    });
});
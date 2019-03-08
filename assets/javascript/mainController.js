// GLOBAL APP CONTROLLER
var controller = (function(UICtrl, APICtrl, firebaseCtrl) {
    // Functions dealing with main process go here!
})(firebaseController, APIController, UIController);

$(document).ready(function() {
    // Simply calls some sort of init function here like 
    // controller.init();
});

/* We would also potentially have different process we need depending on the webpage
so we could call them with an if/else statement perhaps to detect the current document
and run the apporiate process:

$(document).ready(function() {
    if (it's this login) {
        controller.loginInit();
    } else if (it's the food search page) {
        controller.foodSearchInit();
    }
});
 
This is potentially one solution but can be looked into further
 */
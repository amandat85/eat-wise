var contactPageController = (function() {
    
    function setEventListners() {

        var DOM = UIController.getDOMStrings();

        $(DOM.submitInfoBtn).on("click", function(event) {
            event.preventDefault();

            UIController.getContactInput();
        });

        disclaimerModalController.addModalEventListeners();
    }


    return {
        init: function () {
            setEventListners();
        }
    }
})();

function onUIControllerLoaded() {
    generalFunctions.loadScript("./assets/javascript/disclaimerModal.js", contactPageController.init);
}

function onjQueryLoaded() {
    generalFunctions.loadScript("./assets/javascript/UI.js", onUIControllerLoaded);
}

function loadAllScripts() {
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);
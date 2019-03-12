var foodSearch = (function() {
    
    var searchParams, recipeInfoArray;
    // This would be in the UI controller in reality

    function setUpEventListeners() {
        
        var DOM = UIController.getDOMStrings();

        $(DOM.searchBtn).on("click", performFoodSearch);

        $(DOM.startBtn).on("click", UIController.displaySearchPage);

        $(DOM.infoBtn).on("click", UIController.showModal);

        $(DOM.closeDisclaimer).on("click", UIController.hideModal);
    }

    function processRestaurantList(restaurantArray) {
        UIController.createRestaurantCards(restaurantArray);
    }
    
    function performZomatoSearch(cityid) {
        APIController.zomatoSearch(processRestaurantList, cityid, searchParams.cuisine, searchParams.diet, searchParams.mealType);
    }

    function processRecipeInfo(recipeInfo) {
        recipeInfoArray.push(recipeInfo);
        if (recipeInfoArray.length === APIController.numOfResults) {
            console.log(recipeInfoArray);
            UIController.createRecipeCards(recipeInfoArray);
        }
    }

    function getRecipeInfo(arr) {
        for (var i = 0; i < arr.length; i++) {
            APIController.spoonacularGetRecipeInfo(processRecipeInfo, arr[i]);
        }
    }

    function performFoodSearch() {
        searchParams = UIController.getUserInput();
        UIController.displaySearchResults();
        recipeInfoArray = [];
        APIController.zomatoGetCityNumber(performZomatoSearch, searchParams.city);
        APIController.spoonacularGetRecipeIDs(getRecipeInfo, searchParams.cuisine, searchParams.intolerances, searchParams.mealType, searchParams.diet);
    };

    return {
        init: function() {
            alert('All JS files have been loaded. Main process will execute now');
            UIController.displayMainPage();
            setUpEventListeners();
        }
    }
})();


function onAPIControllerLoaded() {
    alert("API controller loaded");
    generalFunctions.loadScript("./assets/javascript/UI.js", foodSearch.init);
}

function onjQueryLoaded(){
    // do stuff that you can do with jQuery
    alert("jQuery loaded");
    generalFunctions.loadScript("./assets/javascript/apis.js", onAPIControllerLoaded);

}

function loadAllScripts(){
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);
var foodSearch = (function() {
    
    var searchParams, recipeInfoArray;
    // This would be in the UI controller in reality
    function getValues() {
        return {
            city: 'Toronto',
            cuisine: 'Chinese',
            diet: 'vegetarian',
            mealType: 'lunch',
            intolerances: ["seafood", "egg"]
        }
    }
    
    function processRestaurantList(restaurantArray) {
        UIController.createRestaurantCards(restaurantArray);
    }
    
    function performZomatoSearch(cityid) {
        APIController.zomatoSearch(processRestaurantList, cityid, searchParams.cuisine, searchParams.diet, searchParams.mealType);
    }

    function processRecipeInfo(recipeInfo) {
        recipeInfoArray.push(recipeInfo);
        console.log(recipeInfoArray);
        if (recipeInfoArray.length === APIController.numOfResults) {
            UIController.createRecipeCards(recipeInfoArray);
        }
    }

    function getRecipeInfo(arr) {
        for (var i = 0; i < arr.length; i++) {
            APIController.spoonacularGetRecipeInfo(processRecipeInfo, arr[i]);
        }
    }

    return {
        init: function() {
            alert('All JS files have been loaded. Main process will execute now');
            recipeInfoArray = [];
            searchParams = getValues();
            APIController.zomatoGetCityNumber(performZomatoSearch, searchParams.city);
            APIController.spoonacularGetRecipeIDs(getRecipeInfo, searchParams.cuisine, searchParams.intolerances, searchParams.mealType, searchParams.diet);
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
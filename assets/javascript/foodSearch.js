var foodSearch = (function() {
    
    var searchParams, recipeInfoArray, numOfRecipes;

    function setUpEventListeners() {
        
        var DOM = UIController.getDOMStrings();

        $(DOM.searchBtn).on("click", performFoodSearch);

        $(DOM.startBtn).on("click", UIController.displaySearchPage);

        $(DOM.searchAgainBtn).on("click", UIController.displaySearchPage);

        $(DOM.infoBtn).on("click", function() {
			UIController.showModal(DOM.disclaimer);
		});

        $(DOM.closeModal).on("click", function() {
			UIController.hideModal(this);
		});
    }

    function processRestaurantList(restaurantArray) {
        UIController.createRestaurantCards(restaurantArray);
    }
    
    function performZomatoSearch(cityid) {
        APIController.zomatoSearch(processRestaurantList, cityid, searchParams.cuisine, searchParams.diet, searchParams.mealType);
    }

    function processRecipeInfo(recipeInfo) {
        recipeInfoArray.push(recipeInfo);
        if (recipeInfoArray.length === numOfRecipes) {
            console.log(recipeInfoArray);
            UIController.createRecipeCards(recipeInfoArray);
        }
    }

    function getRecipeInfo(arr) {
		numOfRecipes = arr.length;
        for (var i = 0; i < arr.length; i++) {
            APIController.spoonacularGetRecipeInfo(processRecipeInfo, arr[i]);
        }
    }

    function performFoodSearch() {
        if (UIController.checkUserInput()) {
			searchParams = UIController.getUserInput();
			console.log(searchParams);
			UIController.displaySearchResults();
			recipeInfoArray = [];
			APIController.zomatoGetCityNumber(performZomatoSearch, searchParams.city);
			APIController.spoonacularGetRecipeIDs(getRecipeInfo, searchParams.cuisine, searchParams.intolerances, searchParams.mealType, searchParams.diet);
		}
        
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
    generalFunctions.loadScript("./assets/javascript/UI.js", foodSearch.init);
}

function onjQueryLoaded(){
    generalFunctions.loadScript("./assets/javascript/apis.js", onAPIControllerLoaded);
}

function loadAllScripts(){
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);
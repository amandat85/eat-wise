var foodSearch = (function() {
    
    var searchParams, recipeInfoArray, numOfRecipes;

    function setUpEventListeners() {
        
        var DOM = UIController.getDOMStrings();

        disclaimerModalController.addModalEventListeners();

        $(DOM.searchBtn).on("click", validateUserInput);

        $(DOM.startBtn).on("click", UIController.displaySearchPage);

        $(DOM.searchAgainBtn).on("click", UIController.displaySearchPage);

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
            UIController.createRecipeCards(recipeInfoArray);
        }
    }

    function getRecipeInfo(arr) {
		numOfRecipes = arr.length;
        for (var i = 0; i < arr.length; i++) {
            APIController.spoonacularGetRecipeInfo(processRecipeInfo, arr[i]);
        }
    }

    function performFoodSearch(cityid) {
        if (cityid) {
            // If the city the user inputed exists in Zomato execute the rest of the search app
            // 1. We add the search data to local storage and to firebase for future use
            firebaseController.storeSearchParamsLocal(searchParams);
            firebaseController.storeSearchParamsFirebase(searchParams);
            // 2. We have the UI display the results page html
            UIController.displaySearchResults();
            // 3. We create an array to store recipe info and make the two api calls with a 
            // callback function each to handle the results of the calls
			recipeInfoArray = [];
			APIController.zomatoGetCityNumber(performZomatoSearch, searchParams.city);
            APIController.spoonacularGetRecipeIDs(getRecipeInfo, searchParams.cuisine, searchParams.intolerances, searchParams.mealType, searchParams.diet);
		
        } else {
            // If the city the user inputed does not exist in Zomato 
            // we let the user know with a modal
            UIController.showModal("#alertCity");
        }        
    }

    function validateUserInput() {
        // 1. Validate user input
        if (UIController.checkUserInput()) { 
            // 2. Get user input from form
            searchParams = UIController.getUserInput();  
            // 3. Check if string entered into city field is in the Zomato database
            APIController.zomatoGetCityNumber(performFoodSearch, searchParams.city);
		}
    };

    return {
        init: function() {
            UIController.displayMainPage();
            setUpEventListeners();
        }
    }
})();

function onAPIControllerLoaded() {
    generalFunctions.loadScript("./assets/javascript/disclaimerModal.js", foodSearch.init);
}

function onFirebaseControllerLoaded() {
    generalFunctions.loadScript("./assets/javascript/apis.js", onAPIControllerLoaded);
}

function onFirebaseAppLoaded() {
    generalFunctions.loadScript("./assets/javascript/firebase.js", onFirebaseControllerLoaded);
}

function onUIControllerLoaded() {
    generalFunctions.loadScript("https://www.gstatic.com/firebasejs/5.8.5/firebase.js", onFirebaseAppLoaded);
}

function onjQueryLoaded() {
    generalFunctions.loadScript("./assets/javascript/UI.js", onUIControllerLoaded);
}

function loadAllScripts() {
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);
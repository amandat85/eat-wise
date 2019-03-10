function main() {
    alert('All JS files have been loaded. Main process will execute now');

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
    
    function mySecondCallback(restaurantArray) {
        console.log(restaurantArray);
    }
    
    function myCallback(cityid) {
        APIController.zomatoSearch(mySecondCallback, cityid, searchParams.cuisine, searchParams.diet, searchParams.mealType);
    }

    function displayRecipes(arr) {
        if (arr.length) {
            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
        } else {
            console.log("Array had zero length.");
        } 
    }

    var searchParams = getValues();
    APIController.zomatoGetCityNumber(myCallback, searchParams.city);
    //APIController.spoonacularCall(displayRecipes, searchParams.cuisine, searchParams.intolerances, searchParams.mealType, searchParams.diet);
}

function onjQueryLoaded(){
    // do stuff that you can do with jQuery
    alert("jQuery loaded");
    generalFunctions.loadScript("./assets/javascript/apis.js", main);

}

function loadAllScripts(){
    generalFunctions.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", onjQueryLoaded);
}

window.addEventListener("load", loadAllScripts);
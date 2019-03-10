// API CALLS CONTROLLER
var APIController = (function() {
    // All javascript dealing with Zomato and Spoonacular APIs goes here
    var zomatoCuisineArray = [
        {
            "cuisine_id": 152,
            "cuisine_name": "African"
        },
        {
            "cuisine_id": 25,
            "cuisine_name": "Chinese"
        },
        {
            "cuisine_id": 60,
            "cuisine_name": "Japanese"
        },
        {
            "cuisine_id": 67,
            "cuisine_name": "Korean"
        },
        {
            "cuisine_id": 99,
            "cuisine_name": "Vietnamese"
        },
        {
            "cuisine_id": 95,
            "cuisine_name": "Thai"
        },
        {
            "cuisine_id": 148,
            "cuisine_name": "Indian"
        },
        {
            "cuisine_id": 133,
            "cuisine_name": "British"
        },
        {
            "cuisine_id": 135,
            "cuisine_name": "Irish"
        },
        {
            "cuisine_id": 45,
            "cuisine_name": "French"
        },
        {
            "cuisine_id": 55,
            "cuisine_name": "Italian"
        },
        {
            "cuisine_id": 73,
            "cuisine_name": "Mexican"
        },
        {
            "cuisine_id": 89,
            "cuisine_name": "Spanish"
        },
        {
            "cuisine_id": 137,
            "cuisine_name": "Middle Eastern"
        },
        {
            "cuisine_id": 265,
            "cuisine_name": "Jewish"
        },
        {
            "cuisine_id": 1,
            "cuisine_name": "American"
        },
        {
            "cuisine_id": 491,
            "cuisine_name": "Cajun"
        },
        {
            "cuisine_id": 471,
            "cuisine_name": "Southern"
        },
        {
            "cuisine_id": 156,
            "cuisine_name": "Greek"
        },
        {
            "cuisine_id": 134,
            "cuisine_name": "German"
        },
        {
            "cuisine_id": 651,
            "cuisine_name": "Eastern European"
        },
        {
            "cuisine_id": 158,
            "cuisine_name": "Caribbean"
        },
        {
            "cuisine_id": 136,
            "cuisine_name": "Latin American"
        }
    ];

    return {
        zomatoGetCityNumber: function(callback, city) {
            var queryURL, cityID
            queryURL = 'https://developers.zomato.com/api/v2.1/locations?query=' + city;
              $.ajax({
                url: queryURL,
                method: 'GET',
                headers: {
                'user-key':'df75e3e330c13e41814d56e42a276a03'
                },
                success: function(response) {
                    cityID = response.location_suggestions[0].entity_id;
                    callback(cityID);
                }
            });
        },
        zomatoSearch: function(callback, cityID, cuisine, diet, mealType) {
            var cuisineNum;
            for (var i = 0; i < zomatoCuisineArray.length; i++) {
                if (zomatoCuisineArray[i].cuisine_name === cuisine) {
                    cuisineNum = zomatoCuisineArray[i].cuisine_id;
                }
            }
            var queryURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=' 
                            + cityID + '&entity_type=city&q=' + diet + '%20' + mealType 
                            + '&count=10&cuisines=' + cuisineNum;
              $.ajax({
                url: queryURL,
                method: 'GET',
                headers: {
                'user-key': 'df75e3e330c13e41814d56e42a276a03'
                },
                success: function(response) {
                    console.log(response);
                    callback(response.restaurants);
                }
            });
        },
        spoonacularCall: function(callback, cuisine, intolerances, type, diet) {
            var intolerancesString = "";
            for (var i = 0; i < intolerances.length; i++) {
                intolerancesString += intolerances[i];
                if (i !== intolerances.length - 1) {
                    intolerancesString += '%2C'
                }
            }
            if (type !== "breakfast") {
                type = "main+course";
            }
            var queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?cuisine=' 
                            + cuisine + '&' + 'diet=' + diet + '&' + 'intolerances=' + intolerancesString 
                            + '&' + 'type=' + type;
            $.ajax({
                url: queryURL,
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": "fd24c4e1bamsh51cc6ab2c5a5849p1a9263jsn8e0025b690c2"
                },
                success: function(response) {
                    console.log(response);
                    var recipeTitlesArray = [];
                    for (var property in response["results"]) {
                        recipeTitlesArray.push(response["results"][property]["title"]);
                    }
                    console.log(recipeTitlesArray);
                    callback(recipeTitlesArray);
                }
            });
        }
    };
})();

/* Calls a more straighforward search in spoonacular that simply takes any number of keywords
function displayRecipeByNaturalLanguage() {
    //var cuisine = $(this).attr("data-natural");
    var test = "Chinese Vegetarian";
    var replaced_test = test.replace(' ', '+');
    console.log(replaced_test);
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&offset=0&type=main+course&query=" + replaced_test;

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "fd24c4e1bamsh51cc6ab2c5a5849p1a9263jsn8e0025b690c2"
        }
    }).then(function (response) {
        for (var property in response["results"]) {
            //gives the name of the recipe
            //other attributes: id, readyinminutes, servings, image, imageURL
            console.log(response["results"][property]["title"]);
        }
    });
} */
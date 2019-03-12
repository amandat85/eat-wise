// USER INTERFACE CONTROLLER
var UIController = (function () {
    // All javascript dealing with DOM manipulation and the UI goes here
    var DOMStrings = {
        restaurantList: '#restaurant_accordion',
        cuisineGroup: '#cuisine_tags',
        recipeList: '#recipe_accordion',
        ingredientList: '#ingredient_list',
        listItemClass: 'list-group-item',
    }

    return {
        createResultsDivs: function() {
            var $resultsDiv = $(".results").find(".row");
            $resultsDiv.append('<div class="col-md-6"><div class="recipes"><h2>Eat In</h2><div id="recipe_accordion"></div></div></div></div>');
            $resultsDiv.append(' <div class="col-md-6 ml-auto"><div class="restaurants"><h2>Eat Out</h2><div id="restaurant_accordion"></div></div></div>');
        },
        createRestaurantCards: function(restArr) {
            for (var i = 0; i < restArr.length; i++) {
                var resto = restArr[i];
                var tagString = '';

                var html = '<div class="card"><div class="card-header" id="restoHeading' + i + '"><button class="btn btn-link" data-toggle="collapse" data-target="#restoCollapse' + i + '" aria-expanded="true" aria-controls="restoCollapse' + i + '"><h4 class="mb-0">' + resto.name + '</h4></button></div><div id="restoCollapse' + i + '" class="collapse" aria-labelledby="restoHeading' + i + '" data-parent="#restaurant_accordion"><div class="card-body"><h5 class="card-title">Location</h5><p class="card-text">' + resto.address + '</p><p><a href="' + resto.url + '" target="_blank">Click to see restaurant on zomato.com</a></p></div><div class="card-deck"><div class="card border-0"><div class="card-body"><h5 class="card-title">Rating: ' + resto.userScore + '</h5></div></div><div class="card mr-3 border-0"><div class="card-body"><h5 class="card-title">Avg. Cost for Two: ' + resto.avgCost + '</h5></div></div></div><div class="card border-0"><div class="card-body"><p class="card-text text-center" id="cuisine_tags' + i + '"></p></div></div></div></div>';

                $(DOMStrings.restaurantList).append(html);

                for (let j = 0; j < resto.cuisines.length; j++) {

                    tagString += ' ' + resto.cuisines[j];
                    if (j < resto.cuisines.length - 1) {
                        tagString += ' |';
                    }
                }

                $(DOMStrings.cuisineGroup + i).text(tagString);
            }
        },
        createRecipeCards: function(recipeArr) {
            for (var i = 0; i < recipeArr.length; i++) {
                var recipe = recipeArr[i];
                if (!recipe.instructions) {
                    recipe.instructions = 'See instructions on spoonacular.com';
                }
                var html = '<div class="card"><div class="card-header" id="recipeHeading' + i + '"><button class="btn btn-link" data-toggle="collapse" data-target="#recipeCollapse' + i + '" aria-expanded="true" aria-controls="recipeCollapse' + i + '"><img class="card-img ml-auto" src="' + recipe.image + '" alt="Card image cap"><h4 class="mb-0 text-center">' + recipe.title + '</h4></button></div><div id="recipeCollapse' + i + '" class="collapse" aria-labelledby="recipeHeading' + i + '" data-parent="#recipe_accordion"><div class="card-body"><h5 class="card-title">Prep Time: ' + recipe.prepTime + '</h5><h5 class="card-title"></h5><p class="card-text">' + recipe.instructions + '</p><p><a href="' + recipe.url + '">Click to see recipe on spoonacular.com</a></p></div><div class="card-deck"><div class="card ml-3 border-0"><div class="card-body"><h5 class="card-title">Ingredients</h5><ul class="list-group" id="ingredient_list' + i + '"></ul></div></div><div class="card mr-3 border-0"><div class="card-body"><h5 class="card-title">Nutrients</h5><ul class="list-group"><li class="list-group-item">Fat: ' + recipe.fat + '</li><li class="list-group-item">Calories: ' + recipe.cals + '</li><li class="list-group-item">Protein: ' + recipe.protein + '</li></ul></div></div></div></div></div>';

                $(DOMStrings.recipeList).append(html);

                for (var j = 0; j < recipe.ingredients.length; j++) {
                    $('<li>').addClass(DOMStrings.listItemClass)
                        .text(recipe.ingredients[j])
                        .appendTo(DOMStrings.ingredientList + i);
                }
            }
        }
    }

    
})();
/*
$(document).ready(function() {
    var recipe = {
        title: 'Quinoa Salad',
        image: './assets/images/699591-312x231.jpg',
        prepTime: 15 + ' mins',
        ingredients: ['1 cup mushroms', '2 ounces of garlic, minced', '5 asparagus', '4 cups of quinoa'],
        instructions: 'Make some quinoa yo',
        url: 'https://spoonacular.com/simple-fried-rice-with-japanese-seven-spice-36193',
        cals: 300,
        protein: 30 + ' g',
        fat: 12 + ' g'
    }
    UIController.createRecipeCards([recipe]);
}); */

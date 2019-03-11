// USER INTERFACE CONTROLLER
var UIController = (function () {
    // All javascript dealing with DOM manipulation and the UI goes here
    var DOMStrings = {
        restaurantList: '.restaurant_list',
        recipeList: '#recipe_accordion',
        ingredientList: '#ingredient_list',
        listItemClass: 'list-group-item'
    }

    return {
        createRestaurantCards: function(restArr) {
            /*for (var i = 0; i < restArr.length; i++) {
                var resto = restArr[i];
                $('<li>').text(resto).appendTo(DOMStrings.restaurantList);
            } */
        },
        createRecipeCards: function(recipeArr) {
            for (var i = 0; i < recipeArr.length; i++) {
                var recipe = recipeArr[i];
                if (!recipe.instructions) {
                    recipe.instructions = 'See the instructions in the link';
                }
                var html = '<div class="card"><div class="card-header" id="heading' + i + '"><h5 class="mb-0 text-center"><button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '"><img class="card-img ml-auto" src="' + recipe.image + '" alt="Card image cap">' + recipe.title + '</button></h5></div><div id="collapse' + i + '" class="collapse" aria-labelledby="heading' + i + '" data-parent="#recipe_accordion"><div class="card-body"><h5 class="card-title">Prep Time: ' + recipe.prepTime + '</h5><h5 class="card-title"></h5><p class="card-text">' + recipe.instructions + '</p></div><div class="card-deck"><div class="card ml-3 border-0"><div class="card-body"><h5 class="card-title">Ingredients</h5><ul class="list-group" id="ingredient_list' + i + '"></ul></div></div><div class="card mr-3 border-0"><div class="card-body"><h5 class="card-title">Nutrients</h5><ul class="list-group"><li class="list-group-item">Fat: ' + recipe.fat + '</li><li class="list-group-item">Calories: ' + recipe.cals + '</li><li class="list-group-item">Protein: ' + recipe.protein + '</li></ul></div></div></div></div></div>';

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

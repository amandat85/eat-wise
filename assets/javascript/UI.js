// USER INTERFACE CONTROLLER
var UIController = (function() {
    // All javascript dealing with DOM manipulation and the UI goes here
    var DOMStrings = {
        restaurantList: '.restaurant_list'
    }

    return {
        displayRestaurantList: function(restArr) {
            for (var i = 0; i < restArr.length; i++) {
                var resto = restArr[i];
                $('<li>').text(resto).appendTo(DOMStrings.restaurantList);
            }
        },
    }
})();
// API CALLS CONTROLLER
var APIController = (function() {
    // All javascript dealing with Zomato and Spoonacular APIs goes here
    return {
        zomatoGetCityNumber: function(callback, city) {
            var locationUrl, cityID
            locationUrl = 'https://developers.zomato.com/api/v2.1/locations?query=' + city;
              $.ajax({
                url: locationUrl,
                method: 'GET',
                headers: {
                "user-key":"df75e3e330c13e41814d56e42a276a03"
                },
                success: function(response) {
                  cityID = response.location_suggestions[0].entity_id
                  callback(cityID)
                }
            });
        },
        
    }
})();

function myCallback(id) {
    console.log(id);
}
APIController.zomatoGetCityNumber(myCallback, 'Toronto');

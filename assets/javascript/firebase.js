// DATABASE CONTROLLER USING FIREBASE
var firebaseController = (function () {
	// All the firebase code
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyDPHxT4nXafKkjoyGEPlve1lWrELWSBUcI",
		authDomain: "eat-wise-955e8.firebaseapp.com",
		databaseURL: "https://eat-wise-955e8.firebaseio.com",
		projectId: "eat-wise-955e8",
		storageBucket: "eat-wise-955e8.appspot.com",
		messagingSenderId: "154506400505"
	};
	firebase.initializeApp(config);
	var database = firebase.database(); 
	
	return {
		storeSearchParamsFirebase: function (inputChoices) {
			//Push to database
			database.ref("users/").push(inputChoices);
		},
		storeSearchParamsLocal: function (inputChoices) {
			//Local Storage
			localStorage.setItem("meal", inputChoices.mealType);
			localStorage.setItem("intolerance", inputChoices.intolerance);
			localStorage.setItem("diet", inputChoices.diet);
			localStorage.setItem("cuisine", inputChoices.cuisine);
			localStorage.setItem("city", inputChoices.city);
		}
	};
})();
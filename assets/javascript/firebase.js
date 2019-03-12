// DATABASE CONTROLLER USING FIREBASE
var firebaseController = (function() {
  // All the firebase code will be moved inside of here eventually
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

	return {

		writeUserData: function(obj, type) {
		var userId = firebase.auth().currentUser.uid;
		firebase.database().ref('users/' + userId).set({
			username: name,
			email: email
			//some more user data
		});
		}

	};
})();

// no code will actually be run in this file. that will only happen in the main controller file
$(document).ready(function () { 

	UIController.getDOMStrings

// These UI elements will eventually be moved to UI.js
//GET ELEMENTS IN HTML======================================================
var btnSignUp = document.querySelector();
var txtLogin = document.querySelector("#username");
var btnLogin = document.querySelector("#btnLogin");
var txtEmail = document.querySelector("#email");
var txtPass = document.querySelector("#password");
var passLogin = document.querySelector("#loginPassword");

// Event listeners will be moved to main process js file eventually 
// and the function for what happend when an event is triggered will be kept in this file
//TODO: VALIDATE FIELDS & ADD EXTRA FIELDS TO VARIABLES
//LOGIN BUTTON EVENT==============================================
btnLogin.addEventListener("click", function(event) {
    //get email and password
   var login = txtLogin.value;
   console.log(email);
    var loginPass = passLogin.value;
    console.log(loginPass);
    console.log(uEmail);
firebase.auth().signInWithEmailAndPassword(login, loginPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
});
  
//SIGN UP BUTTON EVENT=============================================
btnSignUp.addEventListener("click", function(event) {
    //get email and password
   var email = txtEmail.value;
   console.log(email);
    var pass = txtPass.value;
    console.log(pass);
    //sign in 
   firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
});

//ADD REALTIME LISTENER TO CHANGED STATE=========================== Recommended
firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.
      uEmail = user.email;
       uid= user.uid;
    } else {
      uEmail = "";
      uid = "";
      
    }
    console.log(uEmail, uid); //Tested - has user id and email

});
 //Test not defined - scoping issue?? - Do you need a snapshot of the onAuthStateChanged?
// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
// var user = firebase.auth().currentUser;
// var email, uid;
// if (user != null) {
//   email = user.email;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }

  function writeUserData(favRecipes, favRestaurants) {
    firebase.database().ref('users/' + uid).set({
      // userEmail: uEmail,
      // userID: uid,
      favRecipes: favRecipes,
      favRestaurants: favRestaurants,
    });
  }
  console.log(writeUserData);
  console.log(userEmail)
 //Not pushing anything to the database. userEmail and userID undefined
});

document.querySelector("#search").addEventListener("click", function (event) {
  event.stopImmediatePropagation();

  //VALIDATION FORM===========================================================
  if ($("input:radio[name='mealtime']").is(":checked") === false) {
    $("#alertMeal").addClass("show").css("display", "block");
    $("#closeModalMeal").on("click", function () {
      $("#alertMeal").removeClass("show").css("display", "none");
    });
  }

  else if ($("input:radio[name='mealtime']").is(":checked") === false) {
    $("#alertIntolerance").addClass("show").css("display", "block");
    $("#closeModaln").on("click", function () {
      $("#alertIntolerance").removeClass("show").css("display", "none");
      return;
    });
  }

  else if ($("input:radio[name='diet']").is(":checked") === false) {
    $("#alertDiet").addClass("show").css("display", "block");
    $("#closeModalDiet").on("click", function () {
      $("#alertdiet").removeClass("show").css("display", "none");
      return;
    });

  }
  else if ($("input:radio[name='diet']").is(":checked") === false) {
    $("#alertCuisine").addClass("show").css("display", "block");
    $("#closeModalCuisine").on("click", function () {
      $("#alertCuisine").removeClass("show").css("display", "none");
      return;
    });
  }
});

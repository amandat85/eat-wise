

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



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        // Show the user's information (email ID)
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

    } else {
        // No user is signed in.
        // Show the login input fields for email and pass
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").nodeValue;
    var userPass = document.getElementById("password_field").nodeValue;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    var user = firebase.auth().currentUser;
    console.log(user.email);



}
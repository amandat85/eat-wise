
window.onload=function(){
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


//GET ELEMENTS IN HTML======================================================
var btnSignUp = document.querySelector("#signUp");
var btnLogin = document.querySelector("#btnLogin");
var txtEmail = document.querySelector("#username");
var txtSignupEmail = document.querySelector("#email")
var txtPass = document.querySelector("#password");
//TODO: VALIDATE FIELDS & ADD EXTRA FIELDS TO VARIABLES
//LOGIN BUTTON EVENT==============================================
btnLogin.addEventListener("click", e => {
    console.log(event);
    //get email and password
    var email = txtEmail.value;
    var pass = txtPass.value;
    var auth = firebase.auth();
    //sign in 
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});
//SIGN UP BUTTON EVENT=============================================
btnSignUp.addEventListener("click", e => {
    //console.log(event);
    //get email and password
   // var email = txtEmail.value;
    var pass = txtPass.value;
    console.log(pass);
    var signUp = txtSignupEmail.Value; 
    console.log(signUp)
    var auth = firebase.auth();
    //sign in 
    var promise = auth.createUserWithEmailAndPassword(signUp, pass);
    promise.catch(e => console.log(e.message));
});
//ADD REALTIME LISTENER TO CHANGED STATE===========================
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    }
    else {
        console.log("not logged in");
    }
});
};

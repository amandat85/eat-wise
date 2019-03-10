$(document).ready(function () {
  document.querySelector("#log").addEventListener("click", function(event){
    $("#signup").hide();
    var target = event.target;
    console.log(target);
   
    if (target.id === "log"){
      console.log("yes");
      location.href = "login.html"; 
    }
  });
    //Click on Login in the Nav bar
//Hide sign up portion of the page
//Show Login portion
//Store in local
//Set time out for local
//Set onconnect function - navigator (true or false)
//The switch to firebase to process
  });



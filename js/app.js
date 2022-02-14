var Username = prompt('Hi! what is  your name ?  ');


var UserGender = prompt( 'what is your Gender ?(male or female )');

var UserAge = prompt( ' Please Enter Your Age ');

if(UserAge<=0){
    alert( "the Age you entered less than or equal zero... ")
}

var skipwelcomingmeesage = confirm("Do you want skip welcoming meesage ..")
console.log((skipwelcomingmeesage))

if(skipwelcomingmeesage == false){

    if(UserGender== "male"){
        alert("welcome Mr " + Username );
    }
    else if(UserGender == "female ")
    {
        alert("welcome Ms  " + Username );

    }
    else
    {
        alert("Welcom " + Username)
    }

}
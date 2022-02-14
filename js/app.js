var Username = prompt('Hi! what is your name?');


var UserGender = prompt( 'what is your Gender ?(male or female )');

var UserAge = prompt( 'Please Enter Your Age');

if(UserAge<=0){
    alert( "the Age you entered less than or equa l zero ")
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
        alert("welcome " + Username)
    }

}


var UserQuestion = prompt( 'Now you should answer to three question  press skip to start ');
var Question1 = prompt( 'Are you student ? ');
var Question2 = prompt( 'Are you living in jordan ? ');
var Question3 = prompt( 'Are you living with your family ? ');

var answer = [Question1+Question2+Question3]
console.log(answer);
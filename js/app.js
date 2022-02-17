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


let yourAnswer=[];
let theQuestions=["Are you student ? ","Are you living in jordan ?","Are you living with your family ?"];
function showQuestions(arr) {
    alert("I would like to ask you 3 more questions, this is a (Yes/No) questions , so your answer should be Yes or No , or your answer will save -invalid-");
    for(let i=0;i<arr.length;i++)
    {
        checkAndAddToArray(prompt(arr[i]).toLowerCase()); 
    }
   
};

function checkAndAddToArray(answer) {
    if (answer == "yes" || answer == "no") {
        yourAnswer.push(answer);
    }else{
        yourAnswer.push("invalid")
    }
}

function printArrayItems(arr) {
    for(let i=0;i<arr.length ;i++)
    {
        console.log(arr[i]);
    }
}
showQuestions(theQuestions);
printArrayItems(yourAnswer);
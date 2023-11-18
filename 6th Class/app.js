// ===================== Chapter 4 - Logic Statements =======================

// let rain=true;

// if(rain === true){
//     console.log("Yes it's Raining")
// }else{
//     console.log("It's not Raining. You Are safe.")
// }

// let age = prompt("Enter Your Age:")

// if(Number(age) < 18){
//     console.log("Kids not allowd go play Mario")
// }else{
//     console.log("Welcome!")
// }



// ------------- Practice exercise 4.1 -----------------

// var myVariable = false;
// console.log(myVariable)
// if (myVariable){
//     console.log("Value is TRUE.")
// }
// if(!myVariable){
//     console.log("Value is False.")
// }



// ************** else if statements *****************

// let age = Number(prompt("Enter Your Age:    "));
// let cost = 0;
// let message;
// if (age < 3) {
//  cost = 0;
//  message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//  cost = 5;
//  message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//  cost = 10;
//  message ="A regular ticket costs 10 dollars.";
// } else {
//  cost = 7;
//  message ="A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost "+cost);

// ------------- Practice exercise 4.1 'not from book - grading system' -----------------

var grade=Number(prompt("Enter Your Marks:"));
var message;

if (grade <= 49 ){
    message = "Your Grade is 'F' \nYou are failed. Sorry :("
    console.log(message)
} else if (grade >=50 && grade <= 54){
    message = "Your Grade is 'D' \nYou are just Passed with a bad grade."
    console.log(message)
} else if (grade >=55 && grade <= 64){
    message = "Your Grade is 'C' \nYour are Passed Good Job."
    console.log(message)
}  else if (grade >=65 && grade <= 79){
    message = "Your Grade is 'B' \nYou are Passed very well keep going."
    console.log(message)
}  else if (grade >=80 && grade <= 95){
    message = "Your Grade is 'A' \nYou are Passed and you are a Topper WOW"
    console.log(message)
}   else{
    console.log("Your Grade is 'A' \nYou are Passed and you are officialy a NERD Hurraaaaayyyyyyyy")
}


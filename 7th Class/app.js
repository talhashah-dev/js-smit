// =================== JavaScript Class Seven (remaning of class six) ==================
// -------------------- Conditional ternary operators--------------------------


// let age = 18;
// console.log(age === 18 ? "allow" : age < 18 ? "not allowed") 

// let age = prompt("Enter Your Age:");
// console.log(age == 18 ? "allow" : age < 18 ? "not allowed" : "welcome");

// ---------------- switch statements -------------------

// let age = 16;
// switch(age){
//     case age > 16:
//     console.log("It's greater")
// }

let randomNumber = Math.random();
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);


let input = +prompt("Enter your lucky number:");
switch(true){
    case input === randomNumber
    console.log("Congrats!");
    break;
    default;
    console.log("sorry you lose :(");
}




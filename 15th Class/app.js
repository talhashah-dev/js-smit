// // ========= Chapter 6 Functions ==========

// // Creating a Funtion
// function newFuntion(){
//     alert("Hi from a Funtion!")
// };

// // Calling a Funtion
// newFuntion();

// A simple that takes name of user and greets
// function sayHello(){
//     let name = prompt("What is your name?")
//     console.log("Hello ",name , "!")
// } // creating funtion

// sayHello(); // calling funtion


// ------- Parameters and arguments --------

// ----------------------------- Static

// function tester(name , age){
//     console.log(name)
//     console.log(age)
// }
// tester("Ali", 19);

// ---------------------------- Dyamic

// function tester(name , age){
//     console.log(name)
//     console.log(age)
// }

// let name = prompt("Enter your name:")
// let age = prompt("Enter your age:")

// tester(name, age);


// ----------------- Return in functions


// ---------------- Practice exercise 6.1
// function addNumber(){
//     let 

// }


// ---------------- Practice exercise 6.2
// let words = [
//     "Smart",
//     "Cheetah",
//     "Insaan"
// ];

// function askName(name){
//     // let name = prompt("Enter your name:")
//     let randomNumber = Math.floor(Math.random() * words.length)
//     console.log(name , words[randomNumber])
// }
// askName(prompt("Enter your name:"));


// -------------- Arrow function
// let addNumber = (x , y) => console.log(x + y);
// addNumber(2, 5);


// -------------- Practice exercise 6.4
// let array = [];

// function addTwoNumbers(param1, param2) {
//     return param1 + param2
// }  
// for (let i = 0; i < 10; i++) {
//     let value1 = i * 5;
//     let value2 = i * i;
//     let response = addTwoNumbers(value1, value2);
//     array.push(response)
// }

// console.log(array)



// ------------ Variable scope in functions

// function testAvailability(x) {
//  console.log("Available here:", x);
// }
// testAvailability("Hi!");
// console.log("Not available here:", x);



// -------- Immediately invoked function expression
// (function () {
//     console.log("IIFE!");
// })();

// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
//    }
//    getRecursive(3);
   

// --------- Practice exercise 6.6

// function calculateFactorial(n) {
//     console.log(n)
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * calculateFactorial(--n);
//     }
// }
// let result = calculateFactorial(7);
// console.log(result); 


// -------- Nested functions

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//     }
//    }
//    doOuterFunctionStuff(2);
   

// --------- Anonymous functions

// function doingStuffAnonymously() {
//     console.log("Not so secret though.");
//    }
   

// --------- Function callbacks
// function sayHello(){
//     let name = prompt("What's your name?")
//     console.log("Hi" , name + "!")
// }

// sayHello();
// sayHello();
// sayHello();


for (let i=0; i<3; i++){
    let name = prompt("اسم شما چیست؟")
    console.log("!" + "سلام" , name)
};


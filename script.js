// "use strict";

// ----------------foreach - loop

// let array = [
//     "red",
//     "blue",
//     "black",
//     "pink",
//     "yellow",
//     "green"
// ];

// function checkItem(item , index){
//     let randomColor = Math.floor(Math.random() * array)
//     console.log(item , index)
// };

// array.forEach(checkItem);

// --------------------IIFE - 
// (function () {
//     console.log("IIFE!");
// })();
   

// ---------------Chapter 12 Intermediate JavaScript


// ----------------REGEX - Regular expressions

// let text = "I love JavaScript!";
// console.log(text.match(/javascript/)); // this will not match because of case senctive
// console.log(text.match(/javascript/i)); // by putting 'i' end of slash it will ignore case senctive


// let text = "A";
// console.log(text.match(/[a-z-0-9]/i));

// ----------- Searching and replacing strings using REGEX
// let text = "Coding is fun. Coding opens up a lot of opportunitie";
// console.log(text.replace("Coding", "JavaScript"));
// console.log(text.replace(/Coding/g, "JavaScript"));

// -----Practice exercise 12.1
// let output = document.getElementById("output");
// let sText = document.getElementById("sText");
// let rText = document.getElementById("rText");
// document.querySelector("button").addEventListener("click" , lookup)

// function lookup(){
//     let s = output.textContent;
//     let rt = rText.value;
//     const re = new RegExp(sText.value, "gi");
//     let newValue = s.replace(re, rt);
//     output.textContent = newValue;
// };


// ----------------JavaScript hoisting
// x = 5;
// console.log(x);
// var x;

// ----------------Using strict mode

// "use strict"; // it change javascript mod to strick
function sayHi() {
    greeting = "Hello!"; // variable not declared but it will still logs
    console.log(greeting);
};
sayHi();



// ----------------Debugging






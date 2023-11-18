// // ========= Chapter 8 Built-In JavaScript Methods ==========

// ------- Creating dates
// let currentDateTime = new Date(1000);
// console.log(currentDateTime);

// ------- Methods to get and set the elements of a date
// let d = new Date();
// console.log(d)
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());
// console.log("Time:", d.getHours());
// console.log("Time:", d.getMinutes());
// console.log("Time:", d.toLocaleTimeString());
// console.log("Time:", d.toLocaleDateString());

// let hour =  d.getHours();
// let minutes =  d.getMinutes();
// let seconds =  d.getSeconds();
// console.log("current time is = " + hour + ":" +  minutes +  ":" + seconds)

// ----------- Practice exercise 8.7

// let date = new Date('2050/10/5')
// console.log(date)
// let months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];
// // console.log(months)

// let day = date.getDate();
// let year = date.getFullYear();
// let month = date.getMonth();

// const monthName = month[9];
// console.log(monthName);

// -------- Solved
// const date = new Date('2023-10-05');
// const monthNames = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const day = date.getDate();
// const year = date.getFullYear();
// const monthIndex = date.getMonth();

// const monthName = monthNames[monthIndex];
// console.log(monthName);

// ----------- Converting a string to an array
// let result = "Hello_JavaScript";
// let arr_result = result.split("_");
// console.log(arr_result);

// ----------- Converting an array to a string
// let letters = ["Hello", "Javscript", "!"];
// let x = letters.join();
// console.log(x);

// ------------ Working with index and positions
// let poem = "Roses are red, violets are blue, if I can do JS, the"
// let index_re = poem.indexOf("re");
// // console.log(index_re);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// ----------- Slice Method
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,6);
// console.log("1:", substr1);
// console.log("2:", substr2);

// ----------- Replace Method
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Ali");
// console.log(new_hi);

// ------------ Uppercase and lowercase
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// ----------- Title Case
// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

// ----------------------- Practice exercise 8.4
// let mainText = "My nAme iS aLi";

// ----------------------- Practice exercise 8.5
// let string = "I love JavaScript";
// string = string.toLowerCase();
// let vowels = ["a","e","i","o","u"];

// for(let i=0;i<vowels.length;i++){
//     string = string.replaceAll(vowels[i],i)
// }
// console.log(string)

// ------------------- Specifying a number of decimals
// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x,typeof x)
// console.log(newX,typeof newX)

// ------------------- Finding the highest and lowest number
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(highest);
// console.log(lowest);

// ------------------- Square root
// let result = Math.sqrt(64);
// console.log(result);

// ------------------- Power
// let result2 = Math.pow(2, 3);
// console.log(result2);

// ----------------- Decimal into integer with round of
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// ---------------- Practice exercise 8.6

// let piValue = Math.PI
// console.log(piValue)

// console.log(Math.ceil(5.7))
// console.log(Math.floor(5.7))
// console.log(Math.round(5.7))

// console.log(Math.random())

// let a = Math.floor(Math.random()*10);
// console.log(a);
// let b = Math.floor(Math.random()*10);
// console.log(b);
// let c = Math.floor(Math.random()*100);
// console.log(c);

// function genrateRandomNum(min,max){
//     return Math.floor(Math.random) * (min - max +1)
// };

// for(let i=0;i<100;i++){
//     genrateRandomNum(Math.floor(Math.random()*100));
// };

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// ------------------- Mapping the values of an array
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

// ------------------ Practice exercise 8.2

// let friends = [
//     "Ali", "Mustafa", "Mustafa","Abdullah","Baran","Haider"
// ];

// console.log(friends)


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(num) {
//   return num * 2;
// });
// const doubledNumbersArrow = numbers.map(num => num * 2);
// console.log(doubledNumbersArrow);




// const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"]
// const arr2 = arr.filter((element,index)=>{
//  const ele2 = element.substring(0, 2);
//  return (ele2 == "hi");
// });
// console.log(arr2);










// ============== Javascript Class Nine ===================

// array[1] = "banana";
// array.push("orange")
// console.log(array)
// array.splice(1,2,"orange" , "kiwi" , "pineapple")
// console.log(array)
// array.splice(2,0,"mango")
// let array1 = ["Milk" , 2 , "apples"];
// let array2 = ["orange" , true , "pineapple"];
// let mergeArray = array1.concat(array2)

// console.log(array1)
// console.log(array2)
// console.log(mergeArray)
// mergeArray.pop();
// console.log(mergeArray)
// mergeArray.splice(2,4)
// console.log(mergeArray)

// let array= ["Milk" , 2 , "apples"];
// array.shift();
// console.log(array)

// let array= ["Milk" , 2 , "apples"];
// array.unshift("zubair");
// console.log(array)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];

// console.log(names);

// names.sort();

// console.log(names)

// let ages = [18, 72, 33, 56, 40];
// console.log(ages)

// ages.sort();

// console.log(ages)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];

// console.log(names);
// names.reverse();

// console.log(names)








// ---------------------------------------------------------------

// arr = [ "Milk", "Bread", "Apples"];
// // console.log("Length of Items:", arr.length)
// arr[1] = "Bananas";

// console.log(arr)


// --------- splice to add value in Specific Positon in Array ----------
// arr.splice(2, 0, "Cherry")
// console.log(arr)
// arr.splice(1, 2, "Orange")
// console.log(arr)


// arr1 = [1,2,3];
// arr2 = [3,4,5];
// // console.log(arr1)
// // console.log(arr2)
// let mergeArrays = arr1.concat(arr2)
// console.log(mergeArrays)

// ------------ Deleting items in Array -------------------

// mergeArrays.pop();
// console.log(mergeArrays)

// ------------ Deleting items in Array -------------------

// let arr = [1,2,3];
// arr.shift();
// console.log(arr)

// let arr = [1,2,3];
// arr.unshift(0);
// console.log(arr)


// ---------- Sorting ---------------------

// let ages = [25 , 12 ,26 , 18 , 33, 56]
// console.log(ages)
// ages.sort()
// console.log(ages)
// ages.reverse()
// console.log(ages)



// // ---------- Practice exercise 3.2 -----------------

// let shoppingList;
// shoppingList = ["Milk", "Bread", "Apples"];
// shoppingList.splice(1,1, "Bananas" , "Eggs")
// shoppingList.pop()
// console.log(shoppingList)
// shoppingList.sort()
// // --------------finding position of a item in array with 'indexOf()'
// let indexOfMilk = shoppingList.indexOf("Milk")
// console.log(indexOfMilk)
// shoppingList.splice(1,0, "Carrots" , "Lettuce")
// console.log(shoppingList)
// let newShoppingList = ["Juice" , "Pop"]
// let lastItem = newShoppingList.lastIndexOf(   )
// console.log(indexOfMilk)
// let finalShoppingList = shoppingList.concat(newShoppingList);
// console.log(finalShoppingList)

// let names = ["ali","ahmed","jamal","pari","james"]
// let indexOf = names.indexOf("ahmed")
// let lastName = name.lastIndexOf("james")
// console.log(names)
// console.log(indexOf)
// console.log(lastName)


// let arrOfArrays2 = [1, 2, 3]
// console.log(arrOfArrays2[1])

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(arrOfArrays2)
// console.log(arrOfArrays2 [1])
// console.log(arrOfArrays2 [1][2])
// console.log(arrOfArrays2 [1] , arrOfArrays2[2])

// let arrOfArrays2= [
//     [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
//     [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
//     [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, "Ali", 9 ] ]
// ]
// console.log(arrOfArrays2 [2][2][1])


// let values = [[1 , 2 , 3], [1 , 2 , 3] , [1 , 2 , 3]];
// console.log(values)
// console.log(values[0][2])


// ==================== Objects in JavaScript =======================


// let dog = { dogName: "JavaScript",
//  weight: 2.4,
//  color: "brown",
//  breed: "chihuahua",
//  age: 3,
//  burglarBiter: true
// };
 
// console.log(dog.dogName , dog.age , dog.breed)


// ------------ Updating objects -------------


// let dog = { dogName: "JavaScript",
//  weight: 2.4,
//  color: "brown",
//  breed: "chihuahua",
//  age: 3,
//  burglarBiter: true
// };
// console.log(dog.dogName)
// dog["dogName"] = "Chocho";
// console.log(dog.dogName)
// dog.dogName = "Chocho";
// dog.dogName = "Shit";
// console.log(dog.dogName)

// ---------------- Practice exercise 3.4 -----------------------

// let myCar = {
//     brand : "BMW",
//     color : "black",
//     model : 2023,
// }

// let color = "blue";

// myCar.forSale=true;

// console.log(myCar)
// // console.log("Cars Brand is:" ,myCar.brand ," and ", "Car Model is:" , myCar.model)
// console.log("Cars Brand is:" ,myCar.brand ," and ", "Car Model is:" , myCar.model , "is it for sale: ", myCar.forSale)


// ------------------ Objects in objects ----------------------

// let company = { companyName: "Healthy Candy",
//  activity: "food manufacturing",
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
// };

// console.log(company.address.number)



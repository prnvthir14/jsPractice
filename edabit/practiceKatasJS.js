//Create a function that takes the age and return the age in days.

// function calcAge () {}

// const calcAge = (age) => {
//   return age * 365;
// };

// console.log("calcAge(65)", calcAge(65));
// console.log("---");
// console.log("calcAge(0)", calcAge(0));
// console.log("---");
// console.log("calcAge(20)", calcAge(20));

// //Write a function that returns the string "something" joined with a space " " and the given argument a.

// const somethingString = (string) => {

//   return `something ${string}`

// }

// console.log(somethingString("is better than nothing"))
// console.log('1`````````````````````````````````````')
// console.log(somethingString("Bob Jane"))
// console.log('1`````````````````````````````````````')
// console.log(somethingString("something"))

//Write a function that returns the string "something" joined with a space " " and the given argument a.

// const addition = (a,b) => {

//   return (a+b)

// }

// console.log(addition(3,2))
// console.log('1`````````````````````````````````````')
// console.log(addition(-3,-6))
// console.log('1`````````````````````````````````````')
// console.log(addition(7,3))

//////////////////////inter

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// const addUp = (num) => {
//   let sumToReturn = 0;
//   for (let i = 0; i <= num; i++) {
//     sumToReturn += i;
//   }
//   return sumToReturn;
// };

// console.log(addUp(4));
// console.log("1`````````````````````````````````````");
// console.log(addUp(13));
// console.log("1`````````````````````````````````````");
// console.log(addUp(600));

// The left shift operation is similar to multiplication by powers of two.
// Sample calculation using the left shift operator (<<):
// shiftToLeft(10,3) = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// const shiftToLeft = (x, y) => {
//   let returnVal = 0;

//   let numToBeSquaredSquared = 2 ** y;

//   returnVal = x * numToBeSquaredSquared;

//   return returnVal;
// };

// console.log(shiftToLeft(5, 2))
// console.log(shiftToLeft(10, 3))
// console.log(shiftToLeft(-32, 2))
// console.log(shiftToLeft(-6, 5))
// console.log(shiftToLeft(12, 4))
// console.log(shiftToLeft(46, 6))

// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// function canNest(arr1, arr2) {
//   //check: arr1's min is greater than arr2's min && arr1's max is less than arr2's max.

//   //method; 1 not using any built in methods

//   //first need to get min value in arr 1 and arr 2
//   let arr1min = Infinity;
//   let arr2min = Infinity;

//   let arr1max = -Infinity;
//   let arr2max = -Infinity;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] < arr1min) {
//       arr1min = arr1[i];
//     }

//     if (arr1[i] > arr1max) {
//       arr1max = arr1[i];
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < arr2min) {
//       arr2min = arr2[i];
//     }

//     if (arr2[i] > arr2max) {
//       arr2max = arr2[i];
//     }
//   }
//   //console.log(`${arr1min} > ${arr2min} && ${arr1max} < ${arr2max}`)
//   //check: arr1's min is greater than arr2's min && arr1's max is less than arr2's max.
//   if (arr1min > arr2min && arr1max < arr2max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log("------------------------------");
// console.log(canNest([3, 1], [4, 0]));
// console.log("------------------------------");
// console.log(canNest([9, 9, 8], [8, 9]));
// console.log("------------------------------");
// console.log(canNest([1, 2, 3, 4], [2, 3]));

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order. [min, max]
// function minMax(arr) {
//   // console.log('hi1')
//   let returnArr = [Infinity, -Infinity];

//   let stillLoop = true;
//   //counter
//   let i = 0;
//   while (stillLoop) {
//     //check current number against current min/max
//     if (arr[i] < returnArr[0]) {
//       //check if lower than current min and set if so
//       returnArr[0] = arr[i];
//     } else if (arr[i] > returnArr[1]) {
//       //check if higher than current max and set if so
//       returnArr[1] = arr[i];
//     }

//     //controller for loop to keep running or not
//     if (i <= arr.length) {
//       i++;
//       stillLoop = true;
//     } else {
//       stillLoop = false;
//     }
//   }

//   return returnArr;
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// // console.log("---------------");
//  console.log(minMax([2334454, 5]));
// // console.log("---------------");
// // console.log(minMax([1]));

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// const largestSwap = (num) => {
//   //we have num, we need to invert and store it and then compare num against numInverted
//   //can loop through and revese num?
//   //dont think indexing number is possible..

//   let numInverse =
//     parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

//   if (num >= numInverse) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(largestSwap(27));
// console.log(largestSwap(53));
// console.log(largestSwap(99));

//Create a function which returns the number of true values there are in an array.

// const countTrue = (arr) => {
//   //all items of array are either true or false
//   //loop through array, if true, update counter

//   //return 0 if arr.length === 0

//   let countTrueVals = 0;

//   if (arr.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//       countTrueVals++;
//     } else {
//       //do nothing
//     }
//   }

//   return countTrueVals;
// };

// console.log(countTrue([true, false, false, true, false]));

// console.log(countTrue([false, false, false, false]));

// console.log(countTrue([]));

//Number of Squares in an N * N Grid

// const numberSquares = (n) => {
//   let number = 0;
//   //start by adding n**n, (n-1)**(n-1)

//   for (let i = n; i > 0; i--) {
//     number += i ** 2;
//   }

//   return number;
// };

// console.log(numberSquares(4));

//What's Hiding Amongst the Crowd?
//A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// const detectWord = (str) => {
//   //have a str with lower and uppercase chars. The lowerCase chars make up a word we need to return
//   let lowerCaseWord = "";

//   //need to loop through str, everytime we get to a lowercase char, add it to our return var

//   for (char of str) {
//     //char = each character in string

//     //need to check if the current char is lowerCase or not
//     //if lower-case; add that char to lowerCaseWord
//     //otherwise do nothing
//     if (char === char.toLowerCase()) {
//       lowerCaseWord += char;
//     } else {
//       //do nothing
//     }
//   }

//   //return lowerCaseWord
//   return lowerCaseWord;
// };

// console.log(detectWord("UcUNFYGaFYFYGtNUH"));
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

//Create a function that takes two arrays and insert the second array in the middle of the first array.
// function tuckIn(arr1, arr2) {

//   //need middle index of arr 1
//   let middleIndexArr1 = Math.floor(arr1.length/2);
//   arr1.splice(middleIndexArr1,0, ...arr2);

//   return arr1

// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// step - return
// 1 - 6
// 2 - 11
// 3 - 16

// function matchHouses(step) {
//   // looks like it is step*5+1
//   //returns # of peices required for a given step
//   if (step === 0) {
//     return 0;
//   } else {
//     return step * 5 + 1;
//   }
// }

//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// const toArray = function (objToConvert) {
//   const reutrnArray = [];

//   if (Object.keys(objToConvert).length === 0) {
//     return reutrnArray;
//   } else {
//     //want to take an object,
//     //FOR EACH KVPAIR,  we want to create another array
//     // where the first element = key and every other element = values
//     for (key in objToConvert) {
//       // console.log(Object.keys(objToConvert).length)
//       let arrayToAdd = [key, objToConvert[key]];
//       reutrnArray.push(arrayToAdd);
//     }
//     return reutrnArray;
//   }
// };

// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));

// const sortDrinkByPrice = function (drinks) {
//   if (Object.keys(drinks).length === 0) {
//     return [];
//   } else {
//     console.log("hi");
//     // drinks.sort(function (a, b) {
//     //   return a.as - b.price;
//     // });

//     function reduce(a, b) {
//       return a.price - b.price;
//     }

//     drinks.sort(reduce);
//   }
// };

// drinks = [
//   { name: "lemonade", price: 50 },
//   { name: "lime", price: 10 },
// ];

// console.log(sortDrinkByPrice(drinks));

// const concat = function (listOfArr) {
//   let returnArr = [];

//   //takes n number of arrays and joins them together
//   for (let i = 0; i < listOfArr.length; i++) {
//     console.log(listOfArr[i]);
// 0  }
//   return returnArr
// };

// concat([1, 2, 3], [4, 5], [6, 7])
// ➞ [1, 2, 3, 4, 5, 6, 7]

// const changeEnough = function (change, amountDue) {
//   let totalSumInPocket = 0;
//   if (change.length === 0) {
//     return false;
//   } else {
//     //want to check if we have enough pocket change for an item
//     for (let i = 0; i < change.length; i++) {
//       switch (i) {
//         case 0:
//           // console.log('0')
//           //this is the quarters
//           let valOfQuarters = change[i] * 25;
//           i++;
//           // console.log('valOfQuarters',valOfQuarters)
//           totalSumInPocket += valOfQuarters;

//         case 1:
//           // console.log('1')
//           //this is the quarters
//           let valOfDimes = change[i] * 10;
//           i++;
//           // console.log('valOfDimes',valOfDimes)
//           totalSumInPocket += valOfDimes;

//         case 2:
//           // console.log('2')
//           //this is the quarters
//           let valOfNickels = change[i] * 5;
//           i++;
//           // console.log('valOfNickels',valOfNickels)
//           totalSumInPocket += valOfNickels;

//         case 3:
//           // console.log('3')
//           //this is the quarters
//           let valOfPennies = change[i] * 1;
//           i++;
//           // console.log('valOfPennies',valOfPennies)
//           totalSumInPocket += valOfPennies;
//       }
//     }

//     // console.log("totalSumInPocket", totalSumInPocket);
//     if (totalSumInPocket >= (amountDue * 100)) {
//       //you can afford the item
//       return true;
//     } else {
//       //you cant
//       return false;
//     }
//   }
// };

// console.log(changeEnough(([30, 40, 20, 5], 12.55)));
// console.log((30*25)+(40*10)+(20*5)+(5*1))
// Test.assertEquals(changeEnough([2, 100, 0, 0], 14.11), false);
// Test.assertEquals(changeEnough([0, 0, 20, 5], 0.75), true);
// Test.assertEquals(changeEnough([30, 40, 20, 5], 12.55), true);
// Test.assertEquals(changeEnough([10, 0, 0, 50], 13.85), false);
// Test.assertEquals(changeEnough([1, 0, 5, 219], 19.99), false);
// Test.assertEquals(changeEnough([1, 0, 2555, 219], 127.75), true);
// Test.assertEquals(changeEnough([1, 335, 0, 219], 35.21), true);

// const whichIsLarger = function (f, g) {
//   const resultFromF = f();
//   const resultFromG = g();

//   if (resultFromF > resultFromG) {
//     return "f";
//   } else if (resultFromG > resultFromF) {
//     return "g";
//   } else {
//     return "neither";
//   }
// };

// console.log(whichIsLarger(() => 5, () => 10))

// function potatoes(str,search) {
//   var patt1 = /search/g;
//   var result = str.match(patt1);
//   return result.length;
// }

// console.log(potatoes("potatoapple"));

// Create a function that takes two arrays and insert the second array in the middle of the first array.

// const tuckIn = function (arr1, arr2) {

//   // let start = [[...arr1.splice(0)][0]];

//   let start = arr1[0];
//   let end = arr1[1];
//   // console.log("start", start);
//   // console.log("end", end);
//   // start.push(arr2);
//   // let end = [[...arr1]];
//   // console.log("end", end);
//   let returnArr = [start, ...arr2, end];

//   return returnArr;
// };

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

function bitwiseAND(n1, n2) {
  console.log(toString(2));
}

bitwiseAND(7,12)
// console.log(bitwiseAND(7,12))


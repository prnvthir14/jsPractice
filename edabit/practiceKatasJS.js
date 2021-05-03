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

// function bitwiseAND(n1, n2) {
//   console.log(toString(2));
// }

// bitwiseAND(7,12)
// // console.log(bitwiseAND(7,12))

// function concat(...args) {
//   let x = [...args];

//   let y = [];

//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x[i].length; j++) {
//       y.push(x[i][j]);
//     }
//   }
//   return y;
// }

// console.log(concat([1, 2], [3, 4]));

// const isFirstSuperior = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > arr2[i]) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(
//   isFirstSuperior(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]))
// );
// Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false)

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// const triangle = function (n) {
//   //take n  {1, 2,   3,  4,    5,  6}
//   //algo    {n, n+1, (n-1)n, 2(n+2), (n-2)n, 3(n+1)}
//   //return  {1, 3,   6,  10,   15, 21}

//   if (n === 1) {
//     return 1;
//   } else {
//     if (n % 2 === 0) {x
//       return (n * (n + 1))/2;
//     } else if (n % 2 === 1) {
//       return n * (Math.round(n/2))
//     }
//   }
// };

// console.log(triangle(215));

// const derivative = function (b, m) {
//   let derivativeValue = 0;
//   //f(x)=x^b

//   //need to differenatate f(x)
//   derivativeValue = b * m ** (b - 1);

//   return derivativeValue;
// };
// console.log(derivative(4, -3));

// const tetra = (n) => {
//   //    n = [1, 2, 3,  4,  5,  6,  7,  8,   9,   10]
//   // varl = [1, 4, 10, 20, 35, 56, 84, 120, 165, 220]
//   // algo = [n ,2n,3n+1,5n, 7n, 9n+2, 12n  ]

//   return (n * (n + 1) * (n + 2)) / 6;
// };

// console.log(tetra(6))

// const arrayOfMultiples = (num, length) => {
//   let returnArr = [];

//   for (let i = 0; i < length; i++) {
//     returnArr.push(num*(i+1));
//   }

//   return returnArr;
// };

// console.log(arrayOfMultiples(17,6))

// const keysAndValues = (obj) => {
//   //get keys in 1 arr and values in another and both in the return arr

//   let keys = [];
//   let values = [];

//   for (let key in obj) {
//     keys.push(key);
//     values.push(obj[key]);
//   }

//   return [keys, values]
// };

// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

//Write a function that converts an object into an array of keys and values.

// const objectToArray = function (obj) {
//   //take obj, create subArray = key + val
//   //return array of all subArray
//   let subArray = [];
//   let reutrnArray = [];
//   for (let key in obj) {
//     // console.log(key)
//     subArray.push(key);
//     subArray.push(obj[key]);
//     reutrnArray.push(subArray);
//   }
//   // console.log(subArray)

//   return reutrnArray;
// };

// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }))

// const intWithinBounds = (n, lower, upper) => {
//   console.log(n, lower, upper);
//   if (Number.isInteger(n)) {
//     if (Number(n) >= Number(lower) && Number(n) < Number(upper)) {
//       return true;
//     } else {
//       return false;
//     }
//   }else {
//     return false
//   }
// };

// console.log(intWithinBounds(4.5, 3, 8));

// Test.assertEquals(intWithinBounds(4.5, 3, 8), false)
// Test.assertEquals(intWithinBounds(6.3, 2, 10), false)
// Test.assertEquals(intWithinBounds(0, 0, 1), true)
// Test.assertEquals(intWithinBounds(7, 7, 12), true)

// const possibleBonus = (a, b) => {
//   //a -- you

//   if (a + 6 < b) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

//need 2 functions, 1 will check for the presence of the digit and if that is true, we will continue in the 2nd function and return said digit

const checkForDigit7 = function (num) {
  //looking for num 7
  // should return true for all these cases

  let numString = JSON.stringify(num);
  // console.log(numString);

  for (let char of numString) {
    if (char === "7") {
      return true;
    }
  }
  return false;
};

// num = 7;
// num = 17;
// num = 72;
// num = 172;

// const sevenBoom = function (arr) {
//   for (let digit of arr) {
//     // console.log(digit);

//     if (checkForDigit7(digit)) {
//       return "Boom!";
//     }
//   }
//   return "there is no 7 in the array";
// };
// 10/15

// const sevenBoom = (arr) => {
//   return arr.join("").includes("7") ? "Boom" : "there is no 7";
// };

// console.log(sevenBoom([2, 55, 60, 99, 86]));

// // 23:06  -- 23:11
// const countBoomerangs = (arr) => {
//   //for every 3 digits in the arr, we need to check if it is a bomerang
//   // 1st - 0 1 2
//   // 2nd - 1 2 3
//   // 3rd - 2 3 4
//   let boomCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let testArr = [arr[i], arr[i + 1], arr[i + 2]];
//     //console.log(testArr);

//     if (
//       testArr.length === 3 &&
//       testArr[0] === testArr[2] &&
//       testArr[0] !== testArr[1]
//     ) {
//       boomCount++;
//     }
//   }
//   return boomCount;
// };

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

//23:20--23:24

// const oddishOrEvenish = (num) => {
//   //conver num  to str
//   let numStr = JSON.stringify(num);
//   let numSum = 0;
//   for (let digit of numStr) {
//     // console.log(digit);
//     numSum += Number(digit);
//   }

//   if (numSum % 2 === 1) {
//     return "Oddish";
//   } else {
//     return "Evenish";
//   }
// };

// console.log(oddishOrEvenish(4433));

// 23.28 - 23.54
const sortArray = (arr) => {
  //arr only contains int
  //no duplicates
  //sort in ascending order

  let retArr = [];

  //need to loop through arr
  let loopStatus = true;
  let i = 0;
  while (loopStatus) {
    if (retArr.length === 0) {
      //no number in return array, so push the 1st number
      retArr.push(arr[i]);
    } else {
      // we have a number or numbers in the array already
      // and need to check if this number needs to go before or after it
      // last num in retArr = retArr[lastVal]
      let lastValIndex = retArr.length - 1;

      //1st num in retArr = retArr[0]
      if (arr[i] < retArr[0]) {
        //put it at the start of the array
        retArr.unshift(arr[i]);
      } else if (arr[i] > retArr[lastValIndex]) {
        //add it to the end of the array if its greater than the
        retArr.push(arr[i]);
      } else {
        /* now is the tricky part;
        the value arr[i] is somewhere between the first and last digits in our array
        arr[i] = 1
        retArr = [-5,2]
        in this situation, 1 needs to come between -5 and 2
        thin you want to take the number, compare it to index 1, if it is larger, we inser, otherwise, we spread and insert at that inex?
        use map fn? 

        */
        for (let val of retArr) {
          console.log("hi", val, arr[i], i, retArr);
          if (arr[i] < val) {
            //if the current value is less than curent x; want to insert
            let spliceAt = retArr.indexOf(val);
            retArr.splice(spliceAt, 0, arr[i]);
          }

          // retArr.map((x)=>{
          //   if (arr[i] < x){
          //     //if the current value is less than curent x; want to insert

          //   }
          //  })
        }
        // let lastVal = retArr.length - 1
        // last num in retArr = retArr[lastVal]
      }

      //pushed to array and now we check if loop executes again
      if (i <= arr.length) {
        i++;
        //on to next iteration
      } else {
        //end of loop, set status to false
        loopStatus = false;
      }
    }
  }

  for (let val of arr) {
    console.log("val", val);
    //push first element to arr
    retArr.push(val);
  }
  return retArr;
};

// console.log(sortArray([2, -5, 1, 4, 7, 8]));

// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
// 12.13
// const doesBrickFit = function (a, b, c, w, h) {
//   //get input array with 5 elements;
//   //1st 3 are : height(a), width(b) and depth(c)
//   //last 2 are : hole with the width(w) and height(h).

//   //does the brick fit?
//   //does the brick fit?
//   let brickDimensions = a * b * c;
//   let holeDimensions = w * h;

//   if (holeDimensions >= brickDimensions ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log((doesBrickFit(1,1,1, 1,1))) //returns true, brick = 1; hole = 1;
// console.log((doesBrickFit(1,2,1, 1,1))) //returns true, brick = 1; hole = 1;

// Test.assertEquals(doesBrickFit(2,2,2, 1,2), false)

// Test.assertEquals(doesBrickFit(1,1,1, 1,1), true, "cube into square") -
// Test.assertEquals(doesBrickFit(1,2,1, 1,1), true) - brick = 2; hole = 1;
// Test.assertEquals(doesBrickFit(1,2,2, 1,1), false) - brick = 1; hole = 1;
// Test.assertEquals(doesBrickFit(1,2,2, 1,2), true) - brick = 1; hole = 1;
// Test.assertEquals(doesBrickFit(1,2,2, 2,1), true)- brick = 1; hole = 1;
// Test.assertEquals(doesBrickFit(2,2,2, 1,2), false)- brick = 1; hole = 1;

// Create a function that takes two dates and returns the number of days between the first and second date.
// // 12.40
// const getDays = (date1, date2) => {

//   let day = 60*60*24*1000

//   console.log('date1',date1)
//   console.log('date2',date2)

//   const dayDiff = Math.round(Math.abs((date2-date1)/day))
//   return dayDiff

// };

// console.log(getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2020")
// ));

//20.02
// const getLength = (arr) => {
//   //easy way
//   let chars = arr.join("");
//   // console.log(chars);
//   let countEl = 0;
//   if (arr.length === 0) {
//     return countEl
//   } else {
//     //array isnt empty
//     for (let el of arr) {
//       //console.log(el);
//       //if el is not an array
//       if (!Array.isArray(el)) {
//         //add the element to our return
//         countEl++;
//       } else {
//         for (let newEl of el) {
//           countEl++;
//         }
//       }
//     }

//   }
//   // for (let char of chars) {
//   //   if (typeof char !== "," || " ") {
//   //     countEl++;
//   //   }
//   // }
//   return countEl;
// };
/*
const getLength = function (arr) {
  //mthd 1// let defaultDepth = Infinity;
  // let length = 0;
  // let flatArr = arr.flat(defaultDepth);

  // for (let i = 0; i < flatArr.length; i++) {
  //   length++;
  // }

  // return length;
};*/
//mthd 2; recursion

// const getLength = function (arr) {
//   //initialize count
//   let count = 0;

//   //loop throug array, for each item, check if it is an array;
//   //if true, call getLength with the current Item
//   // else count ++

//   arr.forEach((item) => {
//     //loop throug array, for each item, check if it is an array;
//     if (Array.isArray(item)) {
//       //if true, call function recursively and add value to count
//       count += getLength(item);
//     } else {
//       //else is not and is 1 number
//       count++;
//     }
//   });

//   return count;
// };

// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

// console.log(getLength([1, [2, [3, 4]]]));
// console.log(getLength([1, [2, [3, 4]]]));

// const objectToArray = function (obj) {
//   if (Object.keys(obj).length === 0) {
//     return "EMPTY INPUT";
//   } else {
//     let retArr = [];

//     for (let key in obj) {
//       //console.log(typeof key);
//       //item = key
//       //value = obj[item]
//       let subArr = [key.toString(), obj[key]];

//       retArr.push(subArr);
//     }

//     return retArr;
//   }
// };

// console.log(
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10,
//   })
// );
//15.20
// const addName = function (obj, name, value) {
//   // mthd 1
//   // let retObj = {};

//   // //if obj is empty
//   // if (Object.keys(obj).length === 0) {
//   //   //just return new obj with key=name, value = value
//   //   retObj[name] = value;

//   //   return retObj;
//   // } else {
//   //   //there is an entry in obj and we want to add the name and values passed to obj
//   //   obj[name] = value;

//   //   return obj;
//   // }

//   //mthd 2

//   return { ...obj, [name]:value}

// };

// console.log(addName({}, "Brutus", 300));

// class OnesThreesNines {
//   constructor(num) {
//     this.num = Number(num);
//   }

//   //need three getters
//   get ones() {
//     return this.numOfOnes();
//   }

//   get threes() {
//     return this.numOfThrees();
//   }
//   get nines() {
//     return this.numOfNines();
//   }

//   //methods
//   numOfOnes(num) {
//     return Math.floor(num / 1);
//   }

//   //methods
//   numOfThrees(num) {
//     return Math.floor(num / 3);
//   }
//   //methods
//   numOfNines(num) {
//     return Math.floor(num / 9);
//   }
// }

// let n1 = new OnesThreesNines(5)
// console.log(n1.nines)

const sortIt = (arr) => {
  /*
  get an arr
  for each element, we need to first check if its a value or array,
  if value, add it 
  */
  //
  return arr.sort();
};

// sortIt([[3], 4, [2], [5], 1, 6])
// console.log(sortIt([[3], 4, [2], [5], 1, 6]))
//function that returns the number of digits and inverse of an input
// const count = (num) => {
//   //initialize vars
//   let count = 0;
//   let revNumber = 0;

//   while (num > 0) {
//     revNumber = revNumber * 10 + (num % 10);
//     num = Math.floor(num / 10);
//     count++
//   }

//   return {
//     revNumber,
//     count,
//   };
// };

// console.log(count(318));
/*
 loop
 1 revNum           num  
 2 8                31 
 3 8*10 + 1 = 81    3  
 4 81*10 + 3 = 813  0.3 ---------------stop
 */

// 11.02
// const isRepdigit = (num) => {
//   let initalNum = num;
//   //need to check if num === reverseNum.. if yes, return true, else return false
//   let numRev = 0;
//   if (num < 0) {
//     //inverse of negative === postive
//     return false;
//   } else if (num === 1001) {
//     return false;
//   } else {
//     // take num mod 10 + current numRevValue
//     while (num > 0) {
//       //write out algo:
//       numRev = numRev * 10 + (num % 10);

//       //decrement num for next addition for numRev and stopping condition
//       num = Math.floor(num / 10);
//     }

//     if (numRev === initalNum) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// console.log(isRepdigit(110));

function flatten(arr) {
  arr2 = [];

  //need to loop through arr, for each element, if it is an array, call flatten on said element,

  //otherwise, just add it to the array

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // console.log("hi");

      for (let i = 0; i < item.length; i++) {
        arr2.push(item[i]);
      }
    } else {
      arr2.push(item);
    }
  });

  return arr2;
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);

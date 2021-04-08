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

const countTrue = (arr) => {
  //all items of array are either true or false
  //loop through array, if true, update counter

  //return 0 if arr.length === 0

  let countTrueVals = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      countTrueVals++;
    } else {
      //do nothing
    }
  }

  return countTrueVals;
};

console.log(countTrue([true, false, false, true, false]));

console.log(countTrue([false, false, false, false]));

console.log(countTrue([]));


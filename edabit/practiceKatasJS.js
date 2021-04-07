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

const addUp = (num) => {
  let sumToReturn = 0;
  for (let i = 0; i <= num; i++) {
    sumToReturn += i;
  }
  return sumToReturn;
};

console.log(addUp(4));
console.log("1`````````````````````````````````````");
console.log(addUp(13));
console.log("1`````````````````````````````````````");
console.log(addUp(600));

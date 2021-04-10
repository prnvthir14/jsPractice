// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

// const reverseInt = (number) => {
//   //take x, an int and return inverse of x
//   let numberReverseStr = '';
//   let numberToString = number.toString();
//   let counter = (numberToString.length - 1);

//   //aprch 1
//   //loop through number from end to begining and add each digit to numberReverse as we go
//   for (let i = counter; i >= 0; i--) {
//     // console.log(numberToString[i]);
//     numberReverseStr += numberToString[i];
//   }
//   // console.log(typeof numberReverseStr);
//   let numberReverseInt = parseInt(numberReverseStr);
//   return numberReverseInt;
// };

// console.log(reverseInt(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const checkForPalindrom = (strToCheck) => {
//   //need to reverese and store string and then compare 2 values
//   let inversestrToCheck = "";
//   let strToCheckTrimmed = strToCheck.split(" ").join("");
//    console.log('strToCheckTrimmed',strToCheckTrimmed);

//   for (let i = strToCheckTrimmed.length - 1; i >= 0; i--) {
//     //console.log(strToCheck[i]);
//     inversestrToCheck += strToCheckTrimmed[i];
//   }

//   // console.log('inversestrToCheck', inversestrToCheck)

//   if (strToCheckTrimmed === inversestrToCheck) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkForPalindrom("madamqqqqqqq"));
// console.log(checkForPalindrom("madam"))
// console.log(checkForPalindrom("nurses run"))


// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// Click me to see the solution

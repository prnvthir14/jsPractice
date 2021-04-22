// Given a string s, find the length of the longest substring without repeating characters.

// var lengthOfLongestSubstring = function (s) {
//   let returnString = "";

//   for (let char of s) {
//     // console.log(char);

//     //add frst char in input
//     if (returnString.length === 0) {
//       returnString += char;
//     }else {
//       // if the length is not 0, we have something in returnString.
//       // need to check the last char currently in returnString agains char

//       if (returnString[returnString.length - 1] !== char) {
//         //ADD CHAR TO RETURNsTRIN
//         returnString += char;
//       } else {
//         //we now have 2 consecutive chars, don't do anything and return returnString
//         return returnString
//       }
//     }
//   }

//   return returnString;
// };

// var lengthOfLongestSubstring = function (s) {
//   let returnString = "";

//   //add frst char in input
//   for (let i = 0; i < s.length; i++) {
//     if (returnString.length === 0) {
//       returnString += char;
//     } else {

//     }
//   }
// };

// let q = "pwwkew";

// console.log(lengthOfLongestSubstring(q));

// Given an integer, convert it to a roman numeral.

const intToRoman = (num) => {
  let retrunChar = "";

  //want to
  while (num > 0) {
    //need to handle and add edgeCases before regular chars
    //1001>
    while (num >= 1000) {
      retrunChar += "M";
      num -= 1000;
    }

    //501---1000
    while (num >= 500) {
      if (num >= 900) {
        retrunChar += "CM";
        num -= 900;
      } else {
        retrunChar += "D";
        num -= 500;
      }
    }
    //101---500
    while (num >= 100) {
      if (num >= 400) {
        retrunChar += "CD";
        num -= 400;
      } else {
        retrunChar += "C";
        num -= 100;
      }
    }
    //51---100
    while (num >= 50) {
      if (num >= 90) {
        retrunChar += "XC";
        num -= 90;
      } else {
        retrunChar += "L";
        num -= 50;
      }
    }
    //11---50
    while (num >= 10) {
      if (num >= 40) {
        retrunChar += "XL";
        num -= 40;
      } else {
        retrunChar += "X";
        num -= 10;
      }
    }
    //6---10
    while (num >= 5) {
      if (num >= 9) {
        retrunChar += "IX";
        num -= 9;
      } else {
        console.log('hi')
        retrunChar += "V";
        num -= 5;
      }
    }
    //1---5
    while (num > 0) {
      if (num >= 4) {
        retrunChar += "IV";
        num -= 4;
      } else if (num < 4) {
        console.log('hi')
        retrunChar += "I";
        num -= 1;
      }
    }
  }

  return retrunChar;
};

let numer = 5;
console.log(intToRoman(numer));

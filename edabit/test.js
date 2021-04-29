// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

const printNum = () => {
  //from 1 -- 100
  // if the # is divisble by 3 print “Fizz”
  // if the # is divisble by 5 print “Buzz"
  // if the # is divisble by 3&&5 print “FizzBuzz"


  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      // retArr += "Buzz \n";
      console.log("Buzz");
    } else if (i % 3 === 0) {
      // retArr += "FizzBuzz \n";
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
  return retArr;
};

console.log(printNum());

// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

const reverseInt = (number) => {
  //take x, an int and return inverse of x
  let numberReverseStr = '';
  let numberToString = number.toString();
  let counter = (numberToString.length - 1);

  //aprch 1
  //loop through number from end to begining and add each digit to numberReverse as we go
  for (let i = counter; i >= 0; i--) {
    // console.log(numberToString[i]);
    numberReverseStr += numberToString[i];
  }
  // console.log(typeof numberReverseStr);
  let numberReverseInt = parseInt(numberReverseStr);
  return numberReverseInt;
};

console.log(reverseInt(32243));

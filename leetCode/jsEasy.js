// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any orde

// let nums = [7, 11, 2 , 15];

// let target = 9;

var twoSum = function (nums, target) {
  //need to loop through nums
  //return indicies of the 2 digits whose sum is closes to the target

  //compare to this num and start as far away as we can
  let sumCheck = -target;
  let returnIndex = [];
  //initial dist from target
  //9 - (-Infinity) = 9 + Inifinity
  let distFromTarget = target - sumCheck;
  console.log('distFromTarget', distFromTarget)
  //loop through nums
  for (let i = 0; i < nums.length; i++) {
    //loop through again. fix position 1 at i a 2nd number j+1
    for (let j = 1; j < nums.length; j++) {
      //on 1st loop, we check nums[0] against nums[1] ..... nums [length-1]; and store the value closest to taget
      // and do the same for every
      // newSum = 7+11= 18
      newSum = nums[i] + nums[j];

      // = 9 - 18 = -9
      let currentDistFromTarget = target - newSum;

      
      if (currentDistFromTarget < distFromTarget) {
        //1st iteration; -9 < Infinity ? YES
        returnIndex.push(i, j);
        //UDATE SUMCHECK with new value that  gets us closer to target
        sumCheck = newSum;
        // sumCheck = 18  
      } else {
        //do nothing and on to next iteration
      }
    }
  }

  return returnIndex;
};

let nums = [2, 7, 11, 15];

let target = 9;

console.log(twoSum(nums, target));

//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var Quiz = {};

// Find the largest number and second largest number
// Then get the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8
Quiz.bigDiff = function(array){
  var sorted_array = array.sort(function(a, b){ return a - b; });
  return sorted_array.pop() - sorted_array.pop();
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
Quiz.averageMedian = function(array){
  var middle_index = parseInt(array.length / 2);
  if(array.length % 2 === 0){
    return (array[middle_index - 1] + array[middle_index]) / 2;
  } else {
    return parseFloat(
      (
        (
          array[middle_index - 1] +
          array[middle_index] +
          array[middle_index + 1]
        ) / 3
      ).toFixed(2)
    );
  }
};

// return true if you can split the array into two parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true
Quiz.canBalance = function(array){
  var leftSum = 0,
    rightSum = 0,
    leftIndex = 0,
    rightIndex = array.length - 1;

  if(array.length <= 1){
    return false;
  }

  while(leftIndex <= rightIndex){
    if(leftSum <= rightSum){
       leftSum += array[leftIndex];
       leftIndex++;
    } else {
       rightSum += array[rightIndex];
       rightIndex--;
    }
  }
  return (rightSum == leftSum);
};

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3
Quiz.countClumps = function(array){
  var clumps = 0, first;

  while (array.length > 0) {
    if (array[0] === array[1]) {
      clumps += 1;
      // Shift elements off the start of the array until the first
      // element is different from the last one we shifted
      while(array.shift() === array[0]){}
    } else {
      array.shift();
    }
  }

  return clumps;
};

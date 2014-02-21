//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var quiz = {};
// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8
quiz.bigDiff = function (array) {
  array = array.sort(function(a, b){
    if (a < b)
      return 1;
    if (a > b)
      return -1;
    // a must be equal to b
    return 0;
  });
  return array.shift() - array.shift();
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
quiz.averageMedian = function (array) {
  var length, start, count, new_array, sum = 0;
  length = array.length;
  if (length % 2 === 0) {
    start = (length / 2) - 1;
    count = 2;
  } else {
    start = Math.floor(length / 2) - 1;
    count = 3;
  }
  new_array = array.splice(start, count);
  for (var i = 0; i < new_array.length;) {
    sum = sum + new_array[i];
    i = i + 1;
  }
  return Math.round(sum / count * 100) / 100;
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true
quiz.canBalance = function (array) {
  var i, length, sum;
  length = array.length;
  i = 0;
  sum = 0;
  for (; i < length; ) {
    sum = array[i] + sum;
    i = i + 1;
  }
  return sum % 2 === 0;
};

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3
quiz.countClumps = function (array) {
  var i, length, num, result;
  length = array.length;
  i = 0;
  result = 0;
  for (; i < length; ) {
    num = array.count(array[i]);
    if ( num > result) {
      result = num;
    }
    i = i + 1;
  }
}





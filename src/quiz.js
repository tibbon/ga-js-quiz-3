//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var quiz = {}; // namespacing

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

quiz.bigDiff = function(array) {
  // ok im gonna assume that this array is:
  // an array of numbers, and
  // sorted.

  var sortedArray = array;
  sortedArray.sort(function(a, b) { return a - b } );

  var biggest = sortedArray.pop();
  var secondBiggest = sortedArray.pop();

  return biggest - secondBiggest;
}

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67

quiz.averageMedian = function(array) {
  var length = array.length;
  if (array.length % 2 == 0) {  // if array is even
    var firstMiddle = array[length/2 - 1];
    var secondMiddle = array[length/2];
    return (firstMiddle + secondMiddle) / 2;
  } else {  // if array is odd
    var firstMiddle = array[Math.floor(length / 2) - 1];
    var secondMiddle = array[Math.floor(length / 2)];
    var thirdMiddle = array[Math.floor(length / 2) + 1];
    return (firstMiddle + secondMiddle + thirdMiddle) / 3;
  }
}

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

quiz.canBalance = function(array) {

}

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

quiz.countClumps = function(array) {

}
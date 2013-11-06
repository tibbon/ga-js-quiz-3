//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8
var bigDiff = function(array) {
  array.sort(function(a,b){return b-a});
  return array[0] - array[1];
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
var averageMedian = function(array) {
  var length = array.length, 
      position = Math.floor(length / 2) - 1;

  if (length % 2 === 0)
    return (array[position] + array[position + 1]) / 2;
  return (array[position] + array[position + 1] + array[position + 2]) / 3;
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true
var canBalance = function(array) {
  var index = 0,
      length = array.length,
      other_array = [];

  while(length > 0) {
    other_array.push(array.shift());
    debugger;
    if (sum(other_array) === sum(array)) {
      return true;
    }
    length -= 1;
  }
  return false;
};

var sum = function(array) {
  if (array.length === 0)
    return 0;
  var total = 0, i = 0;
  for(; i < array.length; i++)
    total += array[i];
  return total;
};
// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

var countClumps(array) {
  array.sort();

  var clumps = 0,
      i = 0,
      length = array.length - 1;
  for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
  }
};

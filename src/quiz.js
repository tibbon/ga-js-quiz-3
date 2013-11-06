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
var compareNumbers = function(a, b) {
    return a - b;
  };

var sumArray = function(array) {
    var sum = array.reduce(function(pv, cv) { return pv + cv; }, 0);
    return sum;
  };

var bigDiff = function(array) {
  var sorted = array.sort(compareNumbers);
  return sorted[sorted.length - 1] - sorted[sorted.length -2];
};


// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  

var averageMedian = function(array) {
  var sorted = array.sort(compareNumbers);
  var length = sorted.length;
  var middle = length / 2;
  if(length % 2 === 0) {
    return (sorted[middle] + sorted[middle - 1]) / 2;
  } else {
    return ((sorted[middle - 1.5] + sorted[middle - .5] + sorted[middle + .5]) / 3); 
  }
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

var canBalance = function(array) {
  var length = array.length;
  var middle = length / 2;

  if(length % 2 === 0) {
    var first_half = array.slice(0, middle - 1);
    var second_half = array.slice(middle - 1);
    var first_half_sum = sumArray(first_half);
    var second_half_sum = sumArray(second_half);
    return first_half_sum === second_half_sum;
  } else {
    var first_half = array.slice(0, middle - .5);
    var second_half = array.slice(middle - .5);
    var first_half_sum = sumArray(first_half);
    var second_half_sum = sumArray(second_half);
    return first_half_sum === second_half_sum;
  }
};

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

var countClumps = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i+1] === array[i]){
        results.push(i);
        if (array[i+1] ==! array[i+2]) { 
          results.push(i+1);
        }else{
          results.push(i+1); 
        }
            i++;
    }
  };
  debugger;
  console.log(results);

};








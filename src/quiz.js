//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
'use strict';

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

var bigDiff = function(array) {
  var number_array = convertArrayToNumbers(array);
	var sorted_array = sortAnArray(number_array);
  var x = sorted_array.pop();
  var y = sorted_array.pop();
  return x - y;
};

var convertArrayToNumbers = function(array) {
	var number_array = [];
	for (var i = 0; i < array.length ; i ++) {
		number_array.push(parseFloat(array[i]));
	}
	return number_array;
};

var sortAnArray = function(array) {
	var new_array = array.sort(function(a,b) {return a - b;});
	return new_array;
};


var averageMedian = function(array) {
  var new_array = sortAnArray(convertArrayToNumbers(array));
  var x = (Math.floor( new_array.length / 2) - 1);
  if (new_array.length % 2 === 0) {
    return (new_array[x] + new_array[x + 1] ) / 2;
  } else {
    return ((new_array[x] + new_array[x + 1] + new_array [x + 2]) / 3);
  }
};


var canBalance = function(my_array) {
  var array = convertArrayToNumbers(my_array);
  var length = array.length;
  for (var i = 1; i < length ; i ++) {
    var first_array = array.slice(0, i);
    var second_array = array.slice(i, length);
    var first_total = 0;
    var second_total = 0;
    var x = 0;
    var y = 0;
    for(x in first_array) { first_total += first_array[x]; }
    for(y in second_array) { second_total += second_array[y]; }
    if (first_total === second_total) {
      return true;
    }
  }
  if (i === length) {
    return false;
  }
};

var countClumps = function(array) {
	var x = 0;
  for (var i = 0; i < array.length; i ++ ) {
    if ((array[i] === array[i + 1]) && (array[i + 1] != array[i + 2])) {
      x += 1;
    }
  }
  return x;
};



// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3







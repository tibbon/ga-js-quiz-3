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
quiz.bigDiff = function(array) {
	var highest, second_highest;
	array = array.sort(function (a, b) { return a - b });
	highest = array[array.length-1];
	second_highest = array[array.length-2];
	return highest - second_highest;
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
quiz.averageMedian = function(array) {
	var length, m1, m2, m3, middle;
	length = array.length;
	if (length % 2 === 0) {
		middle = length / 2;
		m1 = array[middle];
		m2 = array[middle - 1];
		return (m1 + m2) / 2;
	} else {
		middle = Math.floor(length / 2);
		m1 = array[middle];
		m2 = array[middle - 1];
		m3 = array[middle + 1];
		return parseFloat(((m1 + m2 + m3) / 3).toFixed(2));
	}
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true
quiz.canBalance = function(array) {
	var first,
			second,
			first_sum,
			second_sum,
			l = array.length;
	for (var i = 0; i < l; i = i + 1) {
		if (i === 0) {
			first = array[i];
			first_sum = parseInt(array[i]);
		} else {
			first = array.slice(0, i + 1);
			first_sum = first.reduce(function(previousValue, currentValue, index, array){
		  return previousValue + currentValue;
		});
		}
		var input1 = i + 1, input2 = l - 1;
		second = array.slice(input1, l);
		second_sum = second.reduce(function(previousValue, currentValue, index, array){
		  return previousValue + currentValue;
		});

		if (first_sum === second_sum) {
			return true;
		}
	}
	return false;
};

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

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
bigDiff = function(array) {
	var 	sorted_array = array.sort(function compareNumbers(a,b){
		return a - b;
	});
	largest = sorted_array[(sorted_array.length - 1)],
	second = sorted_array[(sorted_array.length - 2)]; 
	return largest - second;
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
averageMedian = function(array) {
	var sum = 0,
			i = 0;
	// if (array.length % 2) === 0 {
	// 	while (array.length < 2) {
	// 		array.pop;
	// 		array.shift;
	// 	};
	// } else {
	// 	while (array.length < 3) {
	// 		array.pop;
	// 		array.shift;
	// 	};
	// };
	array.pop();
	array.shift();

	for(; i < (array.length);) {
		sum += parseInt(array[i]);
		i += 1;
	};
	
	return (sum/array.length);
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true
canBalance = function(array) {

};


// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3
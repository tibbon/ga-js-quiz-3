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

QUIZ_TOPICS.bigDiff = function(array) {
	var largest = Math.max.apply(Math, array),
			index_of_largest = array.indexOf(largest),
			next_largest;

	array.splice(index_of_largest, 1); // takes out largest
	next_largest = Math.max.apply(Math, array); // new max

	return parseInt(largest - next_largest);
};


// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67


QUIZ_TOPICS.averageMedian = function(array) {
	// find length of array
	// if length is even, get two middle elements and average them
	// if length is odd, get middle element and one to either side and average them
	var length = array.length,
			average;
	if (length % 2 === 0) { // if length is even
		average = parseFloat((array[Math.floor((length - 1) / 2)] + array[Math.floor(length / 2)])/2);
	}else { // if length is odd
		average = parseFloat((array[Math.floor(length / 2)] + array[Math.floor(length - 1 / 2)] + array[Math.floor(length + 1 / 2)]) / 3);
	};
	return average;
};



// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

QUIZ_TOPICS.canBalance = function(array) {

};




// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3


QUIZ_TOPICS.countClumps = function(array) {
	var count = 0;
	for(var i = 0; i < array.length; ++i){
	    if(array[i] == 2)
	        count = count + 1;
	};
};

// unfinished

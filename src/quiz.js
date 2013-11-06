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

// var largestNumber = function (array) {
//   return Math.max.apply( Math, array );
// };


var bigDiff = function (array) {
	var sortedArray = array.sort(function(a,b) {return b-a});
	return(sortedArray[0] - sortedArray[1]); 
};

// // return the average of the 2 or 3 numbers in the middle of the array
// // (2 if the array has an even number of elements)
// // (3 if the array has an odd number of elements).
// // averageMedian(array)
// //  [2, 6, 9, 11] => 7.5
// //  [9, 8, 2, 4, 7] => 6.33
var averageMedian = function (array) {
	var arraySort = array.sort(function(a,b) {return a-b});
	if ((arraySort.length % 2) !== 0) {
		var med = arraySort[(arraySort.length - 1)/2];
		var before = arraySort[((arraySort.length - 1)/2)+1];
		var after = arraySort[((arraySort.length - 1)/2)-1];
		return (med + before +after)/3;
	} else {
		return (arraySort[(arraySort.length/2)] + arraySort[(arraySort.length/2)-1])/2;
	};
};	

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3
//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// // Find the largest number and second largest number
// // Then subtract the difference.
// // bigDiff(array)
// //  [3, 6, 9, 12] => 3
// //  [9, 20, 11, 12] => 8

var BIG_DIFF = function bigDiff(array) {
	var inArray = array;
	inArray.sort(function(a,b){return b-a});
	return inArray[0] - inArray[1];
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
 // [2, 6, 9, 11] => 7.5
 // [9, 8, 2, 4, 7] => 6.33
var AVERAGE_MEDIAN = function averageMedian(array) {
		var inArray = array;
		if ((inArray.length%2) === 0)
		{
			evenindex1 = (inArray.length/2) - 1;
			evenindex2 = (inArray.length/2);
			return (inArray[evenindex1] + inArray[evenindex2])/2;
		}
		else
		{
			oddindex1 = Math.floor((inArray.length/2)-1);
			oddindex2 = Math.floor(inArray.length/2);
			oddindex3 = Math.floor((inArray.length/2)+1);
			return (inArray[oddindex1] + inArray[oddindex2] + inArray[oddindex3])/3;
		}
};


// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true
var CAN_BALANCE = function canBalance(array) {

};



// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

var COUNT_CLUMPS = function countClumps(array) {

};















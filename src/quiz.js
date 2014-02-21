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

var bigDiff = function(array){
	var max = Math.max.apply( Math, array ),
			max2;
	array.splice(array.indexOf(max), 1);
	max2 = Math.max.apply( Math, array );
	return (max - max2);
}

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67

var averageMedian = function(array){
	var middle = parseInt((array.length)/2);
	if(array.length % 2 === 0){
		return (array[middle - 1] + array[middle]) / 2;
	}else{
		return parseFloat(((array[middle - 1] + array[middle] + array[middle + 1]) / 3).toFixed(2));
	}
}


// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true


var canBalance = function(array){
	var count=0;
   for (var i=array.length; i--;) {
     count+=array[i];
   }

	for(var i = 0; i < array.length; i++){
		var p1 = array.slice(0,i);
		var count2 = 0;
		for (var j=p1.length; i--;) {
     count2+=array[j];
   }
		if(count2 === count - count2){
			return true;
		}else {
			return false;
		}
	}
}

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3


var countClumps = function(array){

}






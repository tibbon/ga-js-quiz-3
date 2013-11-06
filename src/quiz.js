//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
var bigDiff = function(array) {
    var max = Math.max.apply( Math, array ),
    min = Math.min.apply( Math, array );
    return max - min;
};
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
var averageMedian = function(array) {
	  // var max = Math.max.apply( Math, array ),
   //  min = Math.min.apply( Math, array );

    var array = array.sort(),
    min = array[array[0]],
    max = array[array[array.length-1]];

		// var max_index = array.indexOf(max);
  //   var new_array = array.splice(max_index, 1);
		// var min_index = array.indexOf(min);
  //   new_array = array.splice(max_index, 1);
  //   new_array = new_array.sort();
    new_array = array.splice(array.length-1), 1;
    new_array = array.splice(0, 1);
}    

    if (new_array.length % 2 === 0) {
    	var index = new_array/2;
    	 return (new_array[index] + new_array[index-1])/2;
    }else {
    	 var index = new_array/2;
    	 index = Math.ceil(index * 10) / 10;
    	 return (new_array[index] + new_array[index-1] + new_array[index-2])/3;
    }
}

//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 6.33

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
var canBalance = function(a) {
	var total = 0;
	for(var i = 0; i < a.length; i++){
 		total += a[i];
	};
	length = a.length;
	if (total%length===0 && total%2 ===0){
		return true;
	}else{
		return false;
	}
};
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true



// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3
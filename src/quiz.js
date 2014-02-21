//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var quiz = {
  // Find the largest number and second largest number
  // Then subtract the difference.
  // bigDiff(array)
  //  [3, 6, 9, 12] => 3
  //  [9, 20, 11, 12] => 8
  bigDiff: function(arr) {
    arr.sort(function(a,b) {
      return a-b;
    });
    return arr[arr.length-1] - arr[arr.length-2];
  },

  // return the average of the 2 or 3 numbers in the middle of the array
  // (2 if the array has an even number of elements)
  // (3 if the array has an odd number of elements).
  // averageMedian(array)
  //  [2, 6, 9, 11] => 7.5
  //  [9, 8, 2, 4, 7] => 4.67
  averageMedian: function(arr) {
    if (arr.length % 2 === 0) {
      var middle = arr.length / 2;
      return ((arr[middle - 1]) + (arr[middle])) / 2;
    } else {
      var middle = Math.floor(arr.length / 2);
      return (arr[middle] + arr[middle-1] + arr[middle+1]) / 3;
    }
  },

  // return true if you can split the array into parts
  // where the sum of one portion equals the sum of the other portion.
  // canBalance(array)
  //  [1, 2, 1, 1, 1] => true
  //  [2, 1, 1, 2, 1] => false
  //  [3, 4, 1, 2, 3, 1] => true
  canBalance: function(arr) {

  },

  // Returns the number of times 2 or more of the same number appear sequentially.
  // countClumps(array)
  //  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
  //  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3
  reportClumps: function(arr) {
    var len = arr.length,
        clumps = 0;
    for(var i=0; i < len; i = i+1) {
      if (arr[i] === arr[i+1]) {
        for(var j = i; j < len; j++) {
          if (arr[j] !== arr[i]) {
            i = j;
            clumps = clumps + 1;
            break;
          }
        }
      }
      return clumps;
    }
  }
};

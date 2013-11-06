//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// var bigDiff = function(array) {
//         var sorted = array.sort(function(a,b){
//                 return b-a;
//         });
//         var largest = sorted[0];
//         var second_largest = sorted[1];
//         return largest - second_largest;
// };

var bigDiff = function(array) {
  array.sort(function(a,b){return b-a});
  return array[0] - array[1];
};


var averageMedian = function(array) {
        if (array.length % 2 === 1) {
                var base = Math.ceil(array.length / 2);
                return (array[base] + array[base - 1] + array[base - 2]) / 3;
        } else {
                var base = Math.ceil(array.length / 2);
                return (array[base] + array[base - 1]) / 2;
        };
};

var onlyUnique = function(value, index, self) {
  return self.indexOf(value) === index;
}

var countClumps = function(array) {
  var i = 0, diff, result = [];
  for (; i < array.length - 1; i++ ) {
          diff = array[i] - array[i+1];
          if (Math.abs(diff) === 0) {
                  result.push(array[i]);
          }        
  }
  return result.filter(onlyUnique).length;
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

var canBalance = function(array) {
        var i = 1, first, bool = [], answer;
        for (; i < array.length; i++) {
                new_array = array.slice(0);
                first = new_array.splice(0, i);
                var first_value = first.reduce(function (accum, value, index, array) {
                  return accum + value;
                });
                var second_value = new_array.reduce(function (accum, value, index, array) {
                  return accum + value;
          });
          if (first_value === second_value){
                  answer = true;
                  break;
          } else {
                  answer = false;
          };
        };
        return answer;
};

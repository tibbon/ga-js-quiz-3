//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// The first question's tests are written.
// See quiz.js for more details

describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

describe('#bigDiff', function (){
	it('should subtract the second largest number in an array from the largest and return the difference', function(){
		var array = [3, 6, 9, 12];
		var new_array = [9, 20, 11, 12];

		expect(quiz.bigDiff(array)).toEqual(3);
		expect(quiz.bigDiff(new_array)).toEqual(8);
	});

});

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67

describe('#quiz.averageMedian', function(){
	it('should average the middle numbers of an array', function(){
		var array, array2;
		array = [2, 6, 9, 11];
		array2 = [9, 8, 2, 4, 7];
		expect(quiz.averageMedian(array)).toEqual(7.5);
		expect(quiz.averageMedian(array2)).toEqual(4.67);
	});

});


// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true


describe('#quiz.canBalance', function(){
	var array, array2, array3;
	array = [1, 2, 1, 1, 1];
	array2 = [2, 1, 1, 2, 1];
	array3 = [3, 4, 1, 2, 3, 1];

	it('should return true if an array can be separated into 2 parts with equal sums', function(){
		expect(quiz.canBalance(array)).toEqual(true);
		expect(quiz.canBalance(array2)).toEqual(false);
		expect(quiz.canBalance(array3)).toEqual(true);
	});

})












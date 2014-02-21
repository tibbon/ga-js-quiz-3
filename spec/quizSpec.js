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

  describe('question1', function() {
  	// Find the largest number and second largest number
  	// Then subtract the difference.
  	// bigDiff(array)
  	//  [3, 6, 9, 12] => 3
  	//  [9, 20, 11, 12] => 8
  	it('should find the two largest numbers and subtact them', function() {
  		expect(quiz.bigDiff([3, 6, 9, 12])).toEqual(3);
  		expect(quiz.bigDiff([9, 20, 11, 12])).toEqual(8);
  	});
  });

  describe('question2', function() {
  	// return the average of the 2 or 3 numbers in the middle of the array
  	// (2 if the array has an even number of elements)
  	// (3 if the array has an odd number of elements).
  	// averageMedian(array)
  	//  [2, 6, 9, 11] => 7.5
  	//  [9, 8, 2, 4, 7] => 4.67
  	it ('should average the values in the middle of an array', function() {
  		expect(quiz.averageMedian([2, 6, 9, 11])).toEqual(7.5);
  		expect(quiz.averageMedian([9, 8, 2, 4, 7])).toEqual(4.67);
  	});
  });

  describe('question3', function() {
  	// return true if you can split the array into parts
  	// where the sum of one portion equals the sum of the other portion.
  	// canBalance(array)
  	//  [1, 2, 1, 1, 1] => true
  	//  [2, 1, 1, 2, 1] => false
  	//  [3, 4, 1, 2, 3, 1] => true
  	it('returns true if the array can be split into 2 equal parts', function() {
  		expect(quiz.canBalance([1, 2, 1, 1, 1])).toBe(true);
  		expect(quiz.canBalance([3, 4, 1, 2, 3, 1])).toBe(true);
  		expect(quiz.canBalance([2, 1, 1, 2, 1])).toBe(false);
  	});
  });

});

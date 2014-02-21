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

describe('bigDiff', function() {

	it('finds the largest number in an array and subtracts the smallest from it', function() {
		expect(bigDiff([3, 6, 9, 12])).toBe(3);
		expect(bigDiff([9, 20, 11, 12])).toBe(8);
	});

});

describe('averageMedian', function() {

	it('returns the average of the middle 2-3 elements of an array', function() {
		expect(averageMedian([2, 6, 9, 11])).toBe(7.5);
		expect(averageMedian([9, 8, 2, 4, 7])).toBe(4.666666666666667);
	});

});

describe('canBalance', function() {

	it('returns true if array can be split into two parts with equal sums', function() {
		expect(canBalance([1, 2, 1, 1, 1])).toBe(true);
		expect(canBalance([2, 1, 1, 2, 1])).toBe(false);
		expect(canBalance([3, 4, 1, 2, 3, 1])).toBe(true);
	});

});




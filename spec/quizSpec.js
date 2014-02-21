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

describe('question 1', function() {

	it('finds the difference between the largest and second largest number of an array', function() {
		expect(QUIZ_TOPICS.bigDiff([3, 6, 9, 12])).toEqual(3);
		expect(QUIZ_TOPICS.bigDiff([9, 20, 11, 12])).toEqual(8);
	});

});

describe('question 2', function() {

	it('returns the average of the 2 or 3 numbers in the middle of the array', function() {
		expect(QUIZ_TOPICS.averageMedian([2, 6, 9, 11])).toEqual(7.5);
		expect(QUIZ_TOPICS.averageMedian([9, 8, 2, 4, 7])).toEqual(4.67);
	});

});

describe('question 3', function() {

	it('returns true if you can split the array into parts where the sum of one portion equals the sum of the other portion', function() {
		expect(QUIZ_TOPICS.canBalance([1, 2, 1, 1, 1])).toBe(true);
		expect(QUIZ_TOPICS.canBalance([2, 1, 1, 2, 1])).toBe(true);
		expect(QUIZ_TOPICS.canBalance([3, 4, 1, 2, 3, 1])).toBe(false);
	});

});

describe('question 4', function() {

	it('returns the number of times 2 or more of the same number appear sequentially', function() {
		expect(QUIZ_TOPICS.countClumps([2, 1, 1, 1, 1, 3, 3, 3, 1])).toEqual(2);
		expect(QUIZ_TOPICS.countClumps([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toEqual(3);
	});

});

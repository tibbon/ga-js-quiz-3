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

describe('question_1', function() {
	it('finds the largest number and second largest number and subtracts', function() {
		expect(bigDiff([3, 6, 9, 12])).toBe(3);
		expect(bigDiff([9, 20, 11, 12])).toBe(8);
	});
});

describe('question_2', function() {
	it('returns the avg of the 2 or 3 numbers in the middle of an array', function() {
		expect(averageMedian([2, 6, 9, 11])).toBe(7.5);
		expect(averageMedian([9, 8, 2, 4, 7])).toBe(19/3);
	});
});

describe('question_3a', function() {
	it('return true if you can split the array into parts', function() {
		expect(canBalance([1, 2, 1, 1, 1])).toBe(true);
		
	});
});

describe('question_3b', function() {
	it('return true if you can split the array into parts', function() {

		expect(canBalance([2, 1, 1, 2, 1])).toBe(false);

	});
});

describe('question_3c', function() {
	it('return true if you can split the array into parts', function() {

		expect(canBalance([3, 4, 1, 2, 3, 1])).toBe(true);
	});
});


describe('question_4a', function() {
	it('Returns the number of times 2 or more of the same number appear sequentially', function() {

		expect(countClumps([2, 1, 1, 1, 1, 3, 3, 3, 1])).toBe(2);
	});
});


describe('question_4b', function() {
	it('Returns the number of times 2 or more of the same number appear sequentially', function() {

		expect(countClumps([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toBe(3);
	});
});



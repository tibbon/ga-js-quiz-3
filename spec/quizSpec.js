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

describe("bigDiff", function() {

	it("should find the largest two numbers of an array and return the difference", function() {
		expect(bigDiff(new Array(3, 6, 9, 12))).toBe(3);
		});

	it("should find the largest two numbers of an array and return the difference", function() {
	expect(bigDiff(new Array(9, 20, 11, 12))).toEqual(8);
	});
});

describe('averageMedian', function() {
	it('should return the 2 or 3 numbers in the middle of the array', function() {
		expect(averageMedian(new Array(2, 6, 9, 11))).toEqual(7.5);
	});

	it('should return the 2 or 3 numbers in the middle of the array', function() {
	expect(averageMedian(new Array(9, 8, 2, 4, 7))).toEqual(14/3);
	});
});

// describe('canBalance', function() {
// 	it('should return true if you can split the array into equal parts', function() {
// 		expect(averageMedian(new Array(1, 2, 1, 1, 1))).toBeTruthy;
// 	});

// 	it('should return the 2 or 3 numbers in the middle of the array', function() {
// 	expect(averageMedian(new Array(9, 8, 2, 4, 7))).toEqual(14/3);
// 	});
// });












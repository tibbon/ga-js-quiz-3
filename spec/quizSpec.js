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

describe('question1', function(){

	// it('should find the largest number',
	// function() {
	// 	expect(largestNumber([3, 6, 9, 12])).toEqual(12);
	// });

	it('should find the difference between second and first largest numbers', 
		function() {
			expect(bigDiff([3, 6, 9, 12])).toEqual(3);
		});

	it('should find the difference between first and second largest numbers',
		function () {
			expect(bigDiff([9, 20, 11, 12])).toEqual(8);
		});

});


describe('question2', function(){
	it('should return the average of 2 numbers in the middle if the array has an even number of elements',
		function() {
			expect(averageMedian([2, 6, 9, 11])).toEqual(7.5);
		});

	it('should return the average of 3 numbers in the middle if the array has an odd number of elements',
		function() {
			expect(averageMedian([9, 8, 2, 4, 7])).toEqual(19/3);
		});
});
















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
  it('should find the largest number and second largest number in an array and then subtract the difference', function() {
    expect(bigDiff([3, 6, 9, 12])).toBe(3);
    expect(bigDiff([9, 20, 11, 12])).toBe(8);
  });
});

describe('averageMedian', function() {
  it('should return the average of the 2 or 3 numbers in the middle of the array', function() {
    expect(averageMedian([2, 6, 9, 11])).toBe(7.5);
    expect(averageMedian([9, 8, 2, 4, 7])).toBe(19/3);
  });
});











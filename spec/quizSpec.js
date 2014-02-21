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

describe('canBalance', function() {
  it('should return the average of the 2 or 3 numbers in the middle of the array', function() {
    expect(canBalance([1, 2, 1, 1, 1])).toBe(true);
    expect(canBalance([2, 1, 1, 2, 1])).toBe(false);
    expect(canBalance([3, 4, 1, 2, 3, 1])).toBe(true);
  });
});


describe('countClumps', function() {
  it('should return the number of times 2 or more of the same number appear sequentially.', function() {
    expect(countClumps([2, 1, 1, 1, 1, 3, 3, 3, 1])).toBe(2);
    expect(countClumps([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toBe(3);
  });
});





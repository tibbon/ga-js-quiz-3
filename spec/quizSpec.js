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
  it('should select the two highest numbers and get the difference', function() {
    expect(bigDiff([2, 6, 9, 11])).toBe(2);
    expect(bigDiff([4,18,9,10,4])).toBe(8);
  });
});

describe('averageMedian', function() {
  it('should produce the average of the array given.', function() {
    expect(averageMedian([2, 6, 9, 11])).toBe(7.5);
    expect(averageMedian([9,8,2,4,7])).toBe(4.67);
  });
});

describe('canBalance', function() {
  it('should be able to test whether the array can be split into two differnt arrays with the same value', function() {
    expect(bigDiff([2, 6, 9, 11])).toBe(2);
    expect(bigDiff([4,18,9,10,4])).toBe(8);
  });
});

describe('countClumps', function() {
  it('should count the number of times the same number appears more than twice', function() {
    expect(bigDiff([2, 1, 1, 1, 1, 3, 3, 3, 1])).toBe(2);
    expect(bigDiff([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toBe(3);
  });
});
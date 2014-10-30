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

  it('finds the difference between the smallest and largest number', function() {
    expect(quiz.bigDiff([3, 6, 9, 12])).toEqual(3);
    expect(quiz.bigDiff([9, 20, 11, 12])).toEqual(8);
  });

});

describe('averageMedian', function() {

  it('return the average of the 2 (if even) or 3 (if odd) middle numbers', function() {
    expect(quiz.averageMedian([2, 6, 9, 11])).toEqual(7.5);
    expect(quiz.averageMedian([9, 8, 2, 4, 7])).toEqual(4.67);
  });

});

describe('canBalance', function() {

  it('checks if array can split into equal parts', function() {
    expect(quiz.canBalance([1, 2, 1, 1, 1])).toBeTruthy();
    expect(quiz.canBalance([2, 1, 1, 2, 1])).toBeFalsy();
    expect(quiz.canBalance([3, 4, 1, 2, 3, 1])).toBeTruthy();
  });

});

describe('countClumps', function() {

  it('counts the number of times 2 or more of the same number appear sequentially.', function() {
    expect(quiz.countClumps([2, 1, 1, 1, 1, 3, 3, 3, 1])).toEqual(2);
    expect(quiz.countClumps([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toEqual(3);
  });

});
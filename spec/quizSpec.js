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

describe('quesion 1', function() {
  it('take the largest number and second largest number Then take the difference', function() {
    expect(quiz.bigDiff([3, 6, 9, 12])).toEqual(3);
    expect(quiz.bigDiff([9, 20, 11, 12])).toEqual(8);
  });
});

describe('quesion 2', function() {
  it('return the average of the 2 or 3 numbers in the middle of the array', function() {
    expect(quiz.averageMedian([2, 6, 9, 11])).toEqual(7.5);
  	expect(quiz.averageMedian([9, 8, 2, 4, 7])).toEqual(4.67);
  });
});

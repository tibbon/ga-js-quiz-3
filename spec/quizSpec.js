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

describe('#bigDiff', function() {
  it('finds the largest and second largest numbers in an array and finds the difference', function() {
    var array_1 = [3, 6, 9, 12],
    array_2 = [10, 20, 4, 3];
    expect(quiz.bigDiff(array_1)).toEqual(3);
    expect(quiz.bigDiff(array_2)).toEqual(10);
  });
});

describe('#averageMedian', function() {
  it('finds the average of the middle numbers of an array', function() {
    var array_1 = [2, 6, 9, 11],
    array_2 = [9, 8, 2, 4, 7];
    expect(quiz.averageMedian(array_1)).toEqual(7.5);
    expect(quiz.averageMedian(array_2)).toEqual(4.67);
  });
});

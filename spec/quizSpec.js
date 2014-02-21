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

describe('bigDiff(array)', function() {

  it('find the difference between the two largest numbers in an array', function() {
    expect(BIG_DIFF([3, 6, 9, 12])).toEqual(3);
    expect(BIG_DIFF([9, 20, 11, 12])).toEqual(8);
  });

});

describe('averageMedian(array)', function() {

  it('return true if you can split the array into parts where the sum of one portion equals the sum of the other portion.', function() {
    expect(AVERAGE_MEDIAN([1, 2, 1, 1, 1])).toBe(true);
    expect(AVERAGE_MEDIAN([2, 1, 1, 2, 1])).toBe(false);
    expect(AVERAGE_MEDIAN([3, 4, 1, 2, 3, 1])).toBe(true);

  });

});

describe('countClumps(array)', function() {

  it('Returns the number of times 2 or more of the same number appear sequentially', function() {
    expect(COUNT_CLUMPS([2, 1, 1, 1, 1, 3, 3, 3, 1])).toEqual(2);
    expect(COUNT_CLUMPS([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toEqual(3);
  });

});
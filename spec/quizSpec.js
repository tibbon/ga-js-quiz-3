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

describe ('bigDiff', function() {

  it('returns the difference of the two largest numbers', function() {
    expect(bigDiff([3, 6, 9, 12])).toBe(3);
    expect(bigDiff([9, 20, 11, 12])).toBe(8);
  });
});

describe ('averageMedian', function() {

  it('returns the difference of the average median', function() {
    expect(averageMedian([2, 6, 9, 11])).toBe(7.5);
    expect(averageMedian([9, 8, 2, 4, 7])).toBe(14/3);
  });
});

describe ('canBalance', function() {

  it('sees if the array can be balanced', function() {
    expect(canBalance([1, 2, 1, 1, 1])).toBe(true);
    expect(canBalance([2, 1, 1, 2, 1])).toBe(false);
  });
});

describe ('countClumps', function() {

  it('returns the number of times 2 or more of the same value appear sequentially', function() {
    expect(canBalance([2, 1, 1, 1, 1, 3, 3, 3, 1])).toBe(2);
    expect(canBalance([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toBe(3);
  });
});
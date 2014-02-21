//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// The first question's tests are written.
// See quiz.js for more details

describe('This quiz', function() {
  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });
});

describe('Quiz.bigDiff', function(){
  it('subtracts the second-largest number in an array from the largest', function(){
    expect(Quiz.bigDiff([3, 6, 9, 12])).toEqual(3);
    expect(Quiz.bigDiff([9, 20, 11, 12])).toEqual(8);
  });
});

describe('Quiz.averageMedian', function(){
  it('averages the middle two or three numbers in an array', function(){
    expect(Quiz.averageMedian([2, 6, 9, 11])).toEqual(7.5);
    expect(Quiz.averageMedian([9, 8, 2, 4, 7])).toEqual(4.67);
  });
});

describe('Quiz.canBalance', function(){
  it('returns true if an array can be split into two parts whose sums are equal', function(){
    expect(Quiz.canBalance([1, 2, 1, 1, 1])).toBe(true);
    expect(Quiz.canBalance([2, 1, 1, 2, 1])).toBe(false);
    expect(Quiz.canBalance([3, 4, 1, 2, 3, 1])).toBe(true);
  });
});

describe('Quiz.countClumps', function(){
  it('gets the number of times two or more of the same number appear sequentially', function(){
    expect(Quiz.countClumps([2, 1, 1, 1, 1, 3, 3, 3, 1])).toEqual(2);
    expect(Quiz.countClumps([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toEqual(3);
  });
});

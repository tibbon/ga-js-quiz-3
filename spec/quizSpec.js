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

describe('question 1', function() {

  it('should return 9 if array is (1, 10, 5, 2)', function() {
    expect(bigDiff(1, 10, 5, 2)).to eq(9);
  });

});

describe('question 2', function() {

  it('should return 9 if array is (1, 10, 5, 2)', function() {
    expect(bigDiff(1, 10, 5, 2)).to eq(9);
  });

});

describe('question 3', function() {

  it('should return 7.5 if array is (2, 6, 9, 11)', function() {
    expect(averageMedian(2, 6, 9, 11)).to eq(7.5);
  });

  it('should return 6.33 if array is (9, 8, 2, 4, 7)', function() {
    expect(averageMedian(9, 8, 2, 4, 7)).to eq(19/3);
  });

});

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

  it('should subtract the second largest number in an array from the largest', function() {
    expect(bigDiff([3,6,9,12])).toEqual(3);
    expect(bigDiff([9,20,11,12])).toEqual(8);
  });

});

describe('question 2', function() {

  it('return the average of the median 2 or 3 values in an array', function() {
    expect(averageMedian([2, 6, 9, 11])).toEqual(7.5);
    expect(averageMedian([9, 8, 2, 5, 7])).toEqual(5);
  });

});

describe('question 3', function() {

  it('should return true if you can split an array into parts where the sum of one portion equals the sum of the other portion. Otherwise should return false.', function() {
    expect(canBalance([1, 2, 1, 1, 1])).toEqual(true);
    expect(canBalance([2, 1, 1, 2, 1])).toEqual(false);
    expect(canBalance([3, 4, 1, 2, 3, 1])).toEqual(true);
  });

});

describe('question 4', function() {

  it('should return the number of times that any number appears consecutively in an array', function() {
    expect(countClumps([2, 1, 1, 1, 1, 3, 3, 3, 1])).toEqual(2);
    expect(countClumps([9, 3, 3, 4, 4, 4, 6, 7, 7, 7])).toEqual(3);
  });

});
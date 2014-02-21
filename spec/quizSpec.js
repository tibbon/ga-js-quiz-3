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

describe('function1', function() {

  it('is test about the largest minus second', function() {
    expect(bigDiff([3, 6, 9, 12])).toEqual(3);
   expect(bigDiff([9, 20, 11, 12])).toEqual(8);
  });

});

describe('function2', function() {

  it('is test about the middle of array avg', function() {
    expect(averageMedian([2, 6, 9, 11])).toEqual(7.5);
   expect(averageMedian([9, 8, 2, 4, 7])).toEqual(4.67);
  });

});


describe('function3', function() {

  it('is test about the balance of array', function() {
    expect(canBalance([1, 2, 1, 1, 1])).toEqual(true);
   expect(canBalance([2, 1, 1, 2, 1])).toEqual(false);
  });

});




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

  it('find the average of the center numbers in an array', function() {
    expect(AVERAGE_MEDIAN([2, 6, 9, 11])).toEqual(7.5);
    expect(AVERAGE_MEDIAN([9, 8, 2, 4, 7])).toEqual(4.67);
  });

});

// describe('(array)', function() {

//   it('find the difference between the two largest numbers in an array', function() {
//     expect(BIG_DIFF([3, 6, 9, 12])).toEqual(3);
//     expect(BIG_DIFF([9, 20, 11, 12])).toEqual(8);
//   });

// });
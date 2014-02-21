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

  beforeEach(function() {
    bDSet1 = new Array[3, 6, 9, 12];
    bDSet2 = new Array[9, 20, 11, 12];
    aMSet1 = new Array[2, 6, 9, 11];
    aMSet2 = new Array[9, 8, 2, 4, 7];
    cBSet1 = new Array[1, 2, 1, 1, 1];
    cBSet2 = new Array[2, 1, 1, 2, 1];
    cBSet3 = new Array[3, 4, 1, 2, 3, 1];
    cCSet1 = new Array[2, 1, 1, 1, 1, 3, 3, 3, 1];
    cCSet2 = new Array[9, 3, 3, 4, 4, 4, 6, 7, 7, 7];
  });

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

  it('finds the largest and second largest numbers in an array and find the difference', function(){});

  it('returns the average of the middle 2 numbers in an array with an even number of elements', function(){});

  it('returns the average of the middle 3 numbers in an array with an odd number of elements', function(){});

  it("returns 'true' if array can be split into parts where sum of one portion is equal to the sum of the other" , function(){});

  it('returns the number of times 2 or more of the same number appear sequentially', function(){});

});

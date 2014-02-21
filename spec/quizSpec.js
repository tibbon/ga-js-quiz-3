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

describe("a quiz methods", function() {
  var array1, array2, array3, array4;
  beforeEach(function() {
    array1 = [3,6,9,12];
    array2 = [9,20,11,12];
    array3 = [2,6,9,11];
    array4 = [9,8,2,4,7];
    array5 = [1,2,1,1,1];
    array6 = [2,1,1,2,1];
    array7 = [3,4,1,2,3,1];
    array8 = [2,1,1,1,1,3,3,3,1];
    array9 = [9,3,3,4,4,4,6,7,7,7];
  });
  describe("quiz.bigDiff()", function() {
    it("finds the two largest numbers and return the difference", function() {
      expect(quiz.bigDiff(array1)).toEqual(3);
      expect(quiz.bigDiff(array2)).toEqual(8);
    });
  });
  describe("quiz.averageMedian()", function() {
    it("returns the average of the middle two elements for even length arr",
    function() {
      expect(quiz.averageMedian(array1)).toEqual(7.5);
    });
    it("returns the average of the middle three elements for odd length",
    function() {
      expect(quiz.averageMedian(array4)).toBeCloseTo(4.67, 1);
    });
  });
  describe("quiz.canBalance()", function() {
    it("returns true if the array is balanceable", function() {
      expect(quiz.canBalance(array5)).toBe(true);
      expect(quiz.canBalance(array7)).toBe(true);

    });
  });
  describe("quiz.reportClumps()", function() {
    it("returns the number of times a given number appears sequentially", function() {
      expect(quiz.reportClumps(array8)).toEqual(2);
      expect(quiz.reportClumps(array9)).toEqual(3);
      expect(quiz.reportClumps([1,2,3])).toEqual(0);
    });
  });
});

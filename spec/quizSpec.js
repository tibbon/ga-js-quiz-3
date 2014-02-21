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

  describe("#bigDiff", function () {
    var array, array2, array3;
    it("finds the largest number and second largest number, subtracting diff", function(){
      array = [3, 6, 9, 12];
      array2 = [9, 20, 11, 12];
      expect(quiz.bigDiff(array)).toEqual(3)
      expect(quiz.bigDiff(array2)).toEqual(8)
    });
  });

  describe("#averageMedian", function () {
    var array, array2;
    it("return the average of the 2 or 3 numbers in the middle of the array", function(){
      array = [2, 6, 9, 11];
      array2 = [9, 8, 2, 4, 7];
      expect(quiz.averageMedian(array)).toEqual(7.5)
      expect(quiz.averageMedian(array2)).toEqual(4.67)
    });
  });

  describe("#canBalance", function () {
    var array, array2;
    it("return the average of the 2 or 3 numbers in the middle of the array", function(){
      array = [1, 2, 1, 1, 1];
      array2 = [2, 1, 1, 2, 1];
      array3 = [3, 4, 1, 2, 3, 1];
      expect(quiz.canBalance(array)).toEqual(true)
      expect(quiz.canBalance(array2)).toEqual(false)
      expect(quiz.canBalance(array3)).toEqual(true)
    });
  });
});










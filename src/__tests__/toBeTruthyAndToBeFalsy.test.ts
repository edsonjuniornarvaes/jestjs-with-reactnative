const GradeChecker = require('../class/GradeChecker');

describe("Checking student grades", () => {
  test("should return true for grades 6, 7 and 5", () => {
    expect(GradeChecker.average2(6, 7, 5)).toBeTruthy();
  });

  test("should return false for grades 3, 5, 4", () => {
    expect(GradeChecker.average2(3, 5, 4)).toBeFalsy();
  });
});
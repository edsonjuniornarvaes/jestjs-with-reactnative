const GradeChecker4 = require('../class/GradeChecker');

describe("Checking student grades",()=> {
  test("should check if the average of the grades 4, 3, and 6 is 4.3", ()=> {
    expect(GradeChecker4.average(4, 3, 6)).toBeCloseTo(4.33)
  })

  test("should check if the average of the grades 5, 5 and 5 is 5.3", ()=> {
    expect(GradeChecker4.average(5, 5, 6)).toBeCloseTo(5.3, 1)
  })
})
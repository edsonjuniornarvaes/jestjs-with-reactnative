const GradeChecker3 = require('../class/GradeChecker');
describe("Checking student grades",()=> {
  test("should check if the average of the grades 4, 3, and 8 is less than 6", ()=> {
    expect(GradeChecker3.average(4, 3, 8)).toBeLessThan(6)
  })

  test("should check if the average of the grades 8, 7, 9 is less than or equal to 6", ()=> {
    expect(GradeChecker3.average(6, 6, 6)).toBeLessThanOrEqual(6)
  })
})

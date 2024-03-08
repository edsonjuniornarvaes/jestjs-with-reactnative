const Division = require ('../class/Division')

describe("Checking exceptions", () => {
  test("should throw an exception", () => {
    expect(() => {
      Division.getDivision(25, 0)
    }).toThrow();
  })

  test("should not throw an exception", () => {
    expect(() => {
      Division.getDivision(25,2).not.toThrow()
    })
  })
})
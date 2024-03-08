const Names2 = require("../class/Names");

describe("Checking items of array", ()=> {
  test("should check if the array contains the user Edson", ()=> {
    expect(Names2.getNames()).toContain("Edson")
  })

  test("should check if the array does not contain the user Narvaes", ()=> {
    expect(Names2).not.toContain("Narvaes")
  })
})

const Names = require("../class/Names")

describe("Checking length of items of array",()=> {
  console.log(Names.getNames())
  test("should check if array has 3 items", () => {
    expect(Names.getNames()).toHaveLength(3)
  })
  
  test("should check if index item 3 is 4 characters wide", () => {
    expect(Names.getNames()[2]).toHaveLength(7)
  })
})
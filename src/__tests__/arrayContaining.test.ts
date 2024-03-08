const Names3 = require("../class/Names")

describe("Checking items of array",()=> {
  test("should check if the array contains all the items in another array", () => {
    const expectArray = ["Edson", "Junior"];

    expect(Names3.getNames()).toEqual(expect.arrayContaining(expectArray))
  })
})

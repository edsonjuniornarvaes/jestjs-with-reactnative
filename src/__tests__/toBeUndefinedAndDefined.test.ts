const Product = require('../class/Product')

describe("Test on product information", () => {
  let product = new Product()

  product.description = "Chips"

  test("should return that the stock property is undefined", () => {
    expect(product.stock).toBeUndefined()
  })
  test("should return that the description is defined", () => {
    expect(product.description).toBeDefined()
  })
})
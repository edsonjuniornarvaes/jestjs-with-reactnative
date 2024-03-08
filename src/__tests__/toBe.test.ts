const AreaOfSquare = require('../class/MathOperations');

describe('Calculate area of square', () => {
  test('passed the value 3, it should return 9', () => {
    expect(AreaOfSquare.square(3)).toBe(9);
  });
  test('passed the value 17, it should return 289', () => {
    expect(AreaOfSquare.square(17)).toBe(289);
  });
  test('passed the value 4, it should return 16', () => {
    expect(AreaOfSquare.square(4)).toBe(16);
  });
});

const PersonFactory2 = require('../index');

const factory = new PersonFactory2();

describe('Factory of Person', () => {
  test('not passing the parameter should return null', () => {
    expect(factory.getPerson()).toBeNull();
  });
  test('passed the invalid parameter admin should return null', () => {
    expect(factory.getPerson('admin')).toBeNull();
  });
});

const PersonFactory = require('../index');

const factory = new PersonFactory();

describe('Factory of Person', () => {
  test('not passing the parameter should return null', () => {
    expect(factory.getPerson()).toBeNull();
  });
  test('passed the invalid parameter admin should return null', () => {
    expect(factory.getPerson('admin')).toBeNull();
  });
});

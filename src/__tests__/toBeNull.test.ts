const PersonFactory2 = require('../class/PersonFactory');

const Factory = new PersonFactory2();

describe('Factory of Person', () => {
  test('not passing the parameter should return null', () => {
    expect(Factory.getPerson()).toBeNull();
  });
  test('passed the invalid parameter admin should return null', () => {
    expect(Factory.getPerson('admin')).toBeNull();
  });
});

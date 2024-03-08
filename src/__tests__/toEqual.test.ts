const Person = require('../class/Person');

const paulo = new Person(
  'Paulo Gilberto',
  'paulo.gilberto@email.com',
  new Date(1980, 5, 12),
);

const objTest = new Person(
  'Paulo Gilberto',
  'paulo.gilberto@email.com',
  new Date(1980, 5, 12),
);

test('should check if the object properties of object paulo equal the properties of object test', () => {
  expect(paulo).toEqual(objTest);
});

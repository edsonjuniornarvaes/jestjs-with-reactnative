const Employee2 = require('../class/Person')
const Client2 = require('../class/Person')

const PersonFactory = require('../class/PersonFactory');
const Factory2 = new PersonFactory();

describe('Factory of Persons', () => {
  test('passed a string with client value, it should return a new client object', () => {
    expect(Factory2.getPerson('client')).toBeInstanceOf(Client2);
  });
  test('passed a string with the employee value, it should return a new employee object', () => {
    expect(Factory2.getPerson('employee')).toBeInstanceOf(Employee2);
  });
});

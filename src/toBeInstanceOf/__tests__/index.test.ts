import {Employee, Client} from '../../class/index';
const PersonFactory = require('../../toBeNull');
const factory2 = new PersonFactory();

describe('Factory of Persons', () => {
  test('passed a string with client value, it should return a new client object', () => {
    expect(factory2.getPerson('client')).toBeInstanceOf(Client);
  });
  test('passed a string with the employee value, it should return a new employee object', () => {
    expect(factory2.getPerson('employee')).toBeInstanceOf(Employee);
  });
});

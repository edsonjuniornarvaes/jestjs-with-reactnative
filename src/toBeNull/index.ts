const {Employee, Client} = require('../toBe/index');

module.exports = class PersonFactory {
  getPerson(type: string | null) {
    if (type === null) {
      return null;
    }

    switch (type?.toLowerCase()) {
      case 'employee':
        return new Employee();
      case 'client':
        return new Client();
      case 'admin':
        console.log('Opa');
      // eslint-disable-next-line no-fallthrough
      default:
        return null;
    }
  }
};

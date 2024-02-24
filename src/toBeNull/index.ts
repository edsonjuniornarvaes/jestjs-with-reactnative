import {Employee, Client} from "../class/index";

module.exports = class PersonFactory {
  getPerson(type: string | null) {
    if (type === null) {
      return null;
    }

    switch (type?.toLowerCase()) {
      case "employee":
        return new Employee();
      case "client":
        return new Client();
      default:
        return null;
    }
  }
};

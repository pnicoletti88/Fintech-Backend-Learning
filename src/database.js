const randomlyThrowError = require('./util');

class DataBase {
  constructor() {
    this.db = [];
  }

  async getUser(userID) {
    randomlyThrowError();
    return this.db.filter((user) => user.id === userID);
  }

  async addUser(user) {
    randomlyThrowError();
    this.db.push(user);
  }

  async removeUser(userID) {
    randomlyThrowError();
    this.db = this.db.filter((user) => user.id !== userID);
  }
}

const dbInstance = new DataBase();

module.exports = dbInstance;

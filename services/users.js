const db = require('../database/db');
const configs = require('../configs');
require('../models/users');

class UsersService {
    constructor() {
      this.Users = db.model('users');
    }

  createUser(username, password){
    return new Promise((resolve, reject)=>{
      this.Users.create({
        username : username,
        password : password
      })
      .then((user)=>{
        return resolve(user);
      })
      .catch((err)=>{
        return reject("Can not create user");
      });
    });
  }

}

module.exports = new UsersService();

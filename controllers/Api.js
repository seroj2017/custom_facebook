const UsersRouter = require('./UsersRouter');

class API {
  constructor() {

  }

  initializeApp(app){
    app.use('/', UsersRouter);
    app.use('/login', UsersRouter);
  }

}

module.exports = new API();

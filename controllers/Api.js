const UsersRouter = require('./UsersRouter');
const HomeRouter = require('./HomeRouter');

class API {
  constructor() {

  }

  initializeApp(app){
    app.use('/', HomeRouter);
    app.use('/login', UsersRouter);
  }

}

module.exports = new API();

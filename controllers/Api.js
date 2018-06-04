const UsersRouter = require('./UsersRouter');
const HomeRouter = require('./HomeRouter');
const OnlinePollRouter = require('./OnlinePollRouter')

class API {
  constructor() {

  }

  initializeApp(app){
    app.use('/', HomeRouter);
    app.use('/login', UsersRouter);
    app.use('/online_poll', OnlinePollRouter);
  }

}

module.exports = new API();

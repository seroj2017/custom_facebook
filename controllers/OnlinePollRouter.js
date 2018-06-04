const express = require('express');
const OnlinePollRouter = express.Router();

OnlinePollRouter.get('/', (req, res)=>{
  res.render('online_poll');
});

module.exports = OnlinePollRouter;

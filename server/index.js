const express = require('express');
const app = express();
const people = require('./routes/people');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/people', people);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
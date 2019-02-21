const express = require('express')
const app = express();
const fs = require('fs');

let people = null;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

fs.readFile('../json-data/people.json', (err, data) => {
  if (err) console.log(err);
  people = JSON.parse(data);
});

app.get('/people', function (req, res) {
  res.send(people);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
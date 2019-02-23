const express = require('express');
const router = express.Router();
const fs = require('fs');

let people = null;

const port = process.env.PORT || 3000;

fs.readFile('./json-data/people.json', (err, data) => {
  if (err) console.log(err);
  people = JSON.parse(data);
});

router.get('/', (req, res) => {
  res.send(people)
});

router.get('/:id', function (req, res) {
  const user = findUserByParam(req.params.id);
  return user ? res.send(user) : res.status(404).send('No user was found by matched id');
});

router.put('/rating/:id', (req, res) => {
  const user = findUserByParam(req.params.name);
  if (!user) return res.status(404).send('No user was found by matched id');

  user.rating++;
  res.send(user);
});

function findUserByParam(param) {
  const user = people.find(person => person.id === param);
  return user ? user : false;
}

module.exports = router;
const express = require('express');
const router = express.Router();
const models = require('../models/');
const users = models.users;

router.get('/', (req, res, next) => {
  users.findAll()
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => {
      res.status(409);
    });
});

module.exports = router;

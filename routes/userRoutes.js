const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User Route');
});


router.post('/', (req, res) => {
  res.send('Create User');
});

module.exports = router;
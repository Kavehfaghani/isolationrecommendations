const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/results', (req, res, next) => {
  res.render('results');
});

module.exports = router;

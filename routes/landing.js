const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/landing', (req, res, next) => {
  res.render('landing');
});

module.exports = router;

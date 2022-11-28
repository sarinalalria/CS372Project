const express = require("express");
const router = express.Router();
const path = require('path');

router.use(express.static('./HTML'))
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});
  
router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../signup.html'));
});

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../login.html'));
});
  

module.exports = router;
const express = require("express");
const router = express.Router();

router.use(express.static('../CS372Project'))

router.use(express.static('../HTML'))

router.use(express.static('../HTML/CSS'))

const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});
  
router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../HTML/signup.html'));
});

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../HTML/login.html'));
});
  

module.exports = router;
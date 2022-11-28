const express = require("express");
const router = express.Router();


const path = require('path');

router.use(express.static('../HTML'))

router.get('/login', function(req, res) {
    res.sendFile('login.html');
});
  

module.exports = router;
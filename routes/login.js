const express = require("express");
const router = express.Router();


const path = require('path');


router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../HTML/login.html'));
});
  

module.exports = router;
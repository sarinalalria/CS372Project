const express = require("express");
const router = express.Router();


const path = require('path');


router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../HTML/signup.html'));
});


  

module.exports = router;
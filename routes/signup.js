const express = require("express");
const router = express.Router();


const path = require('path');

app.use(express.static('../HTML'))

router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../signup.html'));
});


  

module.exports = router;
const express = require("express");
const router = express.Router();


const path = require('path');

router.use(express.static(join(__dirname, '../HTML')));

router.get('/login', function(req, res) {
    res.sendFile(join(__dirname, 'HTML', 'home.html'));
});
  

module.exports = router;
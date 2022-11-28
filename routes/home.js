const express = require("express");
const router = express.Router();
const path = require('path');
const app = express();

app.use(express.static('../HTML'))

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../signup.html'));
});

module.exports = router;
module.exports = app;
const express = require("express");
const router = express.Router();
const path = require('path');


router.use(express.static('../HTML'))

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});
  
router.get("/signup", function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('signup.html');

});

module.exports = router;
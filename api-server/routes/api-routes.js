
var express = require('express');
var router = express.Router();

router.get('/ok', function(req, res) {
    res.send('okkk5555');
});

module.exports = router;

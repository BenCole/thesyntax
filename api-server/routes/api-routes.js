
var express = require('express');
var router = express.Router();

// GET language

// GET language/:id

// GET language/:id/:syntax

// GET search?q=

// POST add

router.get('/language', function(req, res) {
    res.send("language");
});

router.get('/language/:id', function(req, res) {
    res.send(req.params.id);
});

router.get('/language/:id/:syntax', function(req, res) {
    res.send(req.params.syntax);
});

router.get('/search', function(req, res) {
    res.send(req.query.q);
});

router.post('/add', function(req, res) {
    res.send('add');
});

module.exports = router;

var express = require('express');
var path = require('path');

// Express server
var app = express();
var PORT = process.env.PORT || 4488;

var router = express.Router();

var apiRoutes = require('./routes/api-routes');

app.use('/api/v1.0', apiRoutes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Start up the Node server
app.listen(PORT, function() {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

var express = require('express');
var path = require('path');

const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('Please go to nodejs.org and download version node 7.6 or greater. 👌\n ');
  process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: './api-server/.env' });

// Connect to our Database and handle any bad connections
console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 🚫 🚫 🚫 → ${err.message}`);
});

const language = require('./models/Language');
const syntax = require('./models/syntax');

// Express server
var app = express();
var PORT = process.env.PORT || 4488;

var router = express.Router();

var Syntax = mongoose.model('Syntax');

// Syntax.create({ name: 'for loop', syntax: 'forrrrr', language: '5b60758f3b8802462fd32b19' }, function (err, awesome_instance) {
//   if (err) return handleError(err);
//   // saved!
// });

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

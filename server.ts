import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const fs = require('fs');
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// * NOTE :: leave this as require() since this file copied on server start
// const apiRoutes = require('./dist/api-server/routes/api-routes');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints/
// app.get('/api/**', (req, res) => { });
// After allllll that above middleware, we finally handle our own routes!
// app.use('/api/', apiRoutes);


// *********************

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// import environmental variables from our variables.env file

if (fs.existsSync('/srv/site-config/syntax_variables.env')) {
    require('dotenv').config({ path: '/srv/site-config/syntax_variables.env' });
  } else {
      require('dotenv').config({ path: './api-server/.env' });
  }

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 🚫 🚫 🚫 → ${err.message}`);
});

const language = require('./api-server/models/Language');
const syntax = require('./api-server/models/Syntax');

// Express server


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Syntax.create({ name: 'for loop', syntax: 'forrrrr', language: '5b60758f3b8802462fd32b19' }, function (err, awesome_instance) {
//   if (err) return handleError(err);
//   // saved!
// });

const apiRoutes = require('./api-server/routes/api-routes');

app.use('/api/v1.0', apiRoutes);

// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// **********************

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

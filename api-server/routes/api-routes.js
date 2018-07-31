
var express = require('express');
var router = express.Router();

var languageController = require('../controllers/languageController');
var syntaxController = require('../controllers/syntaxController');

router.get('/language', languageController.index);

router.get('/syntax/:language', syntaxController.index);

router.get('/language/:language/:name', syntaxController.getSyntax); 

router.get('/search', syntaxController.search);

router.post('/add', function(req, res) {
    res.send('add');
});

module.exports = router;

// router.get('/language', function(req, res) {
//     res.send([
//         {
//             name: 'javascript',
//             icon: 'devicon-javascript-plain'

//         },
//         {
//             name: 'typescript',
//             icon: 'devicon-typescript-plain'
//         },
//         {
//             name: 'angular',
//             icon: 'devicon-angularjs-plain'

//         },
//         {
//             name: 'sass',
//             icon: 'devicon-sass-original'
//         },
//         {
//             name: 'angular js',
//             icon: 'devicon-angularjs-plain-wordmark'
//         },
//         {
//             name: 'css',
//             icon: 'devicon-css3-plain'
//         }
//     ]);
// });

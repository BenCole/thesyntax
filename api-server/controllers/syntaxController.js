
const mongoose = require('mongoose');
const Syntax = mongoose.model('Syntax');
const slugify = require('slugify');

exports.index = (req, res) => {
	Syntax.
		find({language: req.params.language}).
		exec(function (err, syntax) {
			res.send({
				data: syntax
			});
		});
};

exports.getSyntax = (req, res) => {
	Syntax.
		findOne({language: req.params.language, name: req.params.name}).
		exec(function(err, syntax) {
			res.send({
				data: syntax
			});
		});
};

exports.search = (req, res) => {
	Syntax.
		find({name: {"$regex": req.query.q}}).
		exec(function(err, results) {
			res.send({
				data: results
			});
		});
};

exports.add = (req, res) => {
	let obj = new Syntax(req.body);
	obj.name = slugify(req.body.label, { lower: true });

	obj.save(function(err) {
		console.log(err);
		if(err) {
			if(err.code == 11000) {
				res.status(408).send('dupe!');
				return;
			}
			res.status(400).send('Something went wrong..');
			return;
		}
		res.sendStatus(200);
	});
};

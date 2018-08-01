
const mongoose = require('mongoose');
const Syntax = mongoose.model('Syntax');

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
		find({label: {"$regex": req.query.q}}).
		exec(function(err, results) {
			res.send({
				data: results
			});
		});
};

exports.add = (req, res) => {
	const obj = new Syntax(req.body);
	console.log(req.body);

	obj.save(function() {
		res.sendStatus(200);
	});
};

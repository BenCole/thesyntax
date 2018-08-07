
const mongoose = require('mongoose');
const Language = mongoose.model('Language');

exports.index = (req, res) => {
	Language.
		find({}).
		exec(function (err, languages) {
			res.send({
				data: languages
			});
		});
};

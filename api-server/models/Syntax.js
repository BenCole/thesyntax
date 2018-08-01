const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const syntaxSchema = new Schema({
	label: {
          type: String,
	},
	name: {
		type: String
	},
	language: {
		type: String
	},
	syntax: {
		type: String
	}
});

module.exports = mongoose.model('Syntax', syntaxSchema);
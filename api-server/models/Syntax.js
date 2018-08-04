const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let syntaxSchema = new Schema({
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

syntaxSchema.index({ name: 1, language: 1 }, { unique: true });

module.exports = mongoose.model('Syntax', syntaxSchema);
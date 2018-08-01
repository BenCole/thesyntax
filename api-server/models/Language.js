const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const languageSchema = new Schema({
    name: {
        type: String,
    },
    label: {
        type: String
    },
    icon: {
        type: String
    }
});

module.exports = mongoose.model('Language', languageSchema);
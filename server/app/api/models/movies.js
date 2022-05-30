const mongoose = require('mongoose');
mongoose.set('debug', true);

//Define a schema
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
	popularity: {
		type: String,
		trim: true,
		required: true,
	},
	director: {
		type: String,
		trim: true,
		required: true,
	},
	imdb_score: {
		type: String,
		trim: true,
		required: true,
	},
	genre: {
		type: Array,
		trim: true,
		required: true,
	},
	released_on: {
		type: Date,
		trim: true,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Movie', MovieSchema)
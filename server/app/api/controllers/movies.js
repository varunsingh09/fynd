
const movieModel = require('../models/movies');
const _ = require('lodash');
module.exports = {
	getById: async function (req, res, next) {
		try {
			const movieInfo = await movieModel.findById(req.params.movieId).lean();
			if (_.isEmpty(movieInfo)) {
				return res.status(404).json({ status: "error", message: "Movie not found", data: 0 });
			}

			return res.status(200).json({ status: "success", message: "Movie found!!!", data: { movieInfo } });
		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}
	},

	getAll: async function (req, res, next) {

		try {
			const movieInfo = await movieModel.find({}).sort({ "_id": -1 }).lean();
			if (_.isEmpty(movieInfo)) {
				return res.status(404).json({ status: "error", message: "Movies not found", data: 0 });
			}

			return res.status(200).json({ status: "success", message: "Movies list found!!!", data: { movieInfo } });
		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}

	},

	updateById: async function (req, res, next) {

		try {
			const movieInfo = await movieModel.findByIdAndUpdate(req.params.movieId, {
				name: req.body.name,
				popularity: req.body.popularity,
				director: req.body.director,
				imdb_score: req.body.imdb_score,
				genre: req.body.genre
			});
			if (_.isEmpty(movieInfo)) {
				return res.status(404).json({ status: "error", message: "Movie not found", data: 0 });
			}

			return res.status(200).json({ status: "success", message: "Movie updated successfully!!!", data: { movieInfo } });

		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}

	},

	deleteById: async function (req, res, next) {
		console.log(req.params)
		try {
			const movieInfo = await movieModel.findByIdAndRemove(req.params.movieId)
			if (movieInfo) {
				return res.status(200).json({ status: "success", message: "Movie deleted successfully!!!", data: 0 });
			}
			return res.status(400).json({ status: "error", message: "Bad request!!!" });
		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}
	},

	create: async function (req, res, next) {

		try {
			const { name,
				popularity,
				director,
				imdb_score,
				genre } = req.body
			const movieInfo = await movieModel.create({
				name,
				popularity,
				director,
				imdb_score,
				genre,
			});
			if (movieInfo) {
				return res.status(200).json({ status: "success", message: "Movie added successfully!!!", data: { movieInfo } });
			}
			return res.status(400).json({ status: "error", message: "Bad request!!!" });
		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}
	},

}



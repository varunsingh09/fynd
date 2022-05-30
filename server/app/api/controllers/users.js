const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
module.exports = {
	create: async function (req, res, next) {
		try {

			const userInfoExist = await userModel.findOne({ email: req.body.email });
			if (_.isEmpty(userInfoExist)) {

				const userInfo = await userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password })
				userInfo['password'] = "XXXXXXXXX"
				return res.status(200).json({ status: "success", message: "User added successfully!!!", data: userInfo });

			} else {
				return res.status(409).json({ status: "error", message: "User already exist", });
			}
		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}
	},

	authenticate: async function (req, res, next) {

		try {
			const userInfo = await userModel.findOne({ email: Buffer.from(req.body.email, 'base64').toString()});
			if (userInfo != null &&  userInfo.password) {
				const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '200h' });

				return res.status(200).json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });

			} else {

				return res.status(404).json({ status: "error", message: "Invalid email/password!!!", data: null });

			}
		} catch (err) {
			console.log(err);
			return res.status(500).json({ msg: 'Internal server error' });
		}
	},

}

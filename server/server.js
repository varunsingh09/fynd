const express = require('express');
const logger = require('morgan');
const movies = require('./routes/movies');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3333
app.set('secretKey', 'nodeRestApi'); // jwt secret token

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


var whitelist = ['*'];//white list consumers

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};


app.use(cors())
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', function (req, res) {
  res.json({ "tutorial": "Build REST API with node.js" });
});

// public route
app.use('/api/users', users);

// private route
app.use('/api/movies', movies);

// app.use('/api/movies', validateUser, movies);

app.get('/favicon.ico', function (req, res) {
  res.sendStatus(204);
});

function validateUser(req, res, next) {
  jwt.verify(req.headers['authorization'], req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });

}

// express doesn't consider not found 404 as an error so we need to handle 404 it explicitly
// handle 404 error
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404)
    res.status(404).json({ message: "Not found" });
  else
    res.status(500).json({ message: "Something looks wrong :( !!!" });

});

app.listen(port, function () {
  console.log(`StoreLocator listening on port ${port}`);
});

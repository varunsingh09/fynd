//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/fynd';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise
module.exports = mongoose;

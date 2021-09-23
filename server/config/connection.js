const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/DigitalArt', {
  userNewUrlParser: true,
  userUnifiedTopology: true,
  userCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
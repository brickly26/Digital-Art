const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/digitalart");

module.exports = mongoose.connection;

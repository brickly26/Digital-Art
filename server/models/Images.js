const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
  image: {
    data: Buffer,
    contentType: String
  }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
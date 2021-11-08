// const { mongoose, model } = require("mongoose");
const mongoose = require("mongoose");
// const mongooseSlugPlugin = require("mongoose-slug-plugin");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    requied: true,
  },
  image: String,
});

module.exports = mongoose.model("Category", CategorySchema);

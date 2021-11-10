const mongoose = require("mongoose");
// const mongooseSlugPlugin = require("mongoose-slug-plugin");
// REVIEW: Remove commented out code

// REVIEW: Where is your slug field?
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    // REVIEW: typo: required
    requied: true,
  },
  image: String,
  recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = mongoose.model("Category", CategorySchema);

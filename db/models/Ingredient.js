const mongoose = require("mongoose");
// maybe we don't need to make a model for the ingredients
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const IngredientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: String,
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
  },
  {
    timestamps: true,
  }
);

IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Ingredient", IngredientSchema);

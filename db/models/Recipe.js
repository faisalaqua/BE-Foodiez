const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipeSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    recipe: String,
    // we can make the ingredients inside the Recipe as array or we can add them as string separate
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Recipe", RecipeSchema);

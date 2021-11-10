const Recipe = require("../../db/models/Recipe");

exports.fetchRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    console.log(error);
  }
};

exports.fetchRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    return res.json(recipes);
  } catch (error) {
    next(error);
  }
};

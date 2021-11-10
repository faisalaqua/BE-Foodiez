const Recipe = require("../../db/models/Recipe");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipe.findById(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};

exports.fetchRecipies = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    return res.json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    await req.recipe.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

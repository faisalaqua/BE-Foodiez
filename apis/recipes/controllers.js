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

exports.createRecipe = async (req, res) => {
  try {
    // req.body.owner = req.user._id;
    const newRecipe = await Recipe.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {}
};

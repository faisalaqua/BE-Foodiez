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
    const recipes = await Recipe.find()
      .populate({
        path: "owner",
        select: ["username", "email"],
      })
      .populate({
        path: "category",
        select: ["name"],
      });
    return res.json(recipes);
  } catch (error) {
    next(error);
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    if (!req.user._id.equals(req.recipe.owner._id)) {
      return next({
        status: 401,
      });
    }

    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    await req.recipe.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

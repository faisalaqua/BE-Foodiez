const Category = require("../../db/models/Category");
const Recipe = require("../../db/models/Recipe");

// fetch one category
exports.fetchCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    return res.json(category);
  } catch (error) {
    console.log(error);
  }
};

// fetch all categories
exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find(); // NEED TO POPULATE RECIPES!
    return res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Create category
exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

// Create Recipe
exports.createRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.owner = req.user._id;
    req.body.category = req.params.categoryId;
    const newRecipe = await Recipe.create(req.body);
    await Category.findByIdAndUpdate(
      { _id: req.params.categoryId },
      {
        $push: { recipies: newRecipe._id },
      }
    );
    return res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

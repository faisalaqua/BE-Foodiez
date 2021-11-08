const Category = require("../../db/models/Category");

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
exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {}
};

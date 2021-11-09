const express = require("express");
const router = express.Router();

const { fetchRecipe, fetchRecipes, createRecipe } = require("./controllers");

router.get("/:recipeId", fetchRecipe);
router.get("/", fetchRecipes);
router.post("/", createRecipe);

module.exports = router;

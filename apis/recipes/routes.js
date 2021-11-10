const express = require("express");
const router = express.Router();
const passport = require("passport");

// Required controllers
const { fetchRecipe, fetchRecipies, updateRecipe } = require("./controllers");

router.param("recipeId", async (req, res, next, recipeId) => {
  const recipe = await fetchRecipe(recipeId, next);
  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    next({ status: 404, message: "Recipe Not Found!" });
  }
});

// Routes
router.get("/:recipeId", fetchRecipe);
router.get("/", fetchRecipies);
router.put("/:recipeId", updateRecipe);

module.exports = router;

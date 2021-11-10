const express = require("express");
const router = express.Router();
const passport = require("passport");

// Required controllers
const { fetchRecipe, fetchRecipes, createRecipe } = require("./controllers");

// Routes
router.get("/:recipeId", fetchRecipe);
router.get("/", fetchRecipes);
// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   createRecipe
// );

module.exports = router;

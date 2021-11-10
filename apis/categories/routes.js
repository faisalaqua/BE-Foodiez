const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  createCategory,
  fetchCategory,
  fetchCategories,
  createRecipe,
} = require("./controllers");

// router.param("categoryId", async (req, res, next, categoryId) => {
//   const category = await fetchCategory(categoryId, next);
//   if (category) {
//     req.category = category;
//     next();
//   } else {
//     next({ status: 404, message: "Shop Not Found!" });
//   }
// });

// REVIEW: Why do you need a fetchCategory?
router.get("/:categoryId", fetchCategory);
router.get("/", fetchCategories);
router.post("/", createCategory);
router.post(
  "/:categoryId/recipies",
  passport.authenticate("jwt", { session: false }),
  createRecipe
);

module.exports = router;

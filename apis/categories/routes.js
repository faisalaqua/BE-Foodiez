const express = require("express");
const router = express.Router();
const {
  createCategory,
  fetchCategory,
  fetchCategories,
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

module.exports = router;

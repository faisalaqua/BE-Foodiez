const express = require("express");

const connectDB = require("./db/models/database");
// const morgan = require("morgan");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// Passport Strategies
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const cors = require("cors");
const path = require("path");
const app = express();
const passport = require("passport");

// Required Routes
const userRoutes = require("./apis/users/routes");
const categoriesRoutes = require("./apis/categories/routes");
const recipesRoutes = require("./apis/recipes/routes");

connectDB();

// Middleware
app.use(express.json());
// app.use(morgan("dev"));
app.use(logger);
app.use(cors());

// Passport Setup
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Routes
app.use("/api", userRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/recipes", recipesRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

//

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));

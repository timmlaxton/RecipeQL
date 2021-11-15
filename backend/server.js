const express = require("express");
const recipes = require("./data/recipes");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r._id === req.params.id);
  res.json(recipe);
});

app.listen(5000, console.log("Server is running on port 5000"));

const mongoose = "mongoose";

const recipeSchema = mongoose.Schema({
  name: String,
  category: String,
  ingredients: String,
  instructions: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

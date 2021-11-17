import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: String,
  image: String,
  category: String,
  ingredients: String,
  instructions: String,
  mainId: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

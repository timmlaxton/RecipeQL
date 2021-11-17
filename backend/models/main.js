import mongoose from "mongoose";

const mainSchema = mongoose.Schema({
  name: String,
});

const Main = mongoose.model("Main", mainSchema);

export default Main;

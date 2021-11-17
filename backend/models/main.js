const mongoose = "mongoose";

const mainSchema = mongoose.Schema({
  type: String,
});

const Main = mongoose.model("Main", mainSchema);

export default Main;

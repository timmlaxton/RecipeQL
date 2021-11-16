import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

import recipes from "./data/recipes.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// app.get("/api/recipes", (req, res) => {
//   res.json(recipes);
// });

// app.get("/api/recipes/:id", (req, res) => {
//   const recipe = recipes.find((r) => r._id === req.params.id);
//   res.json(recipe);
// });

const PORT = process.env.POP || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

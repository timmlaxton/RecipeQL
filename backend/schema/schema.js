import graphql from "graphql";
import _ from "lodash";
import Recipe from "../models/recipe.js";
import Main from "../models/main.js";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const RecipeType = new GraphQLObjectType({
  name: "Recipe",
  fields: () => ({
    id: { type: GraphQLID },
    image: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    ingredients: { type: GraphQLString },
    instructions: { type: GraphQLString },
    main: {
      type: MainType,
      resolve(parent, type) {
        return Main.findById(parent.mainId);
      },
    },
  }),
});

const MainType = new GraphQLObjectType({
  name: "Main",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return Recipe.find({ mainId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Recipe.findById(args.id);
      },
    },
    main: {
      type: MainType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Main.findById(args.id);
      },
    },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return Recipe.find({});
      },
    },
    mains: {
      type: new GraphQLList(MainType),
      resolve(parent, args) {
        return Main.find({});
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRecipe: {
      type: RecipeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        ingredients: { type: new GraphQLNonNull(GraphQLString) },
        instructions: { type: new GraphQLNonNull(GraphQLString) },
        mainId: { type: GraphQLID },
      },
      resolve(parent, args) {
        let recipe = new Recipe({
          name: args.name,
          image: args.image,
          category: args.category,
          ingredients: args.ingredients,
          instructions: args.instructions,
          mainId: args.mainId,
        });
        return recipe.save();
      },
    },
    addMain: {
      type: MainType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let main = new Main({
          name: args.name,
        });
        return main.save();
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

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
} = graphql;

const RecipeType = new GraphQLObjectType({
  name: "Recipe",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    ingredients: { type: GraphQLString },
    instructions: { type: GraphQLString },
    main: {
      type: MainType,
      resolve(parent, type) {},
    },
  }),
});

const MainType = new GraphQLObjectType({
  name: "Main",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    recipe: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {},
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {},
    },
    main: {
      type: MainType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {},
    },
    recipe: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return recipes;
      },
    },
    main: {
      type: new GraphQLList(MainType),
      resolve(parent, args) {
        return mains;
      },
    },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {},
    },
    mains: {
      type: new GraphQLList(MainType),
      resolve(parent, args) {},
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRecipe: {
      type: RecipeType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        ingredients: { type: GraphQLString },
        instructions: { type: GraphQLString },
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});

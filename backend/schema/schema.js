import graphql from "graphql";
import _ from "lodash";

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const recipes = [
  {
    name: "Spaghetti Aglio Olio e Peperoncino",
    category: "Pasta",
    ingredients: "linguine, Onion, Chillies, Garlic",
    instructions: "Boil Water",
    id: "1",
  },
  {
    name: "Bolognese ragù with pappardelle",
    category: "Pasta",
    ingredients: "Paperelle",
    instructions: "Boil Water",
    id: "2",
  },
  {
    name: "Spaghetti Aglio Olio e Peperoncino",
    category: "Pasta",
    ingredients: "linguine, Onion, Chillies, Garlic",
    instructions: "Boil Water",
    id: "3",
  },
  {
    name: "Pork meatballs with anchovies",
    category: "Mediterranean",
    ingredients: "Pork",
    instructions: "Yum yummy",
    id: "4",
  },
];

const RecipeType = new GraphQLObjectType({
  name: "Recipe",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    ingredients: { type: GraphQLString },
    instructions: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(recipes, { id: args.id });
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});

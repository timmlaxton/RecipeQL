import graphql from "graphql";
import _ from "lodash";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const recipes = [
  {
    name: "Spaghetti Aglio Olio e Peperoncino",
    category: "Pasta",
    ingredients: "linguine, Onion, Chillies, Garlic",
    instructions: "Boil Water",
    id: "1",
    mainId: "1",
  },
  {
    name: "Bolognese ragù with pappardelle",
    category: "Pasta",
    ingredients: "Paperelle",
    instructions: "Boil Water",
    id: "2",
    mainId: "2",
  },
  {
    name: "Pork meatballs with anchovies",
    category: "Mediterranean",
    ingredients: "Pork",
    instructions: "Yum yummy",
    id: "3",
    mainId: "3",
  },
  {
    name: "Taiwanese Seabass",
    category: "Asian",
    ingredients: "Seabass",
    instructions: "Yum yummy",
    id: "4",
    mainId: "4",
  },
  {
    name: "Chicken with Lemon",
    category: "Mediterranean",
    ingredients: "garlic",
    instructions: "Yum yummy",
    id: "5",
    mainId: "5",
  },
  {
    name: "Roat Chicken",
    category: "Mediterranean",
    ingredients: "chillies, rosemary",
    instructions: "Yum yummy",
    id: "6",
    mainId: "5",
  },
  {
    name: "Roast Seabass",
    category: "Asian",
    ingredients: "ginger",
    instructions: "Yum yummy",
    id: "7",
    mainId: "4",
  },
  {
    name: "Roast Pork",
    category: "Mediterranean",
    ingredients: "Carrots",
    instructions: "Yum yummy",
    id: "8",
    mainId: "3",
  },
  {
    name: "Roast Beef",
    category: "Mediterranean",
    ingredients: "Olive oil",
    instructions: "Yum yummy",
    id: "9",
    mainId: "2",
  },
  {
    name: "Roast Vegetables",
    category: "Mediterranean",
    ingredients: "thyme",
    instructions: "Yum yummy",
    id: "10",
    mainId: "1",
  },
];

const mains = [
  {
    type: "Vegetarian",
    id: "1",
  },
  {
    type: "Beef",
    id: "2",
  },
  {
    type: "Pork",
    id: "3",
  },
  {
    type: "Fish",
    id: "4",
  },
  {
    type: "Chicken",
    id: "5",
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
    main: {
      type: MainType,
      resolve(parent, type) {
        return _.find(mains, { id: parent.mainId });
      },
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
      resolve(parent, args) {
        return _.filter(recipes, { mainId: parent.id });
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
        return _.find(recipes, { id: args.id });
      },
    },
    main: {
      type: MainType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(mains, { id: args.id });
      },
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

export default new GraphQLSchema({
  query: RootQuery,
});

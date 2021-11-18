export const GRAPHQL_API = "http://localhost:5000/graphql";

export const GET_RECIPES_QUERY = `
{
  recipes {
    name
    id
    name
    image
    category
    ingredients
    instructions
  }
}
`;

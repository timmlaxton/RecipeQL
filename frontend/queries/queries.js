import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const GET_RECIPES_QUERY = gql`
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

export { GET_RECIPES_QUERY };

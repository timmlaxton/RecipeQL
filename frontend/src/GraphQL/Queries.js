import { gql } from "@apollo/client";

export const LOAD_RECIPES = gql`
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

export const LOAD_MAINS = gql`
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

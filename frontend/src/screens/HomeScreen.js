import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, gql } from "@apollo/client";
import { LOAD_RECIPES } from "../GraphQL/Queries";
import styled from "styled-components";
import Recipe from "../components/Recipe";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const { error, loading, data } = useQuery(LOAD_RECIPES);

  useEffect(() => {
    if (data) {
      setRecipes(data.recipes);
    }
  }, [data]);
  return (
    <>
      <RecipeList>
        <Recipes>
          {recipes.map((recipe) => (
            // <h3>{recipe.name}</h3>

            <Recipe recipe={recipe} key={recipe.id} />
          ))}
        </Recipes>
      </RecipeList>
    </>
  );
};

const RecipeList = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

const Recipes = styled.div`
  min-height: 30vh;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export default HomeScreen;

import React from "react";
import styled from "styled-components";
import Recipe from "../components/Recipe";
import recipes from "../recipes";

const HomeScreen = () => {
  return (
    <>
      <RecipeList>
        <Recipes>
          {recipes.map((recipe) => (
            // <h3>{recipe.name}</h3>
            <Recipe recipe={recipe} />
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
  display: flex;
  flex-wrap: wrap;
`;

export default HomeScreen;

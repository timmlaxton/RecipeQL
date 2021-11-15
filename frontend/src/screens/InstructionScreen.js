import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import recipes from "../recipes";

const InstructionScreen = () => {
  const match = useParams();
  const recipe = recipes.find((r) => r._id === match.id);

  return (
    <>
      <StyledCard>
        <h3>{recipe.name}</h3>
        <img src={recipe.image} alt="pop" />

        <ul>{recipe.ingredients}</ul>

        <h3>{recipe.instructions}</h3>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 1rem 1rem;

  a {
    text-decoration: none !important;
    color: #000;
  }
  h3 {
    color: #000;
  }

  img {
    width: 80vw;
    height: 80vh;
    object-fit: cover;
  }
`;

export default InstructionScreen;

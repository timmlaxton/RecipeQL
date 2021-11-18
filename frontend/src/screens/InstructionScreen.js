import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery, gql } from "@apollo/client";
import { LOAD_RECIPES } from "../GraphQL/Queries";
import styled from "styled-components";

const InstructionScreen = () => {
  const [recipe, setRecipe] = useState({});

  const { error, loading, data } = useQuery(LOAD_RECIPES);

  useEffect(() => {
    if (data) {
      setRecipe(data.recipes);
    }
  }, [data]);

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

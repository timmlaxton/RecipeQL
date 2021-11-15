import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const InstructionScreen = () => {
  const [recipe, setRecipe] = useState({});

  const match = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await axios.get(`/api/recipes/${match.id}`);
      setRecipe(data);
    };

    fetchRecipe();
  });

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

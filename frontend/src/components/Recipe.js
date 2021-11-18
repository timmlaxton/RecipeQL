import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Recipe = ({ recipe }) => {
  return (
    <StyledCard>
      <Link to={`/recipe/${recipe._id}`}>
        <img src="../images/chicken-lemon.jpeg" alt="pop" />
        <h3>{recipe.name}</h3>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  min-height: 5%;
  width: 10%;
  margin-left: 1px;
  margin-bottom: 30px;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem 1rem;
  overflow: hidden;
  color: #fff;
  text-decoration: none !important;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none !important;
    color: #000;
  }

  img {
    width: 90%;
    height: 20vh;
    object-fit: cover;
  }
`;

export default Recipe;

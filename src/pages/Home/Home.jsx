import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container, Stack } from "../../components/UI";
import { useRecipe } from "../../context/Recipe";
import { HomeContainer, IconButton, StyledCard } from "./Home.styles";

import { MdOutlineFavoriteBorder } from "react-icons/md";

const Home = () => {
  const { recipes } = useRecipe();

  return (
    <HomeContainer>
      <Container>
        <Header />
        <Stack gap="1rem" justify="center">
          {recipes.map((recipe, index) => (
            <StyledCard
              key={index.toString()}
              shadow
              title={recipe.recipe.label}
              bg="#efefef"
            >
              <IconButton>
                <MdOutlineFavoriteBorder id="fav-icon" />{" "}
              </IconButton>
              <h5> {recipe.recipe.label}</h5>
              <Link to="details" state={{ recipe }}>
                {" "}
                <img src={recipe.recipe.image} alt="" />{" "}
              </Link>
            </StyledCard>
          ))}
        </Stack>
      </Container>
    </HomeContainer>
  );
};

export default Home;

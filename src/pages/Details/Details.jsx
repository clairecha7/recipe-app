import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Container, Stack } from "../../components/UI";
import {
  Button,
  DetailsContainer,
  List,
  Section,
  StyledImage,
  Title,
} from "./Details.styles";

const Details = () => {
  const {
    state: {
      recipe: { recipe },
    },
  } = useLocation();
  console.log(recipe);

  return (
    <Container>
      <DetailsContainer>
        <Card shadow bg="#fefefe">
          <Stack
            direction="row"
            gap="1px"
            justify="space-between"
            align="center"
          >
            <StyledImage src={recipe.image} />

            <div className="right-side">
              <Title> {recipe.label}</Title>
              <Card bg="#f1f1f1" border="1px solid #ccc">
                <h3> Ingredients</h3>
                <hr />
                <List>
                  {recipe.ingredients.map((ing, index) => (
                    <li key={index.toString()}> {ing.text}</li>
                  ))}
                </List>
              </Card>
            </div>
          </Stack>

          <Card bg="#f1f1f1" border="1px solid #ccc" id="nutrients-card">
            <Stack direction="row" gap="2rem" justify="flex-start">
              <Section>
                <Title>{recipe.calories.toFixed(1)} Cal.</Title>
              </Section>
              <Section>
                <Stack direction="row" justify="space-between">
                  <p> PROTEIN</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.PROCNT.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> FAT</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.FAT.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.FAT.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> CARBS</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients["CHOCDF.net"].quantity.toFixed(
                      2
                    )}{" "}
                    {recipe.totalNutrients["CHOCDF.net"].unit}
                  </h4>
                </Stack>
              </Section>
              <Section>
                <Stack direction="row" justify="space-between">
                  <p> Colesterol</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.CHOLE.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.CHOLE.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> Sodium</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.NA.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.NA.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> Calcium</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.CA.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.CA.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> Magnesium</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.MG.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.MG.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> Potassium</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.K.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.K.unit}
                  </h4>
                </Stack>
                <Stack direction="row" justify="space-between">
                  <p> Iron</p>
                  <h4>
                    {" "}
                    {recipe.totalNutrients.FE.quantity.toFixed(2)}{" "}
                    {recipe.totalNutrients.FE.unit}
                  </h4>
                </Stack>
              </Section>
            </Stack>
          </Card>

          <div className="text-center">
            <Button to={-1}> Back</Button>
          </div>
        </Card>
      </DetailsContainer>
    </Container>
  );
};

export default Details;

import { Field, Form, Formik } from "formik";
import React from "react";
import { Card, Stack } from "../UI";
import { Button, HeaderContainer } from "./Header.styles";
import { MdSearch } from "react-icons/md";
import { useRecipe } from "../../context/Recipe";

const Header = () => {
  const { mealTypes, getData, recipes } = useRecipe();
  const initialValues = {
    query: "",
    meal: mealTypes[0].toLowerCase(),
  };

  const submitHandler = (values) => {
    const { query, meal } = values;
    getData(query, meal);
    console.log(recipes);
  };
  return (
    <HeaderContainer>
      <h2 className="text-secondary">Recipe App</h2>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <Card bg="#efefef" style={{ padding: "1rem" }} shadow>
            <Stack gap="1rem" className="form-fields">
              <Field
                type="search"
                placeholder="Eg. Pizza"
                name="query"
                style={{ flex: 1 }}
              />
              <Field as="select" name="meal">
                {mealTypes.map((meal, index) => (
                  <option value={meal.toLowerCase()} key={index.toString()}>
                    {meal}
                  </option>
                ))}
              </Field>
              <Button>
                <Stack gap="0.5rem" align="center" justify="center">
                  <MdSearch className="searchIcon" />
                  <span> Search</span>
                </Stack>
              </Button>
            </Stack>
          </Card>
        </Form>
      </Formik>
    </HeaderContainer>
  );
};

export default Header;

import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/UI";
import { useAuth } from "../../context/Auth";
import { Button, Error, LoginContainer } from "./Login.Styles";
import * as Yup from "yup";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const initialValues = { username: "", pasword: "" };

  const submitHandler = (values) => {
    console.log(values);
    login();
    navigate("/");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Minimum 5 characters"),
  });

  return (
    <LoginContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Card bg="#efefef" shadow>
          <Form>
            <h1 className="text-center">Login</h1>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
            />
            <Error>
              {" "}
              <ErrorMessage name="username" />
            </Error>

            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            <Error>
              {" "}
              <ErrorMessage name="password" />
            </Error>
            <div className="text-center">
              <Button> Login</Button>
            </div>
          </Form>
        </Card>
      </Formik>
    </LoginContainer>
  );
};

export default Login;

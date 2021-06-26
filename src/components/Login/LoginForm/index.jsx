import React from "react";
import { Formik } from "formik";
import submitForm from "./submitForm";
import { Container, Form, Button } from "react-bootstrap";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^@]+@[^\s@]+\.[^@]{2,}$/i;
  if (!values.email) {
    errors.email = "Please provide an email";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "A password is required";
  }
  return errors;
};

export default function LoginForm() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleSubmit,
          handleChange,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
          isSubmitting,
        } = formik;
        return (
          <Container className="text-center">
            <h1>Log in to continue</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                className="mt-3 btn btn-primary"
                type="submit"
                disabled={!(dirty && isValid) || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit!"}
              </Button>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}

import React from "react";
import { Formik } from "formik";
import { Container, Form, Button } from "react-bootstrap";

const validate = (values) => {
  const errors = {};
  //Pedimos que se busquen al menos dos letras para evitar traer una cantidad innecesaria de héroes desde la api
  if (values.name.length < 2) {
    errors.name = "Please write at least 2 letters";
  }
  return errors;
};

export default function NewHeroForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{ name: "" }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        const {
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
          isValid,
          dirty,
          isSubmitting,
        } = formik;

        return (
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1>Search your hero!</h1>
            <Form onSubmit={handleSubmit} className="w-100 text-center">
              <Form.Group>
                <Form.Label>Hero's name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.name && !errors.name}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                className="btn btn-primary m-3"
                type="submit"
                disabled={!(dirty && isValid) || isSubmitting}
              >
                {isSubmitting ? "Searching..." : "Search!"}
              </Button>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}

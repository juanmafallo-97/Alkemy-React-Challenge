import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row, Alert } from "react-bootstrap";
import NewHeroForm from "../components/NewHero/NewHeroForm";
import Results from "../components/NewHero/Results";
import TeamValidation from "../components/NewHero/TeamValidation";

export default function NewHero() {
  const [responseHeroes, setResponseHeroes] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .get(`api/3801818676583473/search/${values.name}`)
      .then((res) => {
        const heroes = res.data.results;
        const error = res.data.error;
        setSubmitting(false);
        resetForm();
        heroes && setResponseHeroes(heroes);
        error ? setError(error) : setError(null);
      })
      .catch((err) => {
        setError(`An error has occurred: ${err.message}`);
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <Container>
      <Row>
        <Col sm={10} md={8} lg={6} xl={5} className="m-auto">
          <NewHeroForm handleSubmit={handleSubmit} />
          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}
          <TeamValidation />
        </Col>
      </Row>
      {responseHeroes[0] && <Results heroes={responseHeroes} />}
    </Container>
  );
}

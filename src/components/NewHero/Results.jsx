import React from "react";
import { Container } from "react-bootstrap";
import HeroCard from "../HeroCard";

export default function Results({ heroes }) {
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {heroes.map((hero) => {
        return <HeroCard hero={hero} key={hero.id} />;
      })}
    </Container>
  );
}

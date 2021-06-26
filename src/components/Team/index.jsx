import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeroCard from "../HeroCard";
import TeamStats from "./TeamStats";
import "./styles.css";

export default function Team() {
  const heroes = useSelector((state) => state.heroes);

  return (
    <Container>
      <Row>
        <Col className="text-center">
          {Object.keys(heroes).length ? (
            <>
              <h2 className="section-title">Team Stats</h2>
              <TeamStats heroes={heroes} />
              <h2 className="section-title">Team Members</h2>
              <Container className="d-flex flex-wrap justify-content-center">
                {Object.keys(heroes).map((id) => {
                  return <HeroCard key={id} hero={heroes[id]} />;
                })}
              </Container>
            </>
          ) : (
            <>
              <h4>You don't have a team yet!</h4>
              <Button>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="new-hero"
                >
                  Add a hero!
                </Link>
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

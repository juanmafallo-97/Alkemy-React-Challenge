import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HeroModal from "./HeroModal";
import "./styles.css";

export default function HeroCard({ hero }) {
  const dispatch = useDispatch();
  const currentHeroes = useSelector((state) => state.heroes);

  const [modalShow, setModalShow] = useState(false);

  const alignment = hero.biography.alignment;

  const sameAlignmentHeroes = Object.keys(currentHeroes).filter((id) => {
    return currentHeroes[id].biography.alignment === alignment;
  }).length;

  const addHero = (hero) => {
    dispatch({ type: "HERO_ADDED", payload: hero });
  };

  const removeHero = (id) => {
    dispatch({ type: "HERO_REMOVED", payload: id });
  };

  return (
    <>
      <Card
        style={{ width: "220px" }}
        className={
          alignment === "good"
            ? "m-1 border border-3 border-success"
            : "m-1 border border-3 border-danger"
        }
      >
        <Card.Img variant="top" src={hero.image.url} className="card-image" />
        <div className="hero-title">
          <Card.Title className="text-center mt-3">{hero.name}</Card.Title>
          <p>Allignment: {alignment}</p>
        </div>
        <Card.Body className="p-1">
          <div className="text-center mb-2">
            <ul className="list-group">
              {Object.keys(hero.powerstats).map((key) => {
                return (
                  <li key={key} className="list-group-item p-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)} :{" "}
                    {hero.powerstats[key] !== "null"
                      ? hero.powerstats[key]
                      : "unknown"}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="d-flex justify-content-evenly">
            {currentHeroes[hero.id] ? (
              <Button variant="danger" onClick={() => removeHero(hero.id)}>
                Remove
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => addHero(hero)}
                disabled={sameAlignmentHeroes >= 3}
                title={
                  sameAlignmentHeroes >= 3
                    ? `You can't add another ${alignment} hero`
                    : "Add hero to the team"
                }
              >
                Add to team
              </Button>
            )}
            <Button variant="primary" onClick={() => setModalShow(true)}>
              + Info
            </Button>
          </div>
        </Card.Body>
      </Card>
      <HeroModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        hero={hero}
      />
    </>
  );
}

import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

//Usamos este componente para advertir al usuario en caso de que su equipo ya esté completo, o haya agregado ya los 3 héroes buenos o malos
export default function TeamValidation() {
  const heroes = useSelector((state) => state.heroes);

  const goodHeroes = Object.keys(heroes).filter((id) => {
    return heroes[id].biography.alignment === "good";
  }).length;

  const badHeroes = Object.keys(heroes).filter((id) => {
    return heroes[id].biography.alignment === "bad";
  }).length;

  const renderWarning = () => {
    if (Object.keys(heroes).length > 5) {
      return (
        <Alert variant="warning" className="text-center">
          Your team is full
        </Alert>
      );
    } else {
      if (goodHeroes > 2) {
        return (
          <Alert variant="warning" className="text-center">
            You won´t be able to add more good heroes
          </Alert>
        );
      }
      if (badHeroes > 2) {
        return (
          <Alert variant="warning" className="text-center">
            You wont be able to add more bad heroes
          </Alert>
        );
      }
    }
    return (
      <Alert variant="secondary" className="text-center">
        Remember: your team can't have more than 3 good members and 3 bad
        members
      </Alert>
    );
  };

  return <div className="m-2">{renderWarning()}</div>;
}

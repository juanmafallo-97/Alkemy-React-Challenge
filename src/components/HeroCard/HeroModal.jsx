import React from "react";
import { Modal, Button } from "react-bootstrap";
import DetailsItem from "./DetailsItem";

export default function HeroModal(props) {
  const { hero } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="p-2">
        <Modal.Title className="m-auto">{hero.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-2">
          <ul className="list-group">
            <DetailsItem
              hero={hero}
              category={"biography"}
              property={"full-name"}
              propertyName={"Full Name"}
            />
            <DetailsItem
              hero={hero}
              category={"biography"}
              property={"aliases"}
              propertyName={"Aliases"}
            />
            <DetailsItem
              hero={hero}
              category={"appearance"}
              property={"height"}
              propertyName={"Height"}
            />
            <DetailsItem
              hero={hero}
              category={"appearance"}
              property={"weight"}
              propertyName={"Weight"}
            />
            <DetailsItem
              hero={hero}
              category={"appearance"}
              property={"eye-color"}
              propertyName={"Eye Color"}
            />
            <DetailsItem
              hero={hero}
              category={"appearance"}
              property={"hair-color"}
              propertyName={"Hair Color"}
            />
            <DetailsItem
              hero={hero}
              category={"work"}
              property={"base"}
              propertyName={"Place of Work"}
            />
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer className="p-1">
        <Button className="m-auto" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

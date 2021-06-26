import React from "react";
import { Link } from "react-router-dom";
import { Container, Alert, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function IsLoggedIn() {
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.clear();
    dispatch({ type: "LOGGED_OUT" });
  };
  return (
    <Container className="text-center mt-4">
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={8} lg={6} xl={4}>
          <Alert variant="primary" className="m-3">
            You are logged in!
          </Alert>
          <Button className="m-2">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home Page
            </Link>
          </Button>
          <Button className="m-2" onClick={logOut}>
            Log out
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

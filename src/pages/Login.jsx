import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoginForm from "../components/Login/LoginForm/";
import IsLoggedIn from "../components/Login/IsLoggedIn";

export default function Login() {
  const authState = useSelector((state) => state.auth);
  const loggedIn = authState.loggedIn;
  return loggedIn ? (
    <IsLoggedIn />
  ) : (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={8} lg={6} xl={4}>
          <LoginForm />
          {authState.error && <Alert variant="danger">{authState.error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
}

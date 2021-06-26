import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" className="p-0 navbar-cont mb-2">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Team
        </Link>
        <Link to="/new-hero" className="nav-link">
          New Hero
        </Link>
        <Link to="/login" className="nav-link">
          Session
        </Link>
      </Nav>
    </Navbar>
  );
}

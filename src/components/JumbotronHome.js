import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function JumbotronHome() {
  return (
    <Jumbotron
      fluid
      className="jumbotron-home"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <Container className="jumbotron-container">
        <div className="jumbotron-overlay">
          <h1>PokéXchange</h1>
          <p>Start trading today.</p>
          <Link to="/cards" className="jumbotron-btn">
            GO
          </Link>
        </div>
      </Container>
    </Jumbotron>
  );
}

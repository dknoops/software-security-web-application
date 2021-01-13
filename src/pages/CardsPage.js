import { useState } from "react";
import { Link } from "react-router-dom";
import GetCards from "../api/Get-Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Cards() {
  const [data, setData] = useState([]);

  return (
    <Container id="cards-container">
      <h1 className="page-title">Cards</h1>
      <Row>
        <GetCards data={data} setData={setData} />
      </Row>
      <Button id="post-card-btn">
        <Link to="submit-card">Post your own card</Link>
      </Button>
    </Container>
  );
}

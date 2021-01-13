import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProfileCard({ id, name, image }) {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={"/images/" + image} />
      <Card.Body>
        <Row>
          <Col>
            <Link to={`/cards/${id}/edit`}>
              <Button variant="primary" className="profile-btn">
                Edit
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to={`/cards/${id}/delete`}>
              <Button variant="danger" className="profile-btn">
                Delete
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function JumbotronHome({ name, description, image }) {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={"/images/" + image} />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

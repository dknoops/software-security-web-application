import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GetUserCards from "../api/Get-User-Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [cards, setCards] = useState([]);

  if (isLoading) {
    return <p className="black">Loading ...</p>;
  }

  return (
    isAuthenticated && (
      <Container>
        <div className="user-info">
          <h3>Profile Information</h3>
          <Row className="pt-3">
            <Col xs={2} className="text-center">
              <img src={user.picture} alt={user.name} />
            </Col>
            <Col xs={10} className="my-auto">
              <p>
                <b>Name:</b> {user.name}
              </p>
              <p>
                <b>E-mail:</b> {user.email}
              </p>
            </Col>
          </Row>
        </div>
        <Row className="my-cards">
          <GetUserCards cards={cards} setCards={setCards} />
        </Row>
      </Container>
    )
  );
};

export default Profile;

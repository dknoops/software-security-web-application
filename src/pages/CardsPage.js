import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllCards = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(
          "https://api-software-security.dknoops.xyz/cards",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.log(e.message);
      }
    };

    getAllCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1 className="page-title">Cards</h1>
      <Row>
        {data !== undefined &&
          data.map((card, i) => (
            <Col md>
              <Card
                key={i}
                name={card.name}
                description={card.description}
                image={card.image}
              />
            </Col>
          ))}
      </Row>
      <p className="page-text">More coming soon...</p>
    </Container>
  );
};

export default Cards;

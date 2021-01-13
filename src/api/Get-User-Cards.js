import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import ProfileCard from "../components/ProfileCard";

export default function GetCards(props) {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    api();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const api = async () => {
    const accessToken = await getAccessTokenSilently();
    const header = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    axios.get(`${process.env.REACT_APP_API_URL}/user-cards`, header).then(
      (response) => {
        //console.log(response);
        props.setCards(response.data);
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return (
    <>
      {props.cards.length !== 0 &&
        props.cards.map((card, i) => (
          <Col xs="3" key={i}>
            <ProfileCard name={card.name} image={card.image} id={card.id} />
          </Col>
        ))}
    </>
  );
}

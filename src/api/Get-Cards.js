import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";
import Button from "react-bootstrap/Button";

export default function GetCards(props) {
  useEffect(() => {
    api();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const api = async () => {
    axios.get(`${process.env.REACT_APP_API_URL}/cards`).then(
      (response) => {
        //console.log(response);
        props.setData(response.data);
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return (
    <>
      {props.data.length !== 0 &&
        !props.admin &&
        props.data.map((card, i) => (
          <Col xs="3" key={i}>
            <Card name={card.name} image={card.image} />
          </Col>
        ))}
      {props.data.length !== 0 &&
        props.admin &&
        props.data.map((card, i) => (
          <tr key={i}>
            <td>{card.id}</td>
            <td>{card.name}</td>
            <td>{card.image}</td>
            <td>
              <Link to={`/admin/${card.id}/delete`}>
                <Button variant="danger" className="profile-btn">
                  Delete
                </Button>
              </Link>
            </td>
          </tr>
        ))}
    </>
  );
}

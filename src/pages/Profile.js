import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GetUserCards from "../api/Get-User-Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Profile = () => {
  const {
    user,
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  const [cards, setCards] = useState([]);
  const [me, setMe] = useState({});

  useEffect(() => {
    const api = async () => {
      const accessToken = await getAccessTokenSilently();
      const header = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
      };

      axios.get(`${process.env.REACT_APP_API_URL}/me`, header).then(
        (response) => {
          //console.log(response);
          setMe(response.data);
        },
        (error) => {
          //console.log(error);
        }
      );
    };
    api();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p className="black">Loading ...</p>;
  }

  function downloadProfile() {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/json;charset=utf-8," + encodeURIComponent(fileOutput())
    );
    element.setAttribute("download", "Profile-Data.json");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function fileOutput() {
    let output = { Auth0: user, Database: me };

    // for (const prop in user) {
    //   output += JSON.stringify(prop);
    //   output += ": ";
    //   output += user[prop];
    //   output += "\r\n";
    // }
    // output += "----------------------------------------------\r\n";
    // for (const prop in me) {
    //   output += JSON.stringify(prop);
    //   output += ": ";
    //   output += me[prop];
    //   output += "\r\n";
    // }

    return JSON.stringify(output);
  }

  return (
    isAuthenticated && (
      <Container>
        <div className="user-info">
          <h3>Profile Information</h3>
          <Row className="pt-3">
            <Col xs={2} className="text-center my-auto">
              <img src={user.picture} alt={user.name} />
            </Col>
            <Col xs={8} className="my-auto">
              <p>
                <b>Name:</b> {me.name}
              </p>
              <p>
                <b>E-mail:</b> {user.email}
              </p>
            </Col>
            <Col>
              <Link to={`/profile/${me.name}/edit`}>
                <Button variant="primary" className="profile-btn mb-2">
                  Edit Account
                </Button>
              </Link>
              <Link to={`/profile/${me.name}/delete`}>
                <Button variant="danger" className="profile-btn mb-2">
                  Delete Account
                </Button>
              </Link>
              <Button
                variant="success"
                className="profile-btn"
                onClick={downloadProfile}
              >
                Download Profile
              </Button>
            </Col>
          </Row>
        </div>
        <Row className="my-cards">
          <GetUserCards cards={cards} setCards={setCards} />
        </Row>
        <p className="verify-email mt-3 mb-5">
          <b>Consult privacy policy in case of objection.</b>
        </p>
      </Container>
    )
  );
};

export default Profile;

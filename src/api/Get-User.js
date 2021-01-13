import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

export default function GetIdCards() {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);

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

    axios.get(`${process.env.REACT_APP_API_URL}/me`, header).then(
      (response) => {
        //console.log(response);
        setData(response.data);
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return (
    <>
      {data.length !== 0 && data.admin === 1 && (
        <Nav.Link href="/admin">Admin</Nav.Link>
      )}
    </>
  );
}

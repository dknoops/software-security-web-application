import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function GetIdCards(props) {
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

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
        props.setAdmin(response.data.admin);
        if (response.data.admin === 0) {
          history.push("/");
        }
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return <></>;
}

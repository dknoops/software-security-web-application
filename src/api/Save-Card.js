import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SaveCard(props) {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const data = {
    name: props.data.name,
    image: "card-back.png",
  };

  useEffect(() => {
    save_card();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save_card = async () => {
    const accessToken = await getAccessTokenSilently();
    const header = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    axios.post(`${process.env.REACT_APP_API_URL}/cards`, data, header).then(
      (response) => {
        history.push("/cards");
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return <></>;
}

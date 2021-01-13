import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function UpdateCard(props) {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const data = {
    name: props.data.name,
  };

  useEffect(() => {
    update_card();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update_card = async () => {
    const accessToken = await getAccessTokenSilently();
    const header = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/cards/${id}`, data, header)
      .then(
        (response) => {
          history.push("/profile");
        },
        (error) => {
          //console.log(error);
        }
      );
  };

  return <></>;
}

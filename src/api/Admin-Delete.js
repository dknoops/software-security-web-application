import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function AdminDelete() {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams();

  useEffect(() => {
    delete_card();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delete_card = async () => {
    const accessToken = await getAccessTokenSilently();
    const header = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    axios.delete(`${process.env.REACT_APP_API_URL}/cards/${id}`, header).then(
      (response) => {
        //console.log(response.data);
        history.push("/admin");
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return <></>;
}

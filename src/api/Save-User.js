import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SaveUser() {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    save_user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save_user = async () => {
    const accessToken = await getAccessTokenSilently();
    const header = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios.post(`${process.env.REACT_APP_API_URL}/users`, {}, header).then(
      (response) => {
        //console.log(response);
        history.push("/");
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return <></>;
}

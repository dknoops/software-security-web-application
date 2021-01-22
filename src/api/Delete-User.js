import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function DeleteUser(props) {
  const history = useHistory();
  const { getAccessTokenSilently, logout } = useAuth0();

  useEffect(() => {
    delete_user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delete_user = async () => {
    const accessToken = await getAccessTokenSilently();
    const header = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    axios.delete(`${process.env.REACT_APP_API_URL}/users`, header).then(
      (response) => {
        //console.log(response.data);
        logout({ returnTo: window.location.origin });
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return <></>;
}

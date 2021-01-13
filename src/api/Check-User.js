import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import SaveUser from "./Save-User";

export default function CheckUser() {
  const history = useHistory();
  const { getAccessTokenSilently, isLoading, user } = useAuth0();
  const [isDataRetrieved, setDataRetrieved] = useState(false);

  if (!isLoading && !isDataRetrieved) {
    getAccessTokenSilently().then((accessToken) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          //console.log(response);
          history.push("/");
        })
        .catch((error) => {
          setDataRetrieved(true);
          //console.log(error);
        });
    });
  }

  return <>{isDataRetrieved ? <SaveUser data={user} /> : <></>}</>;
}

import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditCard from "../pages/EditCard";
import DeleteCard from "../api/Delete-Card";

export default function GetIdCards() {
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const { operation } = useParams();
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

    axios.get(`${process.env.REACT_APP_API_URL}/cards/${id}`, header).then(
      (response) => {
        console.log(response);
        setData(response.data);
      },
      (error) => {
        //console.log(error);
      }
    );
  };

  return (
    <>
      {data.length !== 0 && operation === "edit" && <EditCard data={data} />}
      {data.length !== 0 && operation === "delete" && (
        <DeleteCard id={data[0].id} />
      )}
    </>
  );
}

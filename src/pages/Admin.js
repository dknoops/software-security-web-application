import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AdminCheck from "../api/Admin-Check";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import GetCards from "../api/Get-Cards";

export default function Admin() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState([]);
  const [isAdmin, setAdmin] = useState(false);

  return (
    <>
      {isAuthenticated && <AdminCheck admin={true} setAdmin={setAdmin} />}
      {isAdmin === 1 && (
        <Container>
          <h3>Cards</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image Path</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <GetCards admin={true} data={data} setData={setData} />
            </tbody>
          </Table>
        </Container>
      )}
      {!isLoading && isAdmin !== 1 && (
        <p className="no-permission">
          You do not have the permissions to access this page.
        </p>
      )}
    </>
  );
}

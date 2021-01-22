import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import UpdateProfile from "../api/Update-Profile";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditProfile() {
  const { user } = useAuth0();
  const { name } = useParams();
  const [onSubmit, setOnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "" || name,
    email: "" || user.email,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOnSubmit(true);
  };

  return (
    <div id="form-bg">
      <Container>
        <Form
          id="edit-profile-form"
          className="my-form"
          onSubmit={handleSubmit}
        >
          <h3>Edit your Profile</h3>
          <Form.Group controlId="form-title">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="form-title">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" value={formData.email} disabled />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="register-button button"
          >
            Update
          </Button>
        </Form>
        {onSubmit && <UpdateProfile data={formData} sub={user.sub} />}
      </Container>
    </div>
  );
}

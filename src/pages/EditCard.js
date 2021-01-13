import { useState } from "react";
import UpdateCard from "../api/Update-Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditCard(props) {
  const [onSubmit, setOnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "" || props.data[0].name,
    image: "" || props.data[0].image,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOnSubmit(true);
  };

  return (
    <div
      id="form-bg"
      style={{ backgroundImage: "url(images/submit-card-bg.jpg)" }}
    >
      <Container>
        <Form id="register-form" className="my-form" onSubmit={handleSubmit}>
          <h3>Edit your card</h3>
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
            <Form.Label>Image Path</Form.Label>
            <Form.Control type="text" value={formData.image} disabled />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="register-button button"
          >
            Update
          </Button>
        </Form>
        {onSubmit && <UpdateCard data={formData} />}
      </Container>
    </div>
  );
}

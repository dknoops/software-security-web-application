import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SubmitCard from "../api/Save-Card";

export default function Register() {
  const [onSubmit, setOnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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
          <h3>Submit your own card</h3>
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
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.File id="form-image" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="register-button button"
          >
            Submit
          </Button>
        </Form>
        {onSubmit && <SubmitCard data={formData} />}
      </Container>
    </div>
  );
}

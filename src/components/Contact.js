import { Container, Row, Col, Form, Button , Collapse} from "react-bootstrap";
import { useState } from "react";

const ContactUs = () => {
  const [open, setOpen] = useState(false);


  return (
    <Container>
      
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Contact Us</h1>
          <p>
            Have a question or want to give us feedback? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>

          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        size="lg"
        variant="outline-dark"
        style={{ marginBottom: "10px" , marginLeft: "10px" }}
        className="d-sm-inline-block"
      >
        Click to Subscribe,  more Greatness!
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter your message" />
            </Form.Group>

            <Button style={{ marginBottom: "10px" , marginTop: "10px" }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
      </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer  bg="primary"
    variant="dark"
    expand="lg"
    className="mt-5  mb-2 bg-primary text-white justify-content-around"
    collapseOnSelect>
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          <Col xs={12}>
            <p className="text-center">
            <h4>Let's get started on something great</h4>
            <h6>Join over 1000+ writers already growing with E-Post</h6>
         
            <Button href="/contact" variant="outline-dark" size="lg">
          Get Started
        </Button>{' '}
        < hr/>
              <h4  className="mt-2">Copyright © 2023</h4>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

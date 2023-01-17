import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12}>
            <p className="text-center">
              <h4>Copyright © 2023</h4>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

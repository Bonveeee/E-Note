import { Container, Row, Col } from "react-bootstrap";

    const Footer = () => {
    return (
    <footer>
    <Container>
    <Row className="align-items-center justify-content-center">
    <Col xs={12}>
    <p className="text-center">Copyright © 2023</p>
        </Col>
    </Row>
    </Container>
    </footer>
    );
    };

export default Footer;
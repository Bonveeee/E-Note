import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="justify-content-around"
        style={{ marginBottom: "10px" }}
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <h2 style={{ margin: " 5px 30px 10px 10px" }}>E-Post</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between" style={{ margin: "auto" }}>
              <Nav.Link href="/" style={{ color: "white", opacity: 0.9 }}>
                Home
              </Nav.Link>
              <Nav.Link href="/blog" style={{ color: "white", opacity: 0.9 }}>
                Blog
              </Nav.Link>
              <Nav.Link href="/about" style={{ color: "white", opacity: 0.9 }}>
                About Us
              </Nav.Link>
              <Nav.Link
                href="/contact"
                style={{ color: "white", opacity: 0.9 }}
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for a blog-Post"
                className="me-1"
                aria-label="Search"
                style={{ r: "auto" }}
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        
          <Navbar.Text>
            Signed in as: <a href="#login">Chebukati34</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

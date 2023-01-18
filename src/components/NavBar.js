import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
        <Container>
          <Navbar.Brand href="#home">
            <h1 style={{ margin: " 10px 20px 10px 10px" }}>E-Post</h1>
          </Navbar.Brand>
          <Nav className="justify-content-center"></Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
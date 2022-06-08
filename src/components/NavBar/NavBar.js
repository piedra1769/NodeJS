import React from 'react'
import './NavBar'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'



function NavBar () {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Turismo Coogranada</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nacionales</Nav.Link>
            <Nav.Link href="#link">Internacionales</Nav.Link>
            <Nav.Link href="#link">Cruceros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

<CartWidget />


export default NavBar 
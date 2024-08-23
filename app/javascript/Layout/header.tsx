import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand href="#home">LinkedIn Prospects</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }

  export default Header;
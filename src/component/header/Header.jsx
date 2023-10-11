import React from 'react';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import ArmadaIcon from '../../assets/logo/Logo_white.png';

const Header = () => {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img src={ArmadaIcon} width="90" height="30" className="d-inline-block align-top" alt="Logo_Armada" />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT US</Nav.Link>
              <NavDropdown title="LAYANAN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">STORE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">SERVICE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">SOFTWARE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">PRICELIST</Nav.Link>
              <Nav.Link href="#link">TESTIMONIAL</Nav.Link>
            </Nav>
            <Button className="ms-4 me-2" variant="outline-light">
              GET APP
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

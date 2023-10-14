// import React, { useEffect } from 'react';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import ArmadaIcon from '../../assets/logo/Logo_white.png';

const Header = () => {
  // useEffect(() => {
  //   const navbar = document.querySelector('.navbar');

  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 0) {
  //       navbar.classList.add('sticky-navbar');
  //     } else {
  //       navbar.classList.remove('sticky-navbar');
  //     }
  //   });
  // }, []);
  return (
    <>
      <Navbar expand="md" className="navbar sticky-navbar">
        <Container fluid>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">
                <div>
                  <img src={ArmadaIcon} className="logo-blue d-inline-block align-top" alt="Logo_Armada" />
                </div>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <NavDropdown title="LAYANAN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">STORE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">SERVICE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">SOFTWARE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricelist">PRICELIST</Nav.Link>
              <Nav.Link href="#testimonial">TESTIMONIAL</Nav.Link>
            </Nav>
            <Button className="ms-4 me-2 w-button" variant="outline-light">
              GET APP
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

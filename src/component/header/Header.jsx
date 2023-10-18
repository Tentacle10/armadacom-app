// import { useState } from 'react';
import './Header.css';

import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import ArmadaIcon from '../../assets/logo/Logo_white.png';

// import { HouseFill, FileEarmarkPersonFill } from 'react-bootstrap-icons';

const Header = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
      <Navbar key='md' expand='md' data-bs-theme='dark' Navbar fixed='top'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img src={ArmadaIcon} className='logo-blue d-inline-block align-top' alt='Logo_Armada' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' className='text-light' />
          <Navbar.Offcanvas id='offcanvasNavbar-expand-md' aria-labelledby='offcanvasNavbarLabel-expand-md' placement='end' data-bs-theme='dark'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='#action1'>HOME</Nav.Link>
                <Nav.Link href='#action2'>ABOUT US</Nav.Link>
                <NavDropdown title='LAYANAN' id='offcanvasNavbarDropdown-expand-md'>
                  <NavDropdown.Item href='#action3'>STORE</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>SERVICE</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>SOFTWARE</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#action6'>PRICELIST</Nav.Link>
                <Nav.Link href='#action7'>TESTIMONIAL</Nav.Link>
              </Nav>
              <Button variant='outline-success'>Search</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <Navbar expand='md' className='navbar'>
        <Container fluid>
          <Navbar>
            <Container>
              <Navbar.Brand href='#home'>
                <div>
                  <img src={ArmadaIcon} className='logo-blue d-inline-block align-top' alt='Logo_Armada' />
                </div>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose} {...props} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='ms-auto'>
                <Nav.Link href='#home'>
                  <HouseFill />
                  HOME
                </Nav.Link>
                <Nav.Link href='#about'>
                  <FileEarmarkPersonFill />
                  ABOUT US
                </Nav.Link>
                <NavDropdown title='LAYANAN' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>STORE</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>SERVICE</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>SOFTWARE</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#pricelist'>PRICELIST</Nav.Link>
                <Nav.Link href='#testimonial'>TESTIMONIAL</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <Nav className='ms-auto d-none d-md-block'>
            <Nav.Link href='#home'>HOME</Nav.Link>
            <Nav.Link href='#about'>ABOUT US</Nav.Link>
            <NavDropdown title='LAYANAN' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>STORE</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>SERVICE</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>SOFTWARE</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pricelist'>PRICELIST</Nav.Link>
            <Nav.Link href='#testimonial'>TESTIMONIAL</Nav.Link>
          </Nav>
          <Button className='ms-4 me-2 w-button d-none d-md-block' variant='outline-light'>
            GET APP
          </Button>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Header;

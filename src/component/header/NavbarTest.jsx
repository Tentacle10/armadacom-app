import { useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import {} from './Navbar.css';
import ArmadaIcon from '../../assets/logo/Logo_blue.png';

const NavbarTest = () => {
  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        ref.current.classList.remove('start-header');
        ref.current.classList.add('scroll-on');
      } else {
        ref.current.classList.remove('scroll-on');
        ref.current.classList.add('start-header');
      }
    });

    // Kode animasi
    // document.body.classList.remove("hero-anime");
  }, []);

  return (
    <>
      <Navbar expand='md' variant='light' className='navigation-wrap bg-light start-header start-style' ref={ref}>
        <Container className='container'>
          <Navbar.Brand className='navbar-brand' href='#'>
            <img src={ArmadaIcon} alt='Logo_Armada' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='navbar-nav ml-auto py-4 py-md-0'>
              <Nav.Link className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>Home</Nav.Link>
              <Nav.Link className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>About Us</Nav.Link>
              <NavDropdown className='nav-item pl-4 pl-md-0 ml-0 ml-md-4' title='Layanan' id='offcanvasNavbarDropdown-expand-md' show={showDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <NavDropdown.Item href='#'>Store</NavDropdown.Item>
                <NavDropdown.Item href='#'>Service</NavDropdown.Item>
                <NavDropdown.Item href='#'>Software</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>Testimonial</Nav.Link>
              <Nav.Link className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>Pricelist</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTest;

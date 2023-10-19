import "./Header.css";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";
import ArmadaIcon from "../../assets/logo/Logo_white.png";
import { Tiktok, Facebook, Instagram } from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
      <Navbar key="md" expand="md" data-bs-theme="dark" Navbar fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={ArmadaIcon}
              className="logo-blue d-inline-block align-top"
              alt="Logo_Armada"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            className=""
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            data-bs-theme="light"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-5">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <NavDropdown
                  title="Layanan"
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item href="#action3">Store</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Service</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Software</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action7">Testimonial</Nav.Link>
              </Nav>
              <Button className="btn-blue w-100">Pricelist</Button>
            </Offcanvas.Body>
            <Row className="canvas-footer text-center">
              <Col className="text-center">
                <Button href="#" variant="link" className="btn-sos">
                  <Facebook className="iMedsos" />
                </Button>
                <Button href="#" variant="link" className="btn-sos">
                  <Instagram className="iMedsos-c" />
                </Button>
                <Button href="#" variant="link" className="btn-sos">
                  <Tiktok className="iMedsos" />
                </Button>
              </Col>
            </Row>
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

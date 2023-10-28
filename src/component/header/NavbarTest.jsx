import { useEffect, useRef, useState } from "react";
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
import "./NavbarTest.css";
import ArmadaIcon from "../../assets/logo/Logo_white.png";
import { Tiktok, Facebook, Instagram } from "react-bootstrap-icons";

const NavbarTest = () => {
  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        // console.log(ref);
        ref.current.classList.remove("start-header");
        ref.current.classList.add("scroll-on");
      } else {
        ref.current.classList.remove("scroll-on");
        ref.current.classList.add("start-header");
      }
    });

    // Kode animasi
    // document.body.classList.remove("hero-anime");
  }, []);

  return (
    <>
      <Navbar
        expand="md"
        className="navigation-wrap bg-light start-header start-style"
        variant="dark"
        ref={ref}
      >
        <Container className="">
          <Navbar.Brand className="navbar-brand" href="#">
            <img src={ArmadaIcon} alt="Logo_Armada" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            type="button"
            aria-label="Toggle navigation"
            variant="dark"
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
            <Offcanvas.Body className="justify-content-md-end px-5">
              <Nav className="navbar-nav py-4 py-md-0">
                <Nav.Link href="#home" className="nav-item">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="nav-item">
                  About Us
                </Nav.Link>
                <NavDropdown
                  className="pl-4 pl-md-0 ml-0 ml-md-4"
                  title="Layanan"
                  id="offcanvasNavbarDropdown-expand-md"
                  show={showDropdown}
                  onMouseEnter={() => {
                    // console.log(showDropdown);
                    setShowDropdown(true);
                  }}
                  onMouseLeave={() => {
                    // console.log(showDropdown);
                    setShowDropdown(true);
                  }}
                >
                  <NavDropdown.Item href="#">Store</NavDropdown.Item>
                  <NavDropdown.Item href="#service">Service</NavDropdown.Item>
                  <NavDropdown.Item
                    href="#damkar"
                    className="border border-primary-subtle f-damkar"
                  >
                    Damkar Express
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#software">Software</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  href="#testimonials"
                  className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                >
                  Testimonial
                </Nav.Link>
                <Button variant="light" className="btn-blue w-sm-100 ms-md-5">
                  Pricelist
                </Button>
              </Nav>
            </Offcanvas.Body>
            <Row className="canvas-footer text-center d-block d-md-none">
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
    </>
  );
};

export default NavbarTest;

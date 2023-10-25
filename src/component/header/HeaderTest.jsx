import React, { useEffect, useRef } from "react";
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

const HeaderTest = () => {
  const ref = useRef();
  const hover = useRef([]);

  useEffect(() => {
    // Kode JavaScript asli
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        ref.current.classList.remove("start-header");
        ref.current.classList.add("scroll-on");
      } else {
        ref.current.classList.remove("scroll-on");
        ref.current.classList.add("start-header");
      }
    });

    // Kode animasi
    // document.body.classList.remove("hero-anime");

    // Menu On Hover
    if (window.innerWidth > 750) {
      hover.current.forEach((navItem, index) => {
        navItem.addEventListener("mouseenter", () => {
          hover[index].current.classList.add("show");
        });
        navItem.addEventListener("mouseleave", () => {
          hover[index].current.classList.remove("show");
        });
      });
    }
  }, []);
  return (
    <>
      <Navbar
        key="md"
        expand="md"
        data-bs-theme="dark"
        className="start-header start-style"
        fixed="top"
        ref={ref}
      >
        <Container className="con-nav" fluid>
          <Navbar.Brand href="#">
            <img
              src={ArmadaIcon}
              className="logo-blue d-inline-block align-top"
              alt="Logo_Armada"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            type="button"
            aria-label="Toggle navigation"
            className=""
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-5">
              <Nav className="d-flex justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  ref={hover[0]}
                  href="#home"
                  className="nav-item px-2 mx-2"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  ref={hover[1]}
                  href="#about"
                  className="nav-item px-2 mx-1"
                >
                  About Us
                </Nav.Link>
                <NavDropdown
                  title="Layanan"
                  id="offcanvasNavbarDropdown-expand-md"
                  className="px-2 mx-1"
                  ref={hover[2]}
                  renderMenuOnMount={true}
                  disabled
                >
                  <NavDropdown.Item href="#">Store</NavDropdown.Item>
                  <NavDropdown.Item href="#service">Service</NavDropdown.Item>
                  <NavDropdown.Item href="#software">Software</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  ref={hover[3]}
                  href="#testimonials"
                  className="nav-item px-2 mx-1"
                >
                  Testimonial
                </Nav.Link>
              </Nav>
              <Button className="btn-blue w-100">Pricelist</Button>
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

export default HeaderTest;

import {useEffect, useRef, useState} from "react";
import {Container, Row, Col, Nav, Navbar, NavDropdown, Button, Offcanvas} from "react-bootstrap";
import "./Header.css";
import ArmadaIcon from "../../assets/logo/Logo_white.png";
import {Tiktok, Facebook, Instagram} from "react-bootstrap-icons";

const Header = () => {
  // const [activeSection, setActiveSection] = useState("home");
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

    // function handleScroll() {
    //   const scrollY = window.scrollY;
    //   const home = document.getElementById("home");
    //   const about = document.getElementById("about");
    //   const service = document.getElementById("service");
    //   const damkar = document.getElementById("damkar");
    //   const sofware = document.getElementById("sofware");
    //   const testimonials = document.getElementById("testimonials");
    //   const footer = document.getElementById("footer");

    //   if (scrollY < about.offsetTop) {
    //     setActiveSection("home");
    //   } else if (scrollY < service.offsetTop) {
    //     setActiveSection("about");
    //     // } else if (scrollY < damkar.offsetTop) {
    //     //   setActiveSection("service");
    //     // } else if (scrollY < sofware.offsetTop) {
    //     //   setActiveSection("damkar");
    //     // } else if (scrollY < testimonials.offsetTop) {
    //     //   setActiveSection("sofware");
    //   } else {
    //     setActiveSection("testimonials");
    //   }
    // }

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);
  return (
    <>
      <Container fluid>
        <Navbar expand="md" className="navigation-wrap bg-light start-header start-style" variant="dark" ref={ref} fixed="top">
          <Container>
            <Navbar.Brand className="navbar-brand" href="#">
              <img src={ArmadaIcon} alt="Logo_Armada" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" type="button" aria-label="Toggle navigation" variant="dark" />

            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end" data-bs-theme="light">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-md-end px-5">
                <Nav className="navbar-nav align-items-md-center py-3 py-md-0">
                  <Nav.Link href="#home" className="nav-item">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="nav-item">
                    About Us
                  </Nav.Link>
                  <NavDropdown
                    className=""
                    title="Layanan"
                    id="offcanvasNavbarDropdown-expand-md"
                    show={showDropdown}
                    onMouseEnter={() => {
                      // console.log(showDropdown);
                      setShowDropdown(true);
                    }}
                    onMouseLeave={() => {
                      // console.log(showDropdown);
                      setShowDropdown(false);
                    }}
                  >
                    <NavDropdown.Item href="#" disabled>
                      Store
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#service">Service</NavDropdown.Item>
                    <NavDropdown.Item href="#damkar" className="border border-primary-subtle f-damkar">
                      Damkar Express
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#software">Software</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#testimonials" className="nav-item">
                    Testimonial
                  </Nav.Link>
                  <Button className="btn-blue w-sm-100 ms-md-5">Pricelist</Button>
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
      </Container>
    </>
  );
};

export default Header;

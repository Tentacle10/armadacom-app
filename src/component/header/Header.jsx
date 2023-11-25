import {useEffect, useRef, useState} from "react";
import {Container, Row, Col, Nav, Navbar, NavDropdown, Button, Offcanvas} from "react-bootstrap";
import "./Header.css";
import ArmadaIcon from "../../assets/logo/Logo_white.png";
import {Tiktok, Facebook, Instagram} from "react-bootstrap-icons";
import HeroContent from "./../content/HeroContent";
import AboutContent from "./../content/AboutContent";
import ServiceContent from "./../content/ServiceContent";
import DamkarContent from "./../content/DamkarContent";
import SoftwareContent from "./../content/SoftwareContent";
import TestimonialContent from "./../content/TestimonialContent";

const Header = () => {
  const ref = useRef();
  const nav = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setShowDropdown(false);
    setIsMouseOver(false);
  };

  const aboutRef = useRef();
  const serviceRef = useRef();
  const damkarRef = useRef();
  const softwareRef = useRef();
  const testimonialRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        ref.current.classList.remove("start-header");
        ref.current.classList.add("scroll-on");
        nav.current.classList.remove("start-nav");
        nav.current.classList.add("scroll-nav");
      } else {
        ref.current.classList.add("start-header");
        ref.current.classList.remove("scroll-on");
        nav.current.classList.add("start-nav");
        nav.current.classList.remove("scroll-nav");
      }

      if (scroll < aboutRef.current.offsetTop) {
        setActiveNavItem("home");
      } else if (scroll < serviceRef.current.offsetTop) {
        setActiveNavItem("about");
      } else if (scroll < damkarRef.current.offsetTop) {
        setActiveNavItem("service");
      } else if (scroll < softwareRef.current.offsetTop) {
        setActiveNavItem("damkar");
      } else if (scroll < testimonialRef.current.offsetTop) {
        setActiveNavItem("software");
      } else {
        setActiveNavItem("testimonial");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <Navbar expand="md" className="navigation-wrap start-header start-style" variant="dark" ref={ref} fixed="top">
          <Container>
            <Navbar.Brand as="a" className="start-nav" href="#" ref={nav}>
              <img src={ArmadaIcon} alt="Logo_Armada" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" type="button" aria-label="Toggle navigation" variant="dark" />

            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end" data-bs-theme="light">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" aria-label="Offcanvas Menu"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-md-end">
                <Nav className="navbar-nav align-items-md-center py-3 py-md-0">
                  <Nav.Link as="a" href="#home" className={`homeNavItem nav-item ${activeNavItem === "home" ? "active" : ""}`} onClick={() => handleNavItemClick("home")}>
                    Home
                  </Nav.Link>
                  <Nav.Link as="a" href="#about" className={`aboutNavItem nav-item ${activeNavItem === "about" ? "active" : ""}`} onClick={() => handleNavItemClick("about")}>
                    About Us
                  </Nav.Link>
                  <NavDropdown
                    className="nav-drop"
                    title="Layanan"
                    id="offcanvasNavbarDropdown-expand-md"
                    active={isMouseOver}
                    show={showDropdown}
                    onMouseEnter={() => {
                      setShowDropdown(true);
                      setIsMouseOver(true);
                    }}
                    onMouseLeave={() => {
                      setShowDropdown(false);
                      setIsMouseOver(false);
                    }}
                  >
                    <NavDropdown.Item href="#store" className="drop-a" disabled>
                      Store
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#service" className={`drop-a serviceNavItem ${activeNavItem === "service" ? "active" : ""}`} onClick={() => handleNavItemClick("service")}>
                      Service
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#damkar" className={`btn-a damkarNavItem ${activeNavItem === "damkar" ? "active" : ""}`} onClick={() => handleNavItemClick("damkar")}>
                      Damkar Express
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#software" className={`drop-a softwareNavItem ${activeNavItem === "software" ? "active" : ""}`} onClick={() => handleNavItemClick("software")}>
                      Software
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as="a" href="#testimonial" className={`testimonialNavItem nav-item ${activeNavItem === "testimonial" ? "active" : ""}`} onClick={() => handleNavItemClick("testimonial")}>
                    Testimonial
                  </Nav.Link>
                  <Button variant="light" className="btn-a bg-blue ms-md-4">
                    Pricelist
                  </Button>
                </Nav>
              </Offcanvas.Body>
              <Row className="canvas-footer text-center d-block d-md-none">
                <Col className="text-center">
                  <Button href="https://www.facebook.com/armadacom.id" variant="link" className="btn-sos">
                    <Facebook className="iMedsos" />
                  </Button>
                  <Button href="https://www.instagram.com/armadacom.id/" variant="link" className="btn-sos">
                    <Instagram className="iMedsos-c" />
                  </Button>
                  <Button href="https://www.tiktok.com/@armadacom.id" variant="link" className="btn-sos">
                    <Tiktok className="iMedsos" />
                  </Button>
                </Col>
              </Row>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
      <div id="home">
        <HeroContent />
      </div>
      <div id="about" ref={aboutRef}>
        <AboutContent />
      </div>
      <div id="service" ref={serviceRef}>
        <ServiceContent />
      </div>
      <div id="damkar" ref={damkarRef}>
        <DamkarContent />
      </div>
      <div id="software" ref={softwareRef}>
        <SoftwareContent />
      </div>
      <div id="testimonial" ref={testimonialRef}>
        <TestimonialContent />
      </div>
    </>
  );
};

export default Header;

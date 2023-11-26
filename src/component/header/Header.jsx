import {useEffect, useRef, useState} from "react";
import {Container, Row, Col, Nav, Navbar, NavDropdown, Button, Offcanvas, ProgressBar} from "react-bootstrap";
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
  const [activeNavItem, setActiveNavItem] = useState("home");

  // const handleNavItemClick = (navItem) => {
  //   setActiveNavItem(navItem);
  //   setShowDropdown(false);
  //   setIsMouseOver(false);
  // };

  const aboutRef = useRef();
  const serviceRef = useRef();
  const damkarRef = useRef();
  const softwareRef = useRef();
  const testimonialRef = useRef();

  const navHomeRef = useRef();
  const navAboutRef = useRef();
  const navServiceRef = useRef();
  const navDamkarRef = useRef();
  const navSoftwareRef = useRef();
  const navTestimonialRef = useRef();

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

      const margin = 50;

      if (aboutRef.current && scroll < aboutRef.current.offsetTop - margin) {
        setActiveNavItem("home");
        const navRefs = [navAboutRef, navServiceRef, navDamkarRef, navSoftwareRef, navTestimonialRef];
        navRefs.forEach((navRef) => navRef.current && navRef.current.classList.remove("active"));
      } else if (serviceRef.current && scroll < serviceRef.current.offsetTop - margin) {
        setActiveNavItem("about");
        const navRefs = [navHomeRef, navServiceRef, navDamkarRef, navSoftwareRef, navTestimonialRef];
        navRefs.forEach((navRef) => navRef.current && navRef.current.classList.remove("active"));
      } else if (damkarRef.current && scroll < damkarRef.current.offsetTop - margin) {
        setActiveNavItem("service");
        const navRefs = [navHomeRef, navAboutRef, navDamkarRef, navSoftwareRef, navTestimonialRef];
        navRefs.forEach((navRef) => navRef.current && navRef.current.classList.remove("active"));
      } else if (softwareRef.current && scroll < softwareRef.current.offsetTop - margin) {
        setActiveNavItem("damkar");
        const navRefs = [navHomeRef, navAboutRef, navServiceRef, navSoftwareRef, navTestimonialRef];
        navRefs.forEach((navRef) => navRef.current && navRef.current.classList.remove("active"));
      } else if (testimonialRef.current && scroll < testimonialRef.current.offsetTop - margin) {
        setActiveNavItem("software");
        const navRefs = [navHomeRef, navAboutRef, navServiceRef, navDamkarRef, navTestimonialRef];
        navRefs.forEach((navRef) => navRef.current && navRef.current.classList.remove("active"));
      } else {
        setActiveNavItem("testimonial");
        const navRefs = [navHomeRef, navAboutRef, navServiceRef, navDamkarRef, navSoftwareRef];
        navRefs.forEach((navRef) => navRef.current && navRef.current.classList.remove("active"));
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
            <Navbar.Brand className="start-nav" ref={nav}>
              <img src={ArmadaIcon} alt="Logo_Armada" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" type="button" aria-label="Toggle navigation" variant="dark" />

            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end" data-bs-theme="light">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" aria-label="Offcanvas Menu"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-md-end">
                <Nav className="navbar-nav align-items-md-center py-3 py-md-0">
                  <Nav.Link as="a" href="#home" className={`homeNavItem nav-item ${activeNavItem === "home" ? "active" : ""}`} ref={navHomeRef}>
                    Home
                  </Nav.Link>
                  <Nav.Link as="a" href="#about" className={`aboutNavItem nav-item ${activeNavItem === "about" ? "active" : ""}`} ref={navAboutRef}>
                    About Us
                  </Nav.Link>
                  <NavDropdown
                    className="nav-drop"
                    title="Layanan"
                    id="offcanvasNavbarDropdown-expand-md"
                    active={(isMouseOver, showDropdown)}
                    show={showDropdown}
                    onClick={() => setShowDropdown(!showDropdown)}
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
                      <div className="me-2 text-decoration-line-through">Store</div>
                      <ProgressBar className="position-absolute top-50 end-0 translate-middle-y">
                        <ProgressBar className="p-1" now="On Development..." label="On Development..." animated />
                      </ProgressBar>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#service" className={`drop-a serviceNavItem ${activeNavItem === "service" ? "active" : ""}`} ref={navServiceRef}>
                      Service
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#damkar" className={`btn-a damkarNavItem ${activeNavItem === "damkar" ? "active" : ""}`} ref={navDamkarRef}>
                      Damkar Express
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#software" className={`drop-a softwareNavItem ${activeNavItem === "software" ? "active" : ""}`} ref={navSoftwareRef}>
                      Software
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as="a" href="#testimonial" className={`testimonialNavItem nav-item ${activeNavItem === "testimonial" ? "active" : ""}`} ref={navTestimonialRef}>
                    Testimonial
                  </Nav.Link>
                  <Button variant="light" href="#" className="btn-a bg-blue ms-md-4" target="_blank">
                    Pricelist
                  </Button>
                </Nav>
              </Offcanvas.Body>
              <Row className="canvas-footer text-center d-block d-md-none">
                <Col className="text-center">
                  <Button href="https://www.facebook.com/armadacom.id" variant="link" className="btn-sos" target="_blank">
                    <Facebook className="iMedsos" />
                  </Button>
                  <Button href="https://www.instagram.com/armadacom.id/" variant="link" className="btn-sos" target="_blank">
                    <Instagram className="iMedsos-c" />
                  </Button>
                  <Button href="https://www.tiktok.com/@armadacom.id" variant="link" className="btn-sos" target="_blank">
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

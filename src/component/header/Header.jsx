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
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [activeSection, setActiveSection] = useState("home");
  const ref = useRef();
  const nav = useRef();

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  // const storeRef = useRef(null);
  const serviceRef = useRef(null);
  const damkarRef = useRef(null);
  const softwareRef = useRef(null);
  const testimonialRef = useRef(null);

  // Refs for nav items
  const homeNavItemRef = useRef(null);
  const aboutNavItemRef = useRef(null);
  // const storeNavItemRef = useRef(null);
  const serviceNavItemRef = useRef(null);
  const damkarNavItemRef = useRef(null);
  const softwareNavItemRef = useRef(null);
  const testimonialNavItemRef = useRef(null);

  const navItemRefs = {
    home: homeNavItemRef,
    about: aboutNavItemRef,
    service: serviceNavItemRef,
    damkar: damkarNavItemRef,
    software: softwareNavItemRef,
    testimonial: testimonialNavItemRef,
  };

  // Intersection observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  // Callback function for the observer
  // const observerCallback = (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       const navItemRef = navItemRefs[entry.target.id];
  //       navItemRef.current.classList.add("active");

  //       // Remove 'active' class from other nav items
  //       Object.values(navItemRefs).forEach((itemRef) => {
  //         if (itemRef.current !== navItemRef.current) {
  //           itemRef.current.classList.remove("active");
  //         }
  //       });
  //     }
  //   });
  // };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const navItemRef = navItemRefs[entry.target.id];

        // Check if the ref and its current property exist
        if (navItemRef && navItemRef.current) {
          navItemRef.current.classList.add("active");

          // Remove 'active' class from other nav items
          Object.values(navItemRefs).forEach((itemRef) => {
            if (itemRef.current !== navItemRef.current) {
              itemRef.current.classList.remove("active");
            }
          });
        }
      }
    });
  };

  // Creating observer
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        // console.log(ref);
        ref.current.classList.remove("start-header");
        ref.current.classList.add("scroll-on");
        nav.current.classList.remove("start-nav");
        nav.current.classList.add("scroll-nav");
      } else {
        ref.current.classList.remove("scroll-on");
        ref.current.classList.add("start-header");
        nav.current.classList.remove("scroll-nav");
        nav.current.classList.add("start-nav");
      }
    });

    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    // observer.observe(storeRef.current);
    observer.observe(serviceRef.current);
    observer.observe(damkarRef.current);
    observer.observe(softwareRef.current);
    observer.observe(testimonialRef.current);

    // Observe all relevant section refs
    Object.values(navItemRefs).forEach((itemRef) => {
      if (itemRef.current) {
        observer.observe(itemRef.current);
      }
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [observerOptions, navItemRefs]);

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
                  <Nav.Link as="a" ref={homeNavItemRef} href="#home" className="homeNavItem nav-item">
                    Home
                  </Nav.Link>
                  <Nav.Link as="a" ref={aboutNavItemRef} href="#about" className="homeNavItem nav-item">
                    About Us
                  </Nav.Link>
                  <NavDropdown
                    className="nav-drop"
                    title="Layanan"
                    id="offcanvasNavbarDropdown-expand-md"
                    active={isMouseOver}
                    show={showDropdown}
                    onMouseEnter={() => {
                      // console.log(showDropdown);
                      setShowDropdown(true);
                      setIsMouseOver(true);
                    }}
                    onMouseLeave={() => {
                      // console.log(showDropdown);
                      setShowDropdown(false);
                      setIsMouseOver(false);
                    }}
                  >
                    <NavDropdown.Item
                      // ref={storeNavItemRef}
                      href="#store"
                      className="drop-a"
                      disabled
                    >
                      Store
                    </NavDropdown.Item>
                    <NavDropdown.Item ref={serviceNavItemRef} href="#service" className="drop-a serviceNavItem" active={activeDropdown === "service"} onClick={() => setActiveDropdown("service")}>
                      Service
                    </NavDropdown.Item>
                    <NavDropdown.Item ref={damkarNavItemRef} href="#damkar" className="btn-a damkarNavItem" active={activeDropdown === "service"} onClick={() => setActiveDropdown("service")}>
                      Damkar Express
                    </NavDropdown.Item>
                    <NavDropdown.Item ref={softwareNavItemRef} href="#software" className="drop-a softwareNavItem" active={activeDropdown === "service"} onClick={() => setActiveDropdown("service")}>
                      Software
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as="a" ref={testimonialNavItemRef} href="#testimonial" className="homeNavItem nav-item">
                    Testimonial
                  </Nav.Link>
                  <Button variant="light" className="btn-a bg-blue ms-md-4">
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
      </Container>
      <div ref={homeRef} id="home">
        <HeroContent />
      </div>
      <div ref={aboutRef} id="about">
        <AboutContent />
      </div>
      <div ref={serviceRef} id="service">
        <ServiceContent />
      </div>
      <div ref={damkarRef} id="damkar">
        <DamkarContent />
      </div>
      <div ref={softwareRef} id="software">
        <SoftwareContent />
      </div>
      <div ref={testimonialRef} id="testimonial">
        <TestimonialContent />
      </div>
    </>
  );
};

export default Header;

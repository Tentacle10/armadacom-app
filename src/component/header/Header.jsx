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
  ProgressBar,
  Badge,
} from "react-bootstrap";
import "./Header.css";
import ArmadaIcon from "../../assets/logo/Logo_white.png";
import { Tiktok, Facebook, Instagram } from "react-bootstrap-icons";
import HeroContent from "./../content/HeroContent";
import AboutContent from "./../content/AboutContent";
import PromoContent from "../content/PromoContent";
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
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const aboutRef = useRef();
  const promoRef = useRef();
  const serviceRef = useRef();
  const softwareRef = useRef();
  const damkarRef = useRef();
  const testimonialRef = useRef();

  const navHomeRef = useRef();
  const navAboutRef = useRef();
  const navPromoRef = useRef();
  const navServiceRef = useRef();
  const navSoftwareRef = useRef();
  const navDamkarRef = useRef();
  const navTestimonialRef = useRef();

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await fetch(
          "https://crmapi.armadacom.id/products/website/promo"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPromos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPromos();
  }, []);

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
        const navRefs = [
          navAboutRef,
          navPromoRef,
          navServiceRef,
          navSoftwareRef,
          navDamkarRef,
          navTestimonialRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
      } else if (
        promoRef.current &&
        scroll < promoRef.current.offsetTop - margin
      ) {
        setActiveNavItem("about");
        const navRefs = [
          navHomeRef,
          navPromoRef,
          navServiceRef,
          navSoftwareRef,
          navDamkarRef,
          navTestimonialRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
      } else if (
        serviceRef.current &&
        scroll < serviceRef.current.offsetTop - margin
      ) {
        setActiveNavItem("promo");
        const navRefs = [
          navHomeRef,
          navAboutRef,
          navServiceRef,
          navSoftwareRef,
          navDamkarRef,
          navTestimonialRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
      } else if (
        softwareRef.current &&
        scroll < softwareRef.current.offsetTop - margin
      ) {
        setActiveNavItem("service");
        const navRefs = [
          navHomeRef,
          navAboutRef,
          navPromoRef,
          navSoftwareRef,
          navDamkarRef,
          navTestimonialRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
      } else if (
        damkarRef.current &&
        scroll < damkarRef.current.offsetTop - margin
      ) {
        setActiveNavItem("software");
        const navRefs = [
          navHomeRef,
          navAboutRef,
          navPromoRef,
          navServiceRef,
          navDamkarRef,
          navTestimonialRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
      } else if (
        testimonialRef.current &&
        scroll < testimonialRef.current.offsetTop - 100
      ) {
        setActiveNavItem("damkar");
        const navRefs = [
          navHomeRef,
          navAboutRef,
          navPromoRef,
          navServiceRef,
          navSoftwareRef,
          navTestimonialRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
      } else {
        setActiveNavItem("testimonial");
        const navRefs = [
          navHomeRef,
          navAboutRef,
          navPromoRef,
          navDamkarRef,
          navServiceRef,
          navSoftwareRef,
        ];
        navRefs.forEach(
          (navRef) =>
            navRef.current && navRef.current.classList.remove("active")
        );
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
        <Navbar
          expand="md"
          className="navigation-wrap start-header start-style"
          variant="dark"
          ref={ref}
          fixed="top"
        >
          <Container>
            <Navbar.Brand className="start-nav" ref={nav} href="#home">
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
                <Offcanvas.Title
                  id="offcanvasNavbarLabel-expand-md"
                  aria-label="Offcanvas Menu"
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-md-end">
                <Nav className="navbar-nav align-items-md-center py-3 py-md-0">
                  <Nav.Link
                    as="a"
                    href="#home"
                    className={`homeNavItem nav-item d-block d-sm-none d-lg-block ${
                      activeNavItem === "home" ? "active" : ""
                    }`}
                    ref={navHomeRef}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as="a"
                    href="#about"
                    className={`aboutNavItem nav-item ${
                      activeNavItem === "about" ? "active" : ""
                    }`}
                    ref={navAboutRef}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    as="a"
                    href="#promo"
                    className={`promoNavItem nav-item ${
                      activeNavItem === "promo" ? "active" : ""
                    }`}
                    ref={navPromoRef}
                  >
                    Promo
                    <Badge
                      bg="danger"
                      style={{
                        // opacity: "0.8",
                        marginLeft: "0.3rem",
                        padding: 0,
                      }}
                    >
                      <ProgressBar
                        className="news-progress"
                        variant="danger"
                        now="News"
                        label="News"
                        animated
                      />
                    </Badge>
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
                    {/* <NavDropdown.Item href="#store" className="drop-a" disabled>
                      <div className="me-2 text-decoration-line-through">
                        Store
                      </div>
                      <ProgressBar className="position-absolute top-50 end-0 translate-middle-y">
                        <ProgressBar
                          className="p-1"
                          now="On Development..."
                          label="On Development..."
                          animated
                        />
                      </ProgressBar>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item
                      href="#store"
                      className={`drop-a storeNavItem ${
                        activeNavItem === "store" ? "active" : ""
                      }`}
                      ref={navPromoRef}
                    >
                      Store
                    </NavDropdown.Item> */}
                    <NavDropdown.Item
                      href="#service"
                      className={`drop-a serviceNavItem ${
                        activeNavItem === "service" ? "active" : ""
                      }`}
                      ref={navServiceRef}
                    >
                      Service
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#software"
                      className={`drop-a softwareNavItem ${
                        activeNavItem === "software" ? "active" : ""
                      }`}
                      ref={navSoftwareRef}
                    >
                      Software
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#damkar"
                      className={`btn-a damkarNavItem ${
                        activeNavItem === "damkar" ? "active" : ""
                      }`}
                      ref={navDamkarRef}
                    >
                      Damkar Express
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    as="a"
                    href="#testimonial"
                    className={`testimonialNavItem nav-item ${
                      activeNavItem === "testimonial" ? "active" : ""
                    }`}
                    ref={navTestimonialRef}
                  >
                    Testimonial
                  </Nav.Link>
                  <Button
                    variant="light"
                    href="https://store.armadacom.id"
                    className="btn-a bg-blue ms-md-4"
                    target="_blank"
                  >
                    Store
                  </Button>
                </Nav>
              </Offcanvas.Body>
              <Row className="canvas-footer text-center d-block d-md-none">
                <Col className="text-center">
                  <Button
                    href="https://www.facebook.com/armadacom.id"
                    variant="link"
                    className="btn-sos"
                    target="_blank"
                  >
                    <Facebook className="iMedsos" />
                  </Button>
                  <Button
                    href="https://www.instagram.com/armadacom.id/"
                    variant="link"
                    className="btn-sos"
                    target="_blank"
                  >
                    <Instagram className="iMedsos-c" />
                  </Button>
                  <Button
                    href="https://www.tiktok.com/@armadacom.id"
                    variant="link"
                    className="btn-sos"
                    target="_blank"
                  >
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
      <div id="promo" ref={promoRef}>
        <PromoContent data={promos ? promos?.data?.promo : []} />
      </div>
      <div id="service" ref={serviceRef}>
        <ServiceContent />
      </div>
      <div id="laptop">
        <PromoContent data={promos ? promos?.data?.promo_laptop : []} />
      </div>
      <div id="software" ref={softwareRef}>
        <SoftwareContent />
      </div>
      <div id="damkar" ref={damkarRef}>
        <DamkarContent />
      </div>
      <div id="testimonial" ref={testimonialRef}>
        <TestimonialContent />
      </div>
    </>
  );
};

export default Header;

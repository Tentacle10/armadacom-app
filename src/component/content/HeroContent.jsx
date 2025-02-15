import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { API_URL } from "../utils/const";
import { useEffect, useState } from "react";

const HeroContent = () => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${API_URL}/banner/active`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBanner(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <>
      <Carousel className="hero" controls={true} indicators={true} fade>
        {banner.data?.map((hero, index) => (
          <Carousel.Item key={index}>
            <Container className="slideshow" fluid>
              <div className="gradient-overlay"></div>

              <Row>
                <Col
                  md={8}
                  style={{
                    padding: "0",
                  }}
                >
                  <img
                    src={`${API_URL}/uploads/promo/${hero.t_banner_image}`}
                    alt={hero.t_banner_image}
                    className="banner"
                  />
                </Col>
              </Row>
              <Row className="textBanner">
                <Col
                  md={9}
                  className="ls fs-1 fw-bold text-uppercase"
                  style={{ textShadow: "2px 2px 5px #555" }}
                >
                  {hero.t_banner_header}
                </Col>
                <Col md={9} className="mt-2 fs-5 body-text-light">
                  {hero.t_banner_desc}
                </Col>
                <Col md={4} className="mt-3">
                  <Button variant="light" href="#about" className="btn-a">
                    Selengkapnya
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default HeroContent;

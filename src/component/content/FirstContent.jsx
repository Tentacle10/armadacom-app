import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./content.css";

import CrossPlatform from "../../assets/img/Cross-platform.png";
import HPElite from "../../assets/img/Hp-Eliete.png";
import CPUBlack from "../../assets/img/cpublack.png";
import Damkar from "../../assets/img/damkar.png";

const FirstContent = () => {
  return (
    <>
      <Container className="slideshow" fluid>
        <Carousel className="" controls={false} indicators={true} fade>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={CrossPlatform} alt="slide" text="First slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h1>Ga Cuma Servis dan Jualan Bikin Aplikasi juga</h1>
                <p>
                  Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke
                  Armadacom. Sebagai penunjang aktifitas bisnis kalian
                </p>
                <Button className="mt-2 w-button" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={HPElite} alt="slide" text="Second slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h1>Udah muter muter ujungnya ke Armadacom</h1>
                <p>
                  Armadacom adalah Toko komputer terlengkap di Wonosobo,
                  menyediakan berbagai perangkat komputer dan perangkat jaringan
                </p>
                <Button className="mt-2 w-button" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={CPUBlack} alt="slide" text="Third slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h1>Ngapain Berhari hari Kalo Sehari Jadi</h1>
                <p>
                  Armadacom.id melayani service komputer, Laptop, Printer maupun
                  Jaringan dan CCTV di wonosobo dengan kualitas pelayanan
                  terbaik.
                </p>
                <Button className="mt-2 w-button" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={Damkar} alt="slide" text="Fourth slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h1>Anda Sibuk? Tidak bisa ke Toko Offline?</h1>
                <p>DAMKAR anda membeli kami antar</p>
                <Button className="mt-2 w-button" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default FirstContent;

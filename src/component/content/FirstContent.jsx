import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './content.css';

import CrossPlatform from '../../assets/img/Cross-platform.png';
import HPElite from '../../assets/img/Hp-Eliete.png';
import CPUBlack from '../../assets/img/cpublack.png';

const FirstContent = () => {
  return (
    <>
      <Container className="slideshow" fluid>
        <Carousel className="vh-100" controls={false} indicators={true} fade>
          <Carousel.Item className="vh-100">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide me-5 d-flex justify-content-center">
                <img src={CrossPlatform} alt="slide" text="First slide" />
              </Col>
              <Col sm={4} className="ms-5">
                <Carousel.Caption>
                  <h1>Ga Cuma Servis dan Jualan, Bikin Aplikasi juga.</h1>
                  <p>Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke armadacom.id. Sebagai penunjang aktifitas bisnis kalian</p>
                </Carousel.Caption>
                <Button className="mt-2 w-button" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="vh-100">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide me-5 d-flex justify-content-center">
                <img src={HPElite} alt="slide" text="Second slide" />
              </Col>
              <Col sm={4} className="ms-5 justify-content-center align-items-center">
                <Carousel.Caption className="justify-content-center align-items-center">
                  <h1>Udah muter muter, ujungnya ke Armadacom.id</h1>
                  <p>Armadacom.id adalah Toko komputer terlengkap di Wonosobo, menyediakan berbagai perangkat komputer dan perangkat jaringan</p>
                </Carousel.Caption>
                <Button className="mt-2 w-button" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="vh-100">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide me-5 d-flex justify-content-center">
                <img src={CPUBlack} alt="slide" text="Third slide" />
              </Col>
              <Col sm={4} className="ms-5 justify-content-center align-items-center">
                <Carousel.Caption className="justify-content-center align-items-center">
                  <h1>Ngapain Berhari hari, Kalo Sehari Jadi</h1>
                  <p>Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke armadacom.id. Sebagai penunjang aktifitas bisnis kalian</p>
                </Carousel.Caption>
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

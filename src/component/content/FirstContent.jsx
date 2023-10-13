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
      <Container className="slideshow py-3 px-5" fluid>
        <Carousel className="carousel" controls={false} indicators={true} fade>
          <Carousel.Item>
            <Row>
              <Col sm={8} className="imgslide">
                <img src={CrossPlatform} alt="slide" text="First slide" />
              </Col>
              <Col sm={4}>
                <Carousel.Caption>
                  <h1>Ga Cuma Servis dan Jualan, Bikin Aplikasi juga.</h1>
                  <p>Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke armadacom.id. Sebagai penunjang aktifitas bisnis kalian</p>
                </Carousel.Caption>
                <Button className="mt-2" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={8} className="imgslide">
                <img src={HPElite} alt="slide" text="Second slide" />
              </Col>
              <Col sm={4}>
                <Carousel.Caption>
                  <h1>Udah muter muter, ujungnya ke Armadacom.id</h1>
                  <p>Armadacom.id adalah Toko komputer terlengkap di Wonosobo, menyediakan berbagai perangkat komputer dan perangkat jaringan</p>
                </Carousel.Caption>
                <Button className="mt-2" variant="outline-light">
                  CHAT US
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={8} className="imgslide">
                <img src={CPUBlack} alt="slide" text="Third slide" />
              </Col>
              <Col sm={4}>
                <Carousel.Caption>
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

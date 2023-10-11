import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './content.css';

import CrossPlatform from '../../assets/img/Cross-platform.png';
import HPElite from '../../assets/img/Hp-Eliete.png';
import CPUBlack from '../../assets/img/cpublack.png';

const FirstContent = () => {
  return (
    <>
      <Container fluid>
        <Carousel className="carousel pt-5" controls={false} indicators={true} fade>
          <Carousel.Item>
            <Row>
              <Col sm={6} className="imgslide">
                <img src={CrossPlatform} alt="slide" text="First slide" />
              </Col>
              <Col sm={6}>
                <Carousel.Caption>
                  <h3>Ga Cuma Servis dan Jualan, Bikin Aplikasi juga.</h3>
                  <p>Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke armadacom.id. Sebagai penunjang aktifitas bisnis kalian</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={6} className="imgslide">
                <img src={HPElite} alt="slide" text="Second slide" />
              </Col>
              <Col sm={6}>
                <Carousel.Caption>
                  <h3>Udah muter muter, ujungnya ke Armadacom.id</h3>
                  <p>Armadacom.id adalah Toko komputer terlengkap di Wonosobo, menyediakan berbagai perangkat komputer dan perangkat jaringan</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={6} className="imgslide">
                <img src={CPUBlack} alt="slide" text="Third slide" />
              </Col>
              <Col sm={6}>
                <Carousel.Caption>
                  <h3>Ngapain Berhari hari, Kalo Sehari Jadi</h3>
                  <p>Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke armadacom.id. Sebagai penunjang aktifitas bisnis kalian</p>
                </Carousel.Caption>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default FirstContent;

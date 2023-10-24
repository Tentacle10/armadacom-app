import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Damkar from "../../assets/img/damkar.png";

const DamkarContent = () => {
  return (
    <>
      <Container id="damkar">
        <Row className=" px-3">
          <Col className="judul mt-5 mb-3">DAMKAR EXPRESS</Col>
        </Row>
        <Row className="damkar text-light d-flex justify-content-center align-items-center flex-column text-center px-5 pb-5">
          <Col sm={6} className=" mb-3 mt-3 d-flex justify-content-center">
            <img src={Damkar} alt="slide" className="" />
          </Col>
          <Col sm={6}>
            <div className="fs-5 fw-bolder">DAMKAR - ANDA BELI KAMI ANTAR</div>
            <div className="fs-6">
              Menyediakan layanan jasa antar-jemput pembelian dan servis di
              Armada Computer. Tentunya dengan harga paling terjangkau.
            </div>
          </Col>
          <Button
            className="w-button mt-4 px-3 py-2 w-50"
            variant="light"
            href="https://damkar.armadacom.id/"
          >
            Lihat Harga
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default DamkarContent;

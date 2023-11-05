import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Logo from "../../assets/logo/damkar.png";
import Banner from "../../assets/img/damkar.png";

const DamkarContent = () => {
  return (
    <>
      <Container id="damkar" style={{paddingTop: "4rem"}}>
        <Row className="damkar text-light">
          <Col sm={5} className="gbdamkar d-flex justify-content-center align-items-center p-4">
            <img src={Banner} alt="slide" />
          </Col>
          <Col sm={6} className="d-flex flex-column text-center justify-content-start justify-content-md-center align-items-center px-md-5 pt-md-4 pb-4" style={{textShadow: "2px 2px 5px #555"}}>
            <img src={Logo} alt="slide" className="logodankar" />
            <div className="fw-bold fs-4 pb-md-3">ANDA BELI KAMI ANTAR</div>
            <div className="dtext fw-lighter text-opacity-75">Menyediakan layanan jasa antar-jemput pembelian dan servis di Armada Computer. Tentunya dengan harga paling terjangkau.</div>

            <Button className="w-button mt-4 px-3 py-2" variant="light" href="https://damkar.armadacom.id/" style={{color: "#2e64aa", fontWeight: "600", textShadow: "1px 1px 1px #fff", boxShadow: "rgb(63 63 63 / 50%) 0px 5px 10px 0px"}}>
              Lihat Harga
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DamkarContent;

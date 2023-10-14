import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iPhone from "../../assets/img/Iphone-Mockup.png";
import Button from "react-bootstrap/Button";
import PlayStore from "../../assets/icon/playstore-svgrepo-com.svg";

const ThirdContent = () => {
  return (
    <>
      <Container
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#2e64aa",
          marginTop: "3rem",
          borderRadius: "20px",
        }}
        className="thirdcontent d-flex justify-content-center"
      >
        <Row className="d-flex justify-content-center">
          <Col
            md={4}
            style={{
              backgroundColor: "#fff",
              height: "100%",
              borderRadius: "20px",
              justifyContent: "center",
            }}
            className="iPhone p-3"
          >
            <img src={iPhone} alt="iPhone" style={{ width: "100%" }} />
          </Col>
          <Col md={8} className="text-light">
            <Row className="d-flex">
              <Row md={12} className="txt-center fw-bold">
                <div>Fitur Tracking Service</div>
              </Row>
              <Row md={12} className="fw-lighter">
                Memudahkan customer dalam memantau progres service
              </Row>
              <Row md={12} className="fw-bold">
                Aplikasi Armadacom
              </Row>
              <Row md={12} className="fw-lighter">
                Download sekarang di playstore untuk menikmati fitur tracking
                dan live update harga.
              </Row>
              <Button
                className="ms-4 me-2 w-button d-flex align-items-center px-3 py-2"
                variant="outline-light"
              >
                <img src={PlayStore} alt="PlayStore" width={20} />
                Download
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdContent;

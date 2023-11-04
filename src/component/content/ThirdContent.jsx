import { Container, Row, Col } from "react-bootstrap";
import iPhone from "../../assets/img/Iphone-Mockup.png";
import Button from "react-bootstrap/Button";
import PlayStore from "../../assets/icon/playstore-svgrepo-com.svg";

const ThirdContent = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 pt-3 mx-1 d-block d-md-none">
          <Col className="judul fs-6">SERVICE CENTER</Col>
        </Row>
      </Container>
      <Container id="service" className="d-flex justify-content-center">
        <Row className="third mt-3 d-flex justify-content-center">
          <Col className="text-light d-flex justify-content-center align-items-center flex-column text-center px-5 pt-5 d-block d-md-none">
            <div className="fw-bold fs-3">Fitur Tracking Service</div>
            <div className="fw-lighter fs-6 text-light text-opacity-75">
              Memudahkan customer dalam memantau progres service
            </div>
          </Col>
          <Col md={4} className="iPhone">
            <img src={iPhone} alt="phone" />
          </Col>
          <Col
            md={8}
            className="text-light d-flex justify-content-center align-items-center flex-column text-center px-2 pb-5 py-md-1"
          >
            <div className="fservice fw-bold fs-3 d-none d-sm-block">
              Fitur Tracking Service
            </div>
            <div className="tservice fw-lighter text-light text-opacity-75 d-none d-sm-block">
              Memudahkan customer dalam memantau progres service
            </div>
            <div className="fservice fw-bold fs-3 mt-4">Aplikasi Armadacom</div>
            <div className="tservice fw-lighter text-light text-opacity-75 fs-6">
              Download sekarang di playstore untuk menikmati fitur tracking dan
              live update harga.
            </div>
            <Button
              className="w-button mt-4 px-3 py-2"
              variant="light"
              href="https://play.google.com/store/apps/details?id=com.wingbuk.armadacom"
            >
              <img
                src={PlayStore}
                alt="PlayStore"
                width={20}
                className="me-2"
              />
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdContent;

import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import {
  Windows,
  Tools,
  GearWideConnected,
  ArrowRepeat,
  Webcam,
  Motherboard,
} from "react-bootstrap-icons";
import iPhone from "../../assets/img/Iphone-Mockup.png";
import PlayStore from "../../assets/icon/playstore-svgrepo-com.svg";

const ServiceContent = () => {
  const servicecard = [
    {
      icon: <Windows size={45} />,
      title: "Install Ulang",
      text: "Install ulang sistem operasi PC ataupun Laptop untuk merefresh sistem supaya kembali seperti baru",
    },
    {
      icon: <Tools size={45} />,
      title: "Service Hardware",
      text: "Servis hardware Komputer, Laptop, atau Printer kalian, mencakup kerusakan LED, Keyboard, dll",
    },
    {
      icon: <GearWideConnected size={45} />,
      title: "Maintenance Software",
      text: "Kendala yang berhubungan dengan software Laptop ataupun PC, dari kendala sistem, sampai aktivasi",
    },
    {
      icon: <ArrowRepeat size={45} />,
      title: "Upgrade Sparepart",
      text: "Upgrade device supaya kondisi semakin prima dan cepat Upgrade RAM, HDD, SSD, dll",
    },
    {
      icon: <Webcam size={45} />,
      title: "CCTV dan Jaringan",
      text: "Service dan pemasangan CCTV, IPCam, Smart IPCAM, dan Jaringan Internet dan Wi-Fi",
    },
    {
      icon: <Motherboard size={45} />,
      title: "Service Mainboard",
      text: "Cek service mesin ditunggu. Bagian Mesin atau Mainboard sering menyebabkan laptop mati",
    },
  ];
  return (
    <>
      <Container className="cservice">
        <Row
          md={8}
          className="appservice align-items-center justify-content-center text-light"
        >
          <Col className="d-flex flex-column justify-content-center align-items-center text-center d-block d-md-none">
            <div className="ls ts fw-bold fs-3">Fitur Tracking Service</div>
            <div className="ls body-text-light text-opacity-75">
              Memudahkan customer dalam memantau progres service
            </div>
          </Col>
          <Col md={4} className="iPhone d-flex justify-content-center">
            <img src={iPhone} alt="phone" style={{}} />
          </Col>
          <Col
            md={4}
            className="d-flex flex-column text-center justify-content-start justify-content-md-center align-items-center"
          >
            <div className="ls ts fw-bold fs-3 d-none d-md-block">
              Fitur Tracking Service
            </div>
            <div className="ts body-text-light text-opacity-75 d-none d-md-block">
              Memudahkan customer dalam memantau progres service
            </div>
            <div className="ls ts fw-bold fs-3 mt-md-4">Aplikasi Armadacom</div>
            <div className="ts body-text-light text-opacity-75 fs-6">
              Download sekarang di playstore untuk menikmati fitur tracking dan
              live update harga.
            </div>
            <Button
              className="btn-a mt-4 px-3 py-2"
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
        <Row className="service align-items-center justify-content-center">
          <Col md={12} className="text-center mt-4 mb-2">
            <h6 style={{ color: "#9b9b9b", fontWeight: "600" }}>
              ARMADA SERVICE
            </h6>
            <Badge bg="danger">Cepat</Badge>
            <Badge bg="info" className="mx-2">
              Rapi
            </Badge>
            <Badge bg="warning">Berkualitas</Badge>
          </Col>
          <Col
            md={12}
            style={{ height: "100%" }}
            className="d-flex align-items-center"
          >
            <Row xs={1} md={3}>
              {servicecard.map((servicecard, index) => (
                <Col key={index} className="acard">
                  <Row className="about-card">
                    <Col
                      xs={2}
                      className="about-icon d-flex justify-content-center align-items-center"
                    >
                      {servicecard.icon}
                    </Col>
                    <Col xs={12}>
                      <div className="ls title-card">{servicecard.title}</div>
                      <div className="body-text">{servicecard.text}</div>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceContent;

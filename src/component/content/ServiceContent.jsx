import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  Windows,
  Tools,
  GearWideConnected,
  ArrowRepeat,
  Webcam,
  Motherboard,
} from "react-bootstrap-icons";

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
        <Row className="service align-items-center justify-content-center">
          <Col md={12} className="text-center mb-2">
            <h6 style={{ color: "rgb(111 111 111/ 70%)", fontWeight: "600" }}>
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

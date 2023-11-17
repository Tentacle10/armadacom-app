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
      text: "Service dan pemasangan CCTV, IPCam, Smart IPCAM, dan Jaringan Internet/Wi-Fi",
    },
    {
      icon: <Motherboard size={45} />,
      title: "Service Mainboard",
      text: "Cek service mesin ditunggu. Bagian Mesin atau Mainboard sering menyebabkan laptop mati",
    },
  ];
  return (
    <>
      <Container
        className="cservice"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row className="appservice">
            <Col
              md={4}
              className="iPhone"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={iPhone} alt="phone" style={{}} />
            </Col>
            <Col
              md={8}
              className="flex-column text-center text-light"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ls ts fw-bold fs-3 d-none d-md-block">
                Fitur Tracking Service
              </div>
              <div className="ts fw-lighter text-opacity-75 d-none d-md-block">
                Memudahkan customer dalam memantau progres service
              </div>
              <div className="ls ts fw-bold fs-3 mt-md-4">
                Aplikasi Armadacom
              </div>
              <div className="ts fw-lighter text-opacity-75 fs-6">
                Download sekarang di playstore untuk menikmati fitur tracking
                dan live update harga.
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
          <Col
            md={12}
            className="flex-column"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6
              style={{
                margin: "1rem 0 0.5rem 0",
                color: "#9b9b9b",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              ARMADA SERVICE
            </h6>
            <div md={12} className="text-center fw-bold fs-6 pb-2">
              <Badge bg="danger">Cepat</Badge>
              <Badge bg="info" className="mx-2">
                Rapi
              </Badge>
              <Badge bg="warning">Berkualitas</Badge>
            </div>
          </Col>

          <Col
            md={4}
            className="bg-primary"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid #000",
            }}
          >
            <div
              className="p-3 bg-warning"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #000",
              }}
            >
              dasdasdasdasd
            </div>
          </Col>
          <Col
            md={4}
            className="bg-primary"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid #000",
            }}
          >
            <div
              className="p-3 bg-warning"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #000",
              }}
            >
              dasdasdasdasd
            </div>
          </Col>
          <Col
            md={4}
            className="bg-primary"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid #000",
            }}
          >
            <div
              className="p-3 bg-warning"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #000",
              }}
            >
              dasdasdasdasd
            </div>
          </Col>
          <Col
            md={4}
            className="bg-primary"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid #000",
            }}
          >
            <div
              className="p-3 bg-warning"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #000",
              }}
            >
              dasdasdasdasd
            </div>
          </Col>
          <Col
            md={4}
            className="bg-primary"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid #000",
            }}
          >
            <div
              className="p-3 bg-warning"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #000",
              }}
            >
              dasdasdasdasd
            </div>
          </Col>
          <Col
            md={4}
            className="bg-primary"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid #000",
            }}
          >
            <div
              className="p-3 bg-warning"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid #000",
              }}
            >
              dasdasdasdasd
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceContent;

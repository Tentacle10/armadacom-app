import {Container, Row, Col, Button, Card, Badge} from "react-bootstrap";
import {Windows, Tools, GearWideConnected, ArrowRepeat, Webcam, Motherboard} from "react-bootstrap-icons";
import iPhone from "../../assets/img/Iphone-Mockup.png";
import PlayStore from "../../assets/icon/playstore-svgrepo-com.svg";

const ServiceContent = () => {
  const servicecard = [
    {
      icon: <Windows size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Install Ulang",
      text: "Install ulang sistem operasi PC ataupun Laptop untuk merefresh sistem supaya kembali seperti baru.",
    },
    {
      icon: <Tools size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Service Hardware",
      text: "Servis hardware Komputer, Laptop, atau Printer kalian, mencakup kerusakan LED, Keyboard, Engsel, dll.",
    },
    {
      icon: <GearWideConnected size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Maintenance Software",
      text: "Kendala yang berhubungan dengan software Laptop ataupun PC, dari kendala sistem, sampai aktivasi.",
    },
    {
      icon: <ArrowRepeat size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Upgrade Sparepart",
      text: "Upgrade device supaya kondisi semakin prima dan cepat Upgrade RAM, HDD, SSD, dll.",
    },
    {
      icon: <Webcam size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "CCTV dan Jaringan",
      text: "Service dan pemasangan CCTV, IPCam, Smart IPCAM, dan juga Jaringan Internet/WiFi.",
    },
    {
      icon: <Motherboard size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Service Mainboard",
      text: "Cek service mesin ditunggu. Bagiam Mainboard atau mesin sering menyebabkan laptop mati.",
    },
  ];
  return (
    <>
      <Container id="service" style={{paddingTop: "4rem"}}>
        <Row className="service">
          <Row className="appservice text-light">
            <Col className="d-flex flex-column justify-content-center align-items-center text-center d-block d-md-none pt-md-3" style={{textShadow: "2px 2px 5px #555"}}>
              <div className="fw-bold fs-3">Fitur Tracking Service</div>
              <div className="fw-lighter fs-6 text-opacity-75">Memudahkan customer dalam memantau progres service</div>
            </Col>
            <Col md={4} className="iPhone d-flex justify-content-center">
              <img src={iPhone} alt="phone" style={{}} />
            </Col>
            <Col md={7} className="d-flex flex-column text-center justify-content-start justify-content-md-center align-items-center px-md-5 pt-md-4 pb-4" style={{textShadow: "2px 2px 5px #555"}}>
              <div className="fw-bold fs-3 d-none d-md-block">Fitur Tracking Service</div>
              <div className="fw-lighter text-opacity-75 d-none d-md-block">Memudahkan customer dalam memantau progres service</div>
              <div className="fw-bold fs-3 mt-md-4">Aplikasi Armadacom</div>
              <div className="fw-lighter text-opacity-75 fs-6">Download sekarang di playstore untuk menikmati fitur tracking dan live update harga.</div>
              <Button
                className="w-button mt-4 px-3 py-2"
                variant="light"
                href="https://play.google.com/store/apps/details?id=com.wingbuk.armadacom"
                style={{
                  color: "#2e64aa",
                  fontWeight: "600",
                  textShadow: "1px 1px 1px #fff",
                  boxShadow: "rgb(63 63 63 / 50%) 0px 5px 10px 0px",
                }}
              >
                <img src={PlayStore} alt="PlayStore" width={20} className="me-2" />
                Download
              </Button>
            </Col>
          </Row>
          <Row className="aservice justify-content-center align-items-center">
            <Col xs={10} className="text-center fw-bold fs-5 pt-md-3 pt-4" style={{color: "#9b9b9b"}}>
              ARMADA SERVICE
            </Col>
            <Col xs={10} className="text-center fw-bold fs-6 pb-2">
              <Badge bg="danger">Cepat</Badge>
              <Badge bg="info" className="mx-2">
                Rapi
              </Badge>
              <Badge bg="warning">Berkualitas</Badge>
            </Col>
            <Col md={10} className="d-flex align-items-center pb-4" style={{height: "100%"}}>
              <Row xs={1} md={3} className="g-3 py-3 g-md-4 p-md-3">
                {servicecard.map((isiabout, index) => (
                  <Col key={index}>
                    <Card
                      style={{
                        color: "#9b9b9b",
                        borderRadius: "11px",
                        border: "0",
                        boxShadow: "0 5px 10px 0 rgba(138, 155, 165, 0.3)",
                      }}
                    >
                      <Row className="p-3 justify-content-between">
                        <Col xs={3} md={2} className="ps-4 align-self-center align-item-center">
                          {isiabout.icon}
                        </Col>
                        <Col
                          xs={9}
                          md={8}
                          className="pe-4 align-self-center align-item-center"
                          style={{
                            fontSize: "14px",
                            color: "#555",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          {isiabout.title}
                        </Col>
                        <div className="h-divider">
                          <div className="shadow"></div>
                        </div>
                        <Col xs={12} className="pt-2 px-4">
                          <Card.Text>{isiabout.text}</Card.Text>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ServiceContent;

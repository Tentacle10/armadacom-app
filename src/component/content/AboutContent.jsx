import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {Shop, Tools, Terminal, Headset} from "react-bootstrap-icons";

const AboutContent = () => {
  const aboutcard = [
    {
      icon: <Shop size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Store",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll",
    },
    {
      icon: <Tools size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Service",
      text: "Service perangkat Laptop, Komputer, Printer, Jaringan, dll",
    },
    {
      icon: <Terminal size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Software",
      text: "Pengembangan software berbasis Web dan Android",
    },
    {
      icon: <Headset size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "IT Consultant",
      text: "Konsultasi terkait kebutuhan dan produk IT",
    },
  ];
  return (
    <>
      <Container className="cabout" fluid>
        <Row className="about align-items-center justify-content-center">
          <Col md={3} className="aboutcol">
            <div className="title">
              <h6 style={{color: "#9b9b9b", fontWeight: "600"}}>ABOUT US</h6>
              <h2 className="pb-md-3" style={{fontWeight: "600"}}>
                Melayani segala kebutuhan IT
              </h2>
            </div>
            <div className="body-text">
              Armada Computer hadir sebagai toko komputer terlengkap di Wonosobo, menawarkan berbagai peralatan komputer dan perangkat jaringan. Dari komponen utama seperti CPU, motherboard, hingga aksesori seperti keyboard dan mouse, Kami
              juga menyediakan solusi lengkap untuk kebutuhan teknologi informasi.
            </div>
          </Col>
          <Col md={7} className="d-flex align-items-center">
            {aboutcard.map((isiabout, index) => (
              <Row key={index} className="drop">
                <Col md={3} className="d-flex content-drop flex-column align-self-center align-item-center">
                  <Col className="mb-3 align-self-center align-item-center">{isiabout.icon}</Col>
                  <Col
                    style={{
                      fontSize: "18px",
                      color: "#555",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    {isiabout.title}
                  </Col>
                  <Col>{isiabout.text}</Col>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutContent;

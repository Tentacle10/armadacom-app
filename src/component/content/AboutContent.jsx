import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {Shop, Tools, Terminal, Headset} from "react-bootstrap-icons";

const AboutContent = () => {
  const aboutcard = [
    {
      icon: <Shop size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Store",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll.",
    },
    {
      icon: <Tools size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Service",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll.",
    },
    {
      icon: <Terminal size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "Software",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll.",
    },
    {
      icon: <Headset size={45} style={{color: "rgb(169 169 169)"}} />,
      title: "IT Consultant",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll.",
    },
  ];
  return (
    <>
      <Container id="about" className="cabout">
        <Row className="about align-items-center justify-content-center">
          <Col md={3} style={{height: "100%"}} className="p-3">
            <Col className="pb-md-1" style={{fontSize: "1rem", color: "#9b9b9b"}}>
              ARMADA COMPUTER
            </Col>
            <Col className="pb-md-3" style={{fontSize: "1rem", fontWeight: "600"}}>
              Melayani segala kebutuhan IT
            </Col>
            <Col className="atext">
              Armada Computer atau yang sekarang lebih dikenal dengan Armadacom.id merupakan toko komputer terlengkap di Wonosobo yang menyediakan berbagai perihal komputer dan jaringan. Berikut layanan yang kami sediakan
            </Col>
          </Col>
          <Col md={8} style={{height: "100%"}} className="d-flex align-items-center">
            <Row xs={1} md={2} className="g-3 py-3 g-md-4 p-md-3">
              {aboutcard.map((isiabout, index) => (
                <Col key={index}>
                  <Card style={{color: "#9b9b9b", borderRadius: "11px", border: "0", boxShadow: "0 5px 10px 0 rgba(138, 155, 165, 0.3)"}}>
                    <Row className="p-3">
                      <Col xs={2} className="align-self-center align-item-center">
                        {isiabout.icon}
                      </Col>
                      <Col xs={10}>
                        <Card.Body>
                          <Card.Title style={{fontSize: "15px", color: "#555", fontWeight: "600", textTransform: "uppercase"}}>{isiabout.title}</Card.Title>
                          <Card.Text>{isiabout.text}</Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutContent;

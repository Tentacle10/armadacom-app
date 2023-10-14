import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const SecondContent = () => {
  return (
    <>
      <Container fluid>
        <Row className="mx-3 my-5">
          <Col md={6} className="p-5 d-flex">
            <Col>
              <Col>
                <Col className="tag">ARMADACOM.ID</Col>
                <Col className="title fw-bolder">
                  Melayani segala kebutuhan IT
                </Col>
                <Col className="text">
                  Armada Computer atau yang sekarang lebih dikenal dengan
                  Armadacom.id merupakan toko komputer terlengkap di Wonosobo
                  yang menyediakan berbagai peripheral komputer dan jaringan.
                  Berikut layanan yang kami sediakan
                </Col>
              </Col>
            </Col>
          </Col>
          <Col md={6}>
            <Row className="rows-cols-2">
              <Row>
                <Col md={6}>
                  <Card style={{}}>
                    <div sm={6} className="icon text-center">
                      <StoreRoundedIcon
                        sx={{ fontSize: 50, color: "#70707e" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Store</Card.Title>
                      <Card.Text>
                        Penjualan Perangkat Hardware dan Software
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{}}>
                    <div className="text-center">
                      <HandymanRoundedIcon
                        sx={{ fontSize: 50, color: "#70707e" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Service Center</Card.Title>
                      <Card.Text>
                        Service perangkat Laptop, Komputer, Printer, dll.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Card style={{}}>
                    <div className="text-center">
                      <TerminalRoundedIcon
                        sx={{ fontSize: 50, color: "#70707e" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Software Dev</Card.Title>
                      <Card.Text>
                        Pengembangan software berbasis Web dan Android.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{}}>
                    <div className="text-center">
                      <SupportAgentRoundedIcon
                        sx={{ fontSize: 50, color: "#70707e" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>IT Consultant</Card.Title>
                      <Card.Text>
                        Konsultasi terkait kebutuhan dab produk IT.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecondContent;

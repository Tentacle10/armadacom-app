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
        <Row className="">
          <Col md={6} className="d-flex">
            <Col className="d-flex justify-content-center align-items-center">
              <Col className="py-4 px-3">
                <Col className="text-abu fs-5">ARMADACOM.ID</Col>
                <Col className="title fw-bolder fs-3">
                  Melayani segala kebutuhan IT
                </Col>
                <Col className="text-abu">
                  Armada Computer atau yang sekarang lebih dikenal dengan
                  Armadacom.id merupakan toko komputer terlengkap di Wonosobo
                  yang menyediakan berbagai perihal komputer dan jaringan.
                  Berikut layanan yang kami sediakan
                </Col>
              </Col>
            </Col>
          </Col>
          <Col md={6}>
            <Row className="rows-cols-2">
              <Col md={6} className="box">
                <Card style={{}}>
                  <div sm={6} className="icon text-center">
                    <StoreRoundedIcon sx={{ fontSize: 50, color: "#70707e" }} />
                  </div>
                  <Card.Body>
                    <Card.Title>Store</Card.Title>
                    <Card.Text className="text-abu">
                      Penjualan Perangkat Hardware dan Software
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card style={{}}>
                  <div className="text-center">
                    <HandymanRoundedIcon
                      sx={{ fontSize: 50, color: "#70707e" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Service Center</Card.Title>
                    <Card.Text className="text-abu">
                      Service perangkat Laptop, Komputer, Printer, dll.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card style={{}}>
                  <div className="text-center">
                    <TerminalRoundedIcon
                      sx={{ fontSize: 50, color: "#70707e" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Software Dev</Card.Title>
                    <Card.Text className="text-abu">
                      Pengembangan software berbasis Web dan Android.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card style={{}}>
                  <div className="text-center">
                    <SupportAgentRoundedIcon
                      sx={{ fontSize: 50, color: "#70707e" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>IT Consultant</Card.Title>
                    <Card.Text className="text-abu">
                      Konsultasi terkait kebutuhan dab produk IT.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecondContent;

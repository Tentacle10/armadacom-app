import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Shop, Tools, Terminal, Headset } from "react-bootstrap-icons";
import "./content.css";

const SecondContent = () => {
  return (
    <>
      <Container id="about">
        <Row>
          <Col className="batas-atas"></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={3} className="d-flex">
            <Col className="d-flex justify-content-center align-items-center">
              <Col className="py-4 px-3">
                <Col className="judul fs-6 d-block d-md-none">ARMADACOM.ID</Col>
                <Col className="fs-5 fw-bolder mb-2">
                  Melayani segala kebutuhan IT
                </Col>
                <Col className="fs-6 text-abu">
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
                <Card>
                  <Row style={{ width: "130%" }}>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Shop className="card-icon" />
                      {/* <StoreRoundedIcon className="card-icon" /> */}
                    </Col>
                    <Col className="col-9">
                      <Card.Body className="pe-md-4">
                        <Card.Title>Store</Card.Title>
                        <Card.Text className="text-abu">
                          Penjualan Perangkat Laptop, Komputer, Printer,
                          Jaringan, dll.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row style={{ width: "120%" }}>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Tools className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body className="pe-md-4">
                        <Card.Title>Service Center</Card.Title>
                        <Card.Text className="text-abu">
                          Service Perangkat Laptop, Komputer, Printer, Jaringan,
                          dll.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row style={{ width: "130%" }}>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Terminal className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body className="pe-md-4">
                        <Card.Title>Software Dev</Card.Title>
                        <Card.Text className="text-abu">
                          Pengembangan software berbasis Web dan Android.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row style={{ width: "130%" }}>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Headset className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body className="pe-md-4">
                        <Card.Title>IT Consultant</Card.Title>
                        <Card.Text className="text-abu">
                          Konsultasi terkait kebutuhan dab produk IT.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
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

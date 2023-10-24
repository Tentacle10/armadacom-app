import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  Windows,
  Tools,
  GearWideConnected,
  ArrowRepeat,
  Webcam,
  Motherboard,
} from "react-bootstrap-icons";

const FourthContent = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6} className="d-flex">
            <Col className="d-flex justify-content-center align-items-center">
              <Col className="py-4 px-1">
                <Col className="title fw-bolder fs-5">
                  SATSET - Cepat Rapi Berkualitas
                </Col>
                <Col className="text-abu">
                  Layanan perbaikan perangkat computer, dari mulai PC, Laptop,
                  Jaringan, CCTV, dan juga Printer.
                </Col>
              </Col>
            </Col>
          </Col>
          <Col md={6}>
            <Row className="rows-cols-2">
              <Col md={6} className="box">
                <Card>
                  <Row>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Windows className="card-icon" />
                      {/* <StoreRoundedIcon className="card-icon" /> */}
                    </Col>
                    <Col className="col-9">
                      <Card.Body>
                        <Card.Title>Install Ulang</Card.Title>
                        <Card.Text className="text-abu">
                          Install ulang sistem operasi PC ataupun Laptop untuk
                          merefresh sistem supaya kembali seperti baru.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Tools className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body>
                        <Card.Title>Service Hardware</Card.Title>
                        <Card.Text className="text-abu">
                          Kerusakan hardware PC dan atau Laptop kalian, mencakup
                          kerusakan LED, Tombol, Keyboard, Printer, dll.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <GearWideConnected className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body>
                        <Card.Title>Maintenance Software</Card.Title>
                        <Card.Text className="text-abu">
                          Kendala yang berhubungan dengan software Laptop
                          ataupun PC, dari kendala sistem, sampai aktivasi.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <ArrowRepeat className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body>
                        <Card.Title>Upgrade Sparepart</Card.Title>
                        <Card.Text className="text-abu">
                          Upgrade device supaya kondisi semakin prima dan cepat.
                          Upgrade RAM, HDD, SSD, dll.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Webcam className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body>
                        <Card.Title>CCTV dan Jaringan</Card.Title>
                        <Card.Text className="text-abu">
                          Service dan pemasangan CCTV, IPCam, Smart IPCAM, dan
                          juga Jaringan Internet/WiFi.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6} className="box">
                <Card>
                  <Row>
                    <Col className="col-3 icon text-center align-self-center align-item-center">
                      <Motherboard className="card-icon" />
                    </Col>
                    <Col className="col-9">
                      <Card.Body>
                        <Card.Title>Service Mainboard</Card.Title>
                        <Card.Text className="text-abu">
                          Cek service mesin ditunggu. Bagiam Mainboard atau
                          mesin sering menyebabkan laptop mati
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

export default FourthContent;

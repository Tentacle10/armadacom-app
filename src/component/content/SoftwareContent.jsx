import {useState} from "react";
import {Col, Container, Row, Card, ListGroup} from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Toska from "../../assets/img/dev/toska.png";
import UpSensei from "../../assets/img/dev/upsensei.png";
import Evoting from "../../assets/img/dev/evoting.png";
import Custom from "../../assets/img/dev/custom.png";

const SoftwareContent = () => {
  const devcard = [
    {
      icon: Toska,
      title: "Kasir App",
      desc: "Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.",
      harga: "1.499K",
    },
    {
      icon: UpSensei,
      title: "UP-SENSEI",
      desc: "Aplikasi Absensi menggunakan ID Card sebagai device absen, dengan laporan yang presisi dan mudah dipahami. Cepat,Mudah,Akurat.",
      harga: "1.499K",
    },
    {
      icon: Evoting,
      title: "E-Voting",
      desc: "Software vote pemilihan pimpinan untuk organisasi maupun instansi, kemudahan dalam rekap dan tanpa media kertas.",
      harga: "1.499K",
    },
    {
      icon: Custom,
      title: "Custom Software",
      desc: "Melayani pembuatan software berbasis website maupun android by request sesuai kebutuhan dan keinginan kalian.",
      harga: "1.499K",
    },
  ];
  return (
    <>
      <Container id="software" style={{paddingTop: "4rem"}}>
        <Row className="software align-items-center justify-content-center">
          <Col md={4} className="devimg">
            <img src={Devimg} alt="dev" />
          </Col>
          <Col md={8} className="d-flex flex-column align-items-center justify-content-center">
            <Col xs={12} className="fw-bold fs-5 ps-3" style={{color: "#9b9b9b"}}>
              ARMADA SOFTWARE
            </Col>
            <Col md={12} className="">
              <div className="fw-bolder pb-2 ps-3">PALUGADA - Apa yang lu mau Gue ada!</div>
              <div className="fs-6 ps-3" style={{color: "#9b9b9b"}}>
                Menyediakan software untuk penunjang aktifitas bisnis ataupun kegiatan instansi, dengan teknologi sebagai alat untuk meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.
              </div>
            </Col>
            <Col md={12} className="d-flex align-items-center pb-4" style={{height: "100%"}}>
              <Row xs={1} md={2} className="g-3 py-3 g-md-4 p-md-3">
                {devcard.map((devcard, index) => (
                  <Col key={index}>
                    <Card
                      className="carddev"
                      style={{
                        color: "#9b9b9b",
                        borderRadius: "11px",
                        border: "0",
                        boxShadow: "0 5px 10px 0 rgba(138, 155, 165, 0.3)",
                      }}
                    >
                      <Row className="card1 p-3 justify-content-start">
                        <Col xs={3} md={4} className="c1 align-self-center align-item-center">
                          <img src={devcard.icon} alt="Devimg" className="logodev ms-3 me-3" />
                        </Col>
                        <Col
                          xs={9}
                          md={6}
                          className="c2 align-self-center align-item-center"
                          style={{
                            fontSize: "18px",
                            color: "#555",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          {devcard.title}
                        </Col>
                        <div className="c3 h-divider">
                          <div className="shadow"></div>
                        </div>
                        <Col xs={12} className="c4 pt-2 px-4">
                          <Card.Text>{devcard.desc}</Card.Text>
                        </Col>
                        <Col xs={12} className="card2 px-4">
                          <h6>Start From</h6>
                          <h3>{devcard.harga}</h3>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Cross Platform</ListGroup.Item>
                            <ListGroup.Item>2 in 1 POS Jasa & Barang</ListGroup.Item>
                            <ListGroup.Item>Laporan Transaksi</ListGroup.Item>
                            <ListGroup.Item>Device Printing</ListGroup.Item>
                            <ListGroup.Item>Setting Lengkap & Mudah</ListGroup.Item>
                          </ListGroup>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SoftwareContent;

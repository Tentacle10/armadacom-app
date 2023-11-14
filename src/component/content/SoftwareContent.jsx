import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Toska from "../../assets/img/dev/toska.png";
import UpSensei from "../../assets/img/dev/upsensei.png";
import Evoting from "../../assets/img/dev/evoting.png";
import Custom from "../../assets/img/dev/custom.png";
import { CheckAll } from "react-bootstrap-icons";

const SoftwareContent = () => {
  const devcard = [
    {
      icon: Toska,
      title: "Aplikasi Kasir",
      desc: "Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.",
      harga: "1.499K",
      btn: "Buy Now",
    },
    {
      icon: UpSensei,
      title: "UP SENSEI",
      desc: "Aplikasi Absensi menggunakan ID Card sebagai device absen, dengan laporan yang presisi dan mudah dipahami.",
      harga: "1.499K",
      btn: "Buy Now",
    },
    {
      icon: Evoting,
      title: "E VOTING",
      desc: "Software vote pemilihan pimpinan untuk organisasi maupun instansi, kemudahan dalam rekap dan tanpa media kertas.",
      harga: "2.250K",
      btn: "Rent Now",
    },
    {
      icon: Custom,
      title: "Custom Aplikasi",
      desc: "Melayani pembuatan software berbasis website maupun android by request sesuai kebutuhan dan keinginan kalian.",
      harga: "$$$$$",
      btn: "Buy Now",
    },
  ];
  return (
    <>
      <Container style={{ paddingTop: "4rem" }}>
        <Row className="software align-items-center justify-content-center">
          <Col md={4} className="devimg">
            <img src={Devimg} alt="dev" />
          </Col>
          <Col
            md={8}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Col
              xs={12}
              className="fw-bold fs-5 ps-3 pt-3"
              style={{ color: "#9b9b9b" }}
            >
              ARMADA SOFTWARE
            </Col>
            <Col md={12} className="">
              <div className="fw-bolder pb-2 ps-3">
                PALUGADA - Apa yang lu mau Gue ada!
              </div>
              <div className="fs-6 ps-3" style={{ color: "#9b9b9b" }}>
                Menyediakan software untuk penunjang aktifitas bisnis ataupun
                kegiatan instansi, dengan teknologi sebagai alat untuk
                meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.
              </div>
            </Col>
            <Col
              md={12}
              className="d-flex align-items-center pb-4"
              style={{ height: "100%" }}
            >
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
                      <Row className="flex-column card1 align-items-center justify-content-center">
                        <Col xs={5} className="c1">
                          <img
                            src={devcard.icon}
                            alt="Devimg"
                            className="logodev"
                          />
                        </Col>
                        <Card.Title className="c2 text-center fw-bold">
                          {devcard.title}
                        </Card.Title>
                        <div className="c3 h-divider">
                          <div className="shadow"></div>
                        </div>
                        <Col xs={12} className="c4 pt-2 px-5">
                          <Card.Text>{devcard.desc}</Card.Text>
                        </Col>
                        <Col
                          xs={12}
                          className="card2 px-4 d-flex flex-column align-items-center justify-content-center "
                        >
                          <h6>Start From</h6>
                          <h1 className="fw-bold">{devcard.harga}</h1>
                          <Col className="list mt-3 mb-3">
                            <Col>
                              <CheckAll /> Cross Platform
                            </Col>
                            <Col>
                              <CheckAll /> 2 in 1 POS Jasa & Barang
                            </Col>
                            <Col>
                              <CheckAll /> Laporan Transaksi
                            </Col>
                            <Col>
                              <CheckAll /> Device Printing
                            </Col>
                            <Col>
                              <CheckAll /> Setting Lengkap & Mudah
                            </Col>
                          </Col>
                          <Button variant="light" className="btn-a ">
                            {devcard.btn}
                          </Button>
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

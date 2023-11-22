import {Col, Container, Row, Button} from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Toska from "../../assets/img/dev/toska.png";
import UpSensei from "../../assets/img/dev/upsensei.png";
import Evoting from "../../assets/img/dev/evoting.png";
import Custom from "../../assets/img/dev/custom.png";
import {CheckAll} from "react-bootstrap-icons";

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
      desc: "Software vote pemilihan pimpinan untuk organisasi maupun instansi kemudahan dalam rekap tanpa media kertas.",
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
      <Container className="csoftware">
        <Row className="software d-flex justify-content-center align-items-center">
          <Col md={4} className="devimg">
            <img src={Devimg} alt="dev" />
          </Col>
          <Col className="softwaredev d-flex flex-column align-items-center justify-content-center">
            <Col md={12} className="devdesc mb-3">
              <h6 className="fw-bold" style={{color: "rgb(111 111 111/ 70%)"}}>
                ARMADA SOFTWARE
              </h6>
              <h2 className="fw-bolder mb-2 text-uppercase">PALUGADA - Apa yang lu mau Gue ada!</h2>
              <div style={{color: "#9b9b9b"}}>Menyediakan software untuk penunjang aktifitas bisnis ataupun kegiatan instansi, dengan teknologi sebagai alat untuk meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.</div>
            </Col>
            <Col className="devcard">
              <Row md={12} className="card-container justify-content-center">
                {devcard.map((devcard, index) => (
                  <Col md={6} key={index} className="carddev">
                    <Row className="carddev-inner">
                      <div className="card-front text-center">
                        <img src={devcard.icon} alt="Devimg" className="logodev" />
                        <Col>
                          <div className="ls title-card">{devcard.title}</div>
                          <div className="body-text text-center">{devcard.desc}</div>
                        </Col>
                      </div>
                      <div className="card-back text-center">
                        <h6 style={{color: "#efefef"}}>Start From</h6>
                        <h1 className="fw-bold">{devcard.harga}</h1>
                        <Col className="list text-start mx-4">
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
                        <Button variant="light" className="mt-3 btn-a ">
                          {devcard.btn}
                        </Button>
                      </div>
                    </Row>
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

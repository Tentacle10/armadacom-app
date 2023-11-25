import { Col, Container, Row, Button } from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Toska from "../../assets/img/dev/toska.png";
import Asm from "../../assets/img/dev/asm.png";
import Evoting from "../../assets/img/dev/evoting.png";
import Custom from "../../assets/img/dev/custom.png";
import { Check } from "react-bootstrap-icons";

const SoftwareContent = () => {
  const devcard = [
    {
      icon: Toska,
      title: "Aplikasi Kasir",
      desc: "Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.",
      harga: "1.499K",
      btn: "Buy Now",
      f1: "Cross Platform",
      f2: "2 in 1 POS Jasa & Barang",
      f3: "Laporan Transaksi",
      f4: "Device Printing",
      f5: "Setting Lengkap & Mudah",
    },
    {
      icon: Asm,
      title: "ASM",
      desc: "Aplikasi Service Management berbasis web solusi efisien untuk merencanakan dan melaksanakan layanan teknis dengan inovasi tinggi.",
      harga: "2.899K",
      btn: "Buy Now",
      f1: "Cross Platform",
      f2: "Real-time Confirmation",
      f3: "Live Service Updates",
      f4: "Sistematis",
      f5: "Custom Feature",
    },
    {
      icon: Evoting,
      title: "E VOTING",
      desc: "Software vote pemilihan pimpinan untuk organisasi maupun instansi kemudahan dalam rekap tanpa media kertas.",
      harga: "2.250K",
      btn: "Rent Now",
      f1: "Penghitungan suara Cepat",
      f2: "ID Card Kartu Suara",
      f3: "Tanpa Kertas",
      f4: "Sistematis",
      f5: "Effisien",
    },
    {
      icon: Custom,
      title: "Custom Aplikasi",
      desc: "Melayani pembuatan software berbasis website maupun android by request sesuai kebutuhan dan keinginan kalian.",
      harga: "$$$$$",
      btn: "Buy Now",
      f1: "Custom sesuka hati",
      f2: "Sesuaikan kebutuhan",
      f3: "Konsultasi Software",
      f4: "Sustainable",
      f5: "Full License",
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
              <h6
                className="fw-bold"
                style={{ color: "rgb(111 111 111/ 70%)" }}
              >
                ARMADA SOFTWARE
              </h6>
              <h2 className="fw-bolder mb-2 text-uppercase">
                PALUGADA - Apa yang lu mau Gue ada!
              </h2>
              <div style={{ color: "#9b9b9b" }}>
                Menyediakan software untuk penunjang aktifitas bisnis ataupun
                kegiatan instansi, dengan teknologi sebagai alat untuk
                meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.
              </div>
            </Col>
            <Col className="devcard">
              <Row md={12} className="card-container justify-content-center">
                {devcard.map((devcard, index) => (
                  <Col md={6} key={index} className="carddev">
                    <Row className="carddev-inner">
                      <div className="card-front text-center">
                        <img
                          src={devcard.icon}
                          alt="Devimg"
                          className="logodev"
                        />
                        <Col>
                          <div className="ls title-card">{devcard.title}</div>
                          <div className="body-text text-center">
                            {devcard.desc}
                          </div>
                        </Col>
                      </div>
                      <div className="card-back text-center">
                        <h6 style={{ color: "#efefef" }}>Start From</h6>
                        <h1 className="fw-bold">{devcard.harga}</h1>
                        <Col className="list text-start mx-4">
                          <Col>
                            <Check /> {devcard.f1}
                          </Col>
                          <Col>
                            <Check /> {devcard.f2}
                          </Col>
                          <Col>
                            <Check /> {devcard.f3}
                          </Col>
                          <Col>
                            <Check /> {devcard.f4}
                          </Col>
                          <Col>
                            <Check /> {devcard.f5}
                          </Col>
                        </Col>
                        <Button
                          variant="light"
                          href="http://wa.me/085842027019"
                          className="mt-3 btn-a "
                        >
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

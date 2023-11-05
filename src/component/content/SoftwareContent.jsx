import React from "react";
import {Col, Container, Row, Card} from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Toska from "../../assets/img/dev/toska.png";
import UpSensei from "../../assets/img/dev/upsensei.png";
import Evoting from "../../assets/img/dev/evoting.png";
import Custom from "../../assets/img/dev/custom.png";
import {Shop, Tools, Terminal, Headset} from "react-bootstrap-icons";

const SoftwareContent = () => {
  const devcard = [
    {
      icon: Toska,
      title: "Toska",
      text: "Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.",
    },
    {
      icon: UpSensei,
      title: "UP-SENSEI",
      text: "Aplikasi Absensi menggunakan ID Card sebagai device absen, dengan laporan yang presisi dan mudah dipahami. Cepat,Mudah,Akurat.",
    },
    {
      icon: Evoting,
      title: "E-Voting",
      text: "Software vote pemilihan pimpinan untuk organisasi maupun instansi, kemudahan dalam rekap dan tanpa media kertas.",
    },
    {
      icon: Custom,
      title: "Custom Software",
      text: "Melayani pembuatan software berbasis website maupun android by request sesuai kebutuhan dan keinginan kalian.",
    },
  ];
  return (
    <>
      <Container id="software" style={{paddingTop: "4rem"}}>
        <Row className="software align-items-center justify-content-center">
          <Col md={4}>
            <img src={Devimg} alt="dev" className="devimg w-100" />
          </Col>
          <Col md={8} className="d-flex flex-column align-items-center justify-content-center">
            <Col xs={10} className="text-center fw-bold fs-5" style={{color: "#9b9b9b"}}>
              ARMADA SOFTWARE
            </Col>
            <Col md={12} className="">
              <div className="text-center fw-bolder pb-2">PALUGADA - Apa yang lu mau Gue ada!</div>
              <div className="fs-6 text-abu">Menyediakan software untuk penunjang aktifitas bisnis ataupun kegiatan instansi, dengan teknologi sebagai alat untuk meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.</div>
            </Col>
            <Col md={12} className="d-flex align-items-center pb-4" style={{height: "100%"}}>
              <Row xs={1} md={2} className="g-3 py-3 g-md-4 p-md-3">
                {devcard.map((devcard, index) => (
                  <Col key={index}>
                    <Card style={{color: "#9b9b9b", borderRadius: "11px", border: "0", boxShadow: "0 5px 10px 0 rgba(138, 155, 165, 0.3)"}}>
                      <Row className="p-3 justify-content-start">
                        <Col xs={3} md={2} className="align-self-center align-item-center">
                          <img src={devcard.icon} alt="Devimg" className="logodev ms-3 me-3" />
                        </Col>
                        <Col xs={9} md={8} className="pe-4 align-self-center align-item-center" style={{fontSize: "14px", color: "#555", fontWeight: "600", textTransform: "uppercase"}}>
                          {devcard.title}
                        </Col>
                        <div className="h-divider">
                          <div className="shadow"></div>
                        </div>
                        <Col xs={12} className="pt-2 px-4">
                          <Card.Text>{devcard.text}</Card.Text>
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

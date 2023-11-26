import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import satu from "../../assets/img/banner/1.jpg";
import dua from "../../assets/img/banner/2.jpg";
import tiga from "../../assets/img/banner/3.jpg";
import empat from "../../assets/img/banner/4.jpg";
import lima from "../../assets/img/banner/5.jpg";

const HeroContent = () => {
  const hero = [
    {
      img: satu,
      tag: "Udah muter muter ujungnya ke Armada",
      desc: "Armadacom adalah Toko komputer terlengkap di Wonosobo, menyediakan berbagai perangkat komputer dan perangkat jaringan",
    },
    {
      img: dua,
      tag: "Ngapain Berhari hari Kalo Sehari Jadi",
      desc: "Armadacom.id melayani service komputer, Laptop, Printer maupun Jaringan dan CCTV di wonosobo dengan kualitas pelayanan terbaik",
    },
    {
      img: lima,
      tag: "DAMKAR! Solusi Praktis Tanpa Ribet",
      desc: "Damkar hadir sebagai solusi penuh kenyamanan untuk kebutuhan jualan, servis, dan antar jemput. Nikmati kemudahan servis dan beli tanpa perlu keluar rumah",
    },
    {
      img: empat,
      tag: "Bikin Aplikasi Juga Bisa Tentunya",
      desc: "Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke Armadacom.id Sebagai penunjang aktifitas bisnis kalian",
    },
    {
      img: tiga,
      tag: "Laptop Anda Mati? Serahkan pada Ahlinya!",
      desc: "Kami adalah solusi terpercaya untuk laptop mati Anda. Percayakan pada ahli kami untuk menghidupkan kembali gadget Anda dengan keahlian dan layanan yang cepat.",
    },
  ];
  return (
    <>
      <Carousel className="hero" controls={true} indicators={true} fade>
        {hero.map((hero, index) => (
          <Carousel.Item key={index}>
            <Container className="slideshow" fluid>
              <div className="gradient-overlay"></div>

              <Row>
                <Col
                  md={8}
                  style={{
                    padding: "0",
                  }}
                >
                  <img
                    src={hero.img}
                    alt="laptop"
                    className="banner"
                    style={{
                      height: "100vh",
                      color: "#b90c4f",
                    }}
                  />
                </Col>
              </Row>
              <Row className="textBanner">
                <Col md={9} className="ls fs-1 fw-bold text-uppercase" style={{textShadow: "2px 2px 5px #555"}}>
                  {hero.tag}
                </Col>
                <Col md={9} className="mt-2 fs-5 body-text-light">
                  {hero.desc}
                </Col>
                <Col md={4} className="mt-3">
                  <Button variant="light" href="#about" className="btn-a">
                    Selengkapnya
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default HeroContent;

import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import HPElite from "../../assets/img/Hp-Eliete.png";
import CPUBlack from "../../assets/img/cpublack.png";
import Damkar from "../../assets/img/damkar.png";
import CrossPlatform from "../../assets/img/Cross-platform.png";
import satu from "../../assets/img/banner/1.jpg";
import dua from "../../assets/img/banner/2.jpg";
import tiga from "../../assets/img/banner/3.jpg";
import empat from "../../assets/img/banner/4.jpg";

const HeroContent = () => {
  const hero = [
    {
      img: HPElite,
      tag: "Udah muter muter ujungnya ke Armada",
      desc: "Armadacom adalah Toko komputer terlengkap di Wonosobo, menyediakan berbagai perangkat komputer dan perangkat jaringan",
    },
    {
      img: CPUBlack,
      tag: "Ngapain Berhari hari Kalo Sehari Jadi",
      desc: "Armadacom.id melayani service komputer, Laptop, Printer maupun Jaringan dan CCTV di wonosobo dengan kualitas pelayanan terbaik",
    },
    {
      img: Damkar,
      tag: "Anda Sibuk? Tidak bisa ke Toko Offline?",
      desc: "Selain jualan dan servis, ARMADA juga punya layanan antar jemput Lo.. di DAMKARin aja, Kapan lagi bisa servis/beli tanpa keluar rumah",
    },
    {
      img: CrossPlatform,
      tag: "Bikin Aplikasi Juga Bisa Tentunya",
      desc: "Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke Armadacom.id Sebagai penunjang aktifitas bisnis kalian",
    },
  ];
  return (
    <>
      <Container id="home" className="slideshow w-100" fluid>
        <div className="gradient-overlay"></div>
        <Row className="">
          <Col
            md={8}
            style={{
              padding: "0",
            }}
          >
            <img
              src={satu}
              alt="laptop"
              className="banner"
              style={{
                height: "100%",
                color: "#b90c4f",
              }}
            />
          </Col>
          <Col md={4}>asdasdasd</Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroContent;

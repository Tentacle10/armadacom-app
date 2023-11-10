import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import satu from "../../assets/img/banner/1.jpg";
import dua from "../../assets/img/banner/2.jpg";
import tiga from "../../assets/img/banner/3.jpg";
import empat from "../../assets/img/banner/4.jpg";

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
      img: tiga,
      tag: "Anda Sibuk? Tidak bisa ke Toko Offline?",
      desc: "Selain jualan dan servis, ARMADA juga punya layanan antar jemput Lo.. di DAMKARin aja, Kapan lagi bisa servis/beli tanpa keluar rumah",
    },
    {
      img: empat,
      tag: "Bikin Aplikasi Juga Bisa Tentunya",
      desc: "Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke Armadacom.id Sebagai penunjang aktifitas bisnis kalian",
    },
  ];
  return (
    <>
      <Carousel id="home" controls={true} indicators={true} fade>
        {hero.map((hero, index) => (
          <Carousel.Item key={index}>
            <Container className="slideshow w-100" fluid>
              <div className="gradient-overlay"></div>

              <Row className="">
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
              <Row className="textBanner flex-">
                <Col md={9} className="fs-2 fw-bold text-uppercase" style={{textShadow: "2px 2px 5px #555"}}>
                  {hero.tag}
                </Col>
                <Col md={9} className="fs-6 mt-2" style={{textShadow: "2px 2px 5px #555"}}>
                  {hero.desc}
                </Col>
                <Col md={4} className="mt-3">
                  <Button
                    className="mt-1"
                    variant="light"
                    href="#about"
                    style={{
                      color: "#2e64aa",
                      fontWeight: "600",
                      textShadow: "1px 1px 1px #fff",
                      boxShadow: "rgb(63 63 63 / 50%) 0px 5px 10px 0px",
                      width: "100%",
                    }}
                  >
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

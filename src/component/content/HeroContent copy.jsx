import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import HPElite from "../../assets/img/Hp-Eliete.png";
import CPUBlack from "../../assets/img/cpublack.png";
import Damkar from "../../assets/img/damkar.png";
import CrossPlatform from "../../assets/img/Cross-platform.png";

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
      <Container id="/" className="slideshow" fluid>
        <Carousel controls={false} indicators={true} fade>
          {hero.map((hero, index) => (
            <Carousel.Item key={index} className="carousel-item">
              <Row sm={8} className="row-carousel d-flex justify-content-center justify-content-md-end align-items-center">
                <Col sm={8} className="d-flex justify-content-center justify-content-md-center">
                  <img src={hero.img} alt="slide" />
                </Col>
                <Col sm={8} className="caption pt-3">
                  <h2 className="fw-bold text-uppercase fs-3" style={{textShadow: "rgb(85, 85, 85) 2px 2px 5px"}}>
                    {hero.tag}
                  </h2>
                  <p className="desc pt-1">{hero.desc}</p>
                </Col>
              </Row>
              <Row sm={8} className="justify-content-center">
                <Col className="text-center">
                  <Button
                    className="mt-1 w-button"
                    variant="light"
                    href="#about"
                    style={{
                      color: "#2e64aa",
                      fontWeight: "600",
                      textShadow: "1px 1px 1px #fff",
                      boxShadow: "rgb(63 63 63 / 50%) 0px 5px 10px 0px",
                    }}
                  >
                    Selengkapnya
                  </Button>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default HeroContent;

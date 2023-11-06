import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import Bintang from "./../../assets/brand/bintang.png";
import Elena from "./../../assets/brand/elena.png";
import Smk from "./../../assets/brand/smk_informatika_wsb.png";
import Sumbera from "./../../assets/brand/sumber_agung.png";
import Syf from "./../../assets/brand/syf.png";

const Footer = () => {
  return (
    <Container
      id="footer"
      style={{
        backgroundColor: "#2e64aa",
        height: "35vh",
      }}
      fluid
    >
      <Row
        className="align-items-start justify-content-center text-light"
        style={{ paddingTop: "2.3rem" }}
      >
        <Col xs={10} md={3} className="text-center text-md-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2354472943107!2d109.89963278960028!3d-7.360422349200887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1aaad2dd44d%3A0x6a66eadf4d7bc6e0!2sArmada%20Computer!5e0!3m2!1sen!2sid!4v1697420773581!5m2!1sen!2sid"
            // style={{ border: "1px solid" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
            style={{ width: "270px" }}
          />
        </Col>
        <Col xs={10} md={4} className="text-center">
          <Col
            md={12}
            className="fw-bold"
            style={{ textShadow: "rgb(85, 85, 85) 2px 2px 5px" }}
          >
            Partner Bussiness
          </Col>
          <Row className="justify-content-center p-md-3">
            <Col md={4} xs={6}>
              <img
                src={Bintang}
                alt="Bintang Sablon"
                style={{ width: "150px", padding: "0.5rem" }}
              />
            </Col>
            <Col md={4} xs={6}>
              <img
                src={Elena}
                alt="House of Elena"
                style={{ width: "150px", padding: "0.5rem" }}
              />
            </Col>
            <Col md={4} xs={6}>
              <img
                src={Smk}
                alt="SMK Informatika"
                style={{ width: "150px", padding: "0.5rem" }}
              />
            </Col>
            <Col md={4} xs={6} className="pt-md-3">
              <img
                src={Sumbera}
                alt="Sumber Agung"
                style={{ width: "150px", padding: "0.5rem" }}
              />
            </Col>
            <Col md={4} xs={6} className="pt-md-3">
              <img
                src={Syf}
                alt="SYF Store"
                style={{ width: "150px", padding: "0.5rem" }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={3} className="text-center text-md-end">
          <Col
            md={12}
            className="fw-bold"
            style={{ textShadow: "rgb(85, 85, 85) 2px 2px 5px" }}
          >
            Contact Us
          </Col>
          <Row className="flex-column py-md-3">
            <Col>Facebook</Col>
            <Col className="py-1">Instagram</Col>
            <Col>Tiktok</Col>
            <Col className="py-1">Whatsapp</Col>
          </Row>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center text-light">
        <Col md={10} className="text-light text-center">
          <p style={{ fontSize: "10px" }}>
            All Rights Reserved. Armadacom.id © 2023 - Tentackle Studio
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

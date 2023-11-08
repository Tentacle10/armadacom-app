import {Container, Row, Col} from "react-bootstrap";
import {GeoAltFill, ClockHistory, EnvelopeFill, TelephoneInboundFill} from "react-bootstrap-icons";
import "./footer.css";

const Footer = () => {
  return (
    <Container id="footer" className="footer" fluid>
      <Row className="align-items-start justify-content-center text-light" style={{paddingTop: "2.3rem", paddingBottom: "1rem"}}>
        <Col xs={10} md={3} className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2354472943107!2d109.89963278960028!3d-7.360422349200887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1aaad2dd44d%3A0x6a66eadf4d7bc6e0!2sArmada%20Computer!5e0!3m2!1sen!2sid!4v1697420773581!5m2!1sen!2sid"
            // style={{ border: "1px solid" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
            style={{width: "100%", boxShadow: "rgb(85, 85, 85) 2px 2px 5px"}}
          />
        </Col>
        <Col xs={10} md={3} className="address" style={{fontSize: "12px"}}>
          <Col md={12} className="fw-bold" style={{fontSize: "14px", textShadow: "rgb(85, 85, 85) 2px 2px 5px"}}>
            ARMADA COMPUTER
          </Col>
          <Row style={{lineHeight: "1.8rem", marginTop: "0.7rem"}}>
            <Col md={12}>
              <GeoAltFill />
              Jln. Girimargo 10A, Kerkop, Wonosobo
            </Col>
            <Col md={12}>
              <GeoAltFill />
              Jam Operasional : Senin - Sabtu | 08.00 - 16.30
            </Col>
            <Col md={12}>
              <GeoAltFill />
              armadacom.wsb@gmail.com
            </Col>
            <Col md={12}>
              <GeoAltFill />
              (+62) 286 322949
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={2} className="contact ms-3">
          <Col md={12} className="fw-bold" style={{textShadow: "rgb(85, 85, 85) 2px 2px 5px"}}>
            Contact Us
          </Col>
          <Row className="flex-column py-md-2">
            <Col>
              <GeoAltFill />
              Facebook
            </Col>
            <Col className="py-1">
              <GeoAltFill />
              Instagram
            </Col>
            <Col>
              <GeoAltFill />
              Tiktok
            </Col>
            <Col className="py-1">
              <GeoAltFill />
              Whatsapp
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={2} className="contact ms-3">
          <Col md={12} className="fw-bold" style={{textShadow: "rgb(85, 85, 85) 2px 2px 5px"}}>
            We Ready On
          </Col>
          <Row className="flex-column py-md-2">
            <Col>
              <GeoAltFill />
              Bukalapak
            </Col>
            <Col className="py-1">
              <GeoAltFill />
              Shopee
            </Col>
            <Col>
              <GeoAltFill />
              SIPLah
            </Col>
            <Col className="py-1">
              <GeoAltFill />
              Tokopedia
            </Col>
          </Row>
        </Col>
      </Row>
      <Row md={12} className="text-light">
        <Col md={12} className="text-center" style={{fontSize: "10px"}}>
          All Rights Reserved. Armadacom.id © 2023 - Tentackle Studio{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

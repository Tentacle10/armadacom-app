import { Container, Row, Col, Button } from "react-bootstrap";
import {
  GeoAltFill,
  ClockHistory,
  EnvelopeFill,
  TelephoneInboundFill,
} from "react-bootstrap-icons";
import bar from "./../../assets/icon/bar.png";
import Facebook from "./../../assets/icon/facebook.png";
import Instagram from "./../../assets/icon/instagram.png";
import Tiktok from "./../../assets/icon/tiktok.png";
import Whatsapp from "./../../assets/icon/whatsapp.png";
import Bukalapak from "./../../assets/icon/marketplace/bukalapak.png";
import Shopee from "./../../assets/icon/marketplace/shopee.png";
import Tokopedia from "./../../assets/icon/marketplace/tokopedia.png";
import SipLah from "./../../assets/icon/marketplace/siplah.png";
import "./footer.css";

const Footer = () => {
  const kaki = [
    {
      iconB: <GeoAltFill className="iconB" />,
      textB: "Jl Girimargo 10A, Kerkop, Wonosobo",
      url: "#",
    },
    {
      iconB: <ClockHistory className="iconB" />,
      textB: "Senin - Sabtu | 08.00 - 16.30",
      url: "#",
    },
    {
      iconB: <EnvelopeFill className="iconB" />,
      textB: "armadacom.wsb@gmail.com",
      url: "mailto:armadacom.wsb@gmail.com",
    },
    {
      iconB: <TelephoneInboundFill className="iconB" />,
      textB: "(+62) 286 322949",
      url: "tel:+62286322949",
    },
  ];

  const sos = [
    {
      iconSos: Facebook,
      textSos: "Facebook",
      url: "https://www.facebook.com/armadacom.id",
    },
    {
      iconSos: Tiktok,
      textSos: "TikTok",
      url: "https://www.tiktok.com/@armadacom.id",
    },
    {
      iconSos: Instagram,
      textSos: "Instagram",
      url: "https://www.instagram.com/armadacom.id/",
    },
    {
      iconSos: Whatsapp,
      textSos: "Whatsapp",
      url: "https://wa.me/625842027019",
    },
  ];

  const marketplace = [
    {
      iconMarket: Bukalapak,
      textMarket: "Bukalapak",
      url: "#",
    },
    {
      iconMarket: Shopee,
      textMarket: "Shopee",
      url: "https://shopee.co.id/armadacom.id",
    },
    {
      iconMarket: Tokopedia,
      textMarket: "Tokopedia",
      url: "https://www.tokopedia.com/armadacomputer",
    },
    {
      iconMarket: SipLah,
      textMarket: "SIPLah",
      url: "#",
    },
  ];
  return (
    <Container id="footer" className="footer" fluid>
      <Row
        className="align-items-start justify-content-center text-light"
        style={{ paddingTop: "2.3rem", paddingBottom: "1rem" }}
      >
        <Col xs={10} md={3} className="d-flex maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2354472943107!2d109.89963278960028!3d-7.360422349200887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1aaad2dd44d%3A0x6a66eadf4d7bc6e0!2sArmada%20Computer!5e0!3m2!1sen!2sid!4v1697420773581!5m2!1sen!2sid"
            title="maps_armnada"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded framemaps"
            style={{
              flex: "1",
              width: "100%",
              height: "200px",
              boxShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          />
        </Col>
        <Col xs={10} md={3}>
          <Col
            md={12}
            className="listfoot fw-bold mb-2 mb-md-1 d-none d-md-block"
            style={{
              fontSize: "14px",
              textShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          >
            <img src={bar} alt="bar" className="bar" /> ARMADA COMPUTER
          </Col>
          <Row style={{ lineHeight: "1.8rem", marginTop: "1.4rem" }}>
            {kaki.map((kaki, index1) => (
              <Col key={index1} md={12} className="pb-2">
                <span className="iconB">{kaki.iconB}</span>
                <Button className="textB" variant="link" href={kaki.url}>
                  {kaki.textB}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={10} md={2}>
          <Col
            md={12}
            className="listfoot fw-bold mb-2 mb-md-1 text-center text-md-start d-none d-md-block"
            style={{
              textShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          >
            <img src={bar} alt="bar" className="bar" />
            CONTACT US
          </Col>
          <Col
            md={12}
            className="listfoot fw-bold mb-2 mb-md-1 text-center text-md-start d-block d-md-none"
            style={{
              textShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          >
            CONTACT US
          </Col>
          <Row className="flex-column py-md-2">
            <Col className="text-center text-md-start">
              {sos.map((sos, index2) => (
                <Button
                  key={index2}
                  variant="link"
                  href={sos.url}
                  className="btn-b"
                >
                  <img
                    src={sos.iconSos}
                    alt="sosial-icon"
                    style={{
                      width: "25px",
                      marginRight: "0.5rem",
                    }}
                  />
                  <span className="tm">{sos.textSos}</span>
                </Button>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={2}>
          <Col
            md={12}
            className="listfoot fw-bold mb-2 mb-md-1 text-center text-md-start d-none d-md-block"
            style={{
              textShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          >
            <img src={bar} alt="bar" className="bar" /> WE READY ON
          </Col>
          <Col
            md={12}
            className="listfoot fw-bold mb-2 mb-md-1 text-center text-md-start d-block d-md-none"
            style={{
              textShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          >
            WE READY ON
          </Col>
          <Row className="flex-column py-md-2">
            <Col className="text-center text-md-start">
              {marketplace.map((marketplace, index2) => (
                <Button
                  key={index2}
                  variant="link"
                  href={marketplace.url}
                  className="btn-b"
                >
                  <img
                    src={marketplace.iconMarket}
                    alt="market-icon"
                    style={{
                      width: "25px",
                      marginRight: "0.5rem",
                    }}
                  />
                  <span className="tm">{marketplace.textMarket}</span>
                </Button>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row md={12} className="text-light">
        <Col
          md={12}
          className="text-center"
          style={{ fontSize: "10px", padding: "0.5rem 0 1rem 0" }}
        >
          All Rights Reserved. Armadacom.id © 2023 - Tentackle Studio{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

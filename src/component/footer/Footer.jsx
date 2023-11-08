import {Container, Row, Col, Button} from "react-bootstrap";
import {GeoAltFill, ClockHistory, EnvelopeFill, TelephoneInboundFill} from "react-bootstrap-icons";
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
      textB: "Jln. Girimargo 10A, Kerkop, Wonosobo",
    },
    {
      iconB: <ClockHistory className="iconB" />,
      textB: "Senin - Sabtu | 08.00 - 16.30",
    },
    {
      iconB: <EnvelopeFill className="iconB" />,
      textB: "armadacom.wsb@gmail.com",
    },
    {
      iconB: <TelephoneInboundFill className="iconB" />,
      textB: "(+62) 286 322949",
    },
  ];

  const sos = [
    {
      iconSos: Facebook,
      textSos: "Facebook",
    },
    {
      iconSos: Tiktok,
      textSos: "TikTok",
    },
    {
      iconSos: Instagram,
      textSos: "Instagram",
    },
    {
      iconSos: Whatsapp,
      textSos: "Whatsapp",
    },
  ];

  const marketplace = [
    {
      iconMarket: Bukalapak,
      textMarket: "Bukalapak",
      class: "bukalapak",
    },
    {
      iconMarket: Shopee,
      textMarket: "Shopee",
      class: "shopee",
    },
    {
      iconMarket: Tokopedia,
      textMarket: "Tokopedia",
      class: "tokopedia",
    },
    {
      iconMarket: SipLah,
      textMarket: "SIPLah",
      class: "siplah",
    },
  ];
  return (
    <Container id="footer" className="footer" fluid>
      <Row className="align-items-start justify-content-center text-light" style={{paddingTop: "2.3rem", paddingBottom: "1rem"}}>
        <Col xs={10} md={3} className="d-flex maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2354472943107!2d109.89963278960028!3d-7.360422349200887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1aaad2dd44d%3A0x6a66eadf4d7bc6e0!2sArmada%20Computer!5e0!3m2!1sen!2sid!4v1697420773581!5m2!1sen!2sid"
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
        <Col xs={10} md={3} className="address" style={{fontSize: "12px"}}>
          <Col
            md={12}
            className="listfoot fw-bold mb-2 mb-md-1 d-none d-md-block"
            style={{
              fontSize: "14px",
              textShadow: "rgb(85, 85, 85) 2px 2px 5px",
            }}
          >
            ARMADA COMPUTER
          </Col>
          <Row style={{lineHeight: "1.8rem", marginTop: "1.4rem"}}>
            {kaki.map((kaki, index1) => (
              <Col key={index1} md={12} className="address pb-2">
                {kaki.iconB}
                {kaki.textB}
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={10} md={2}>
          <Col md={12} className="listfoot fw-bold mb-2 mb-md-1" style={{textShadow: "rgb(85, 85, 85) 2px 2px 5px"}}>
            Contact Us
          </Col>
          <Row className="flex-column py-md-2">
            <Col>
              {sos.map((sos, index2) => (
                <Button key={index2} variant="link" className="btnSos text-start">
                  <img
                    src={sos.iconSos}
                    alt={sos.textSos}
                    style={{
                      width: "25px",
                      marginRight: "0.5rem",
                    }}
                  />
                  {sos.textSos}
                </Button>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={2}>
          <Col md={12} className="listfoot fw-bold mb-2 mb-md-1" style={{textShadow: "rgb(85, 85, 85) 2px 2px 5px"}}>
            We Ready On
          </Col>

          <Row className="flex-column py-md-2">
            <Col>
              {marketplace.map((marketplace, index3) => (
                <Button variant="link" className={marketplace.class}>
                  <img key={index3} src={marketplace.iconMarket} alt={marketplace.textMarket} />
                </Button>
              ))}
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

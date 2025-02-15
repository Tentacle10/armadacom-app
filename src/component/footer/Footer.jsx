import { Container, Row, Col, Button } from "react-bootstrap";
import {
  GeoAltFill,
  ClockHistory,
  EnvelopeFill,
  TelephoneInboundFill,
} from "react-bootstrap-icons";
import bar from "./../../assets/icon/bar.png";

import { useSelector } from "react-redux";
import { API_URL } from "../utils/const";

const Footer = () => {
  const { data_setting } = useSelector((state) => state.setting);

  const kaki = [
    {
      iconB: <GeoAltFill className="iconB" />,
      textB: data_setting?.ALAMAT_WEBSITE,
      url: "#",
    },
    {
      iconB: <ClockHistory className="iconB" />,
      textB: data_setting.JAM_OPERASIONAL_WEBSITE,
      url: "#",
    },
    {
      iconB: <EnvelopeFill className="iconB" />,
      textB: data_setting?.EMAIL_WEBSITE,
      url: `mailto:${data_setting?.EMAIL_WEBSITE}`,
    },
    {
      iconB: <TelephoneInboundFill className="iconB" />,
      textB: data_setting?.TELP_WEBSITE,
      url: `https://wa.me/${data_setting?.TELP_WEBSITE}`,
    },
  ];

  const sos = data_setting?.MEDIA_SOSIAL_WEBSITE;

  const marketplace = data_setting?.LAPAK_WEBSITE;

  return (
    <Container id="footer" className="footer" fluid>
      <Row
        className="align-items-start justify-content-center text-light"
        style={{ paddingTop: "2.3rem", paddingBottom: "1rem" }}
      >
        <Col xs={10} md={3} className="d-flex maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2354472943107!2d109.89963278960028!3d-7.360422349200887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1aaad2dd44d%3A0x6a66eadf4d7bc6e0!2sArmada%20Computer!5e0!3m2!1sen!2sid!4v1697420773581!5m2!1sen!2sid"
            title="maps_armadacom"
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
              {sos?.map((sos, index2) => (
                <Button
                  key={index2}
                  variant="link"
                  href={sos.url}
                  className="btn-b"
                  target="_blank"
                >
                  <img
                    src={`${API_URL}/uploads/icon/sosmed/${sos.icon}`}
                    alt="sosial-icon"
                    style={{
                      width: "25px",
                      marginRight: "0.5rem",
                    }}
                  />
                  <span className="tm">{sos.name}</span>
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
            <img src={bar} alt="bar" className="bar" /> WE ARE READY ON
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
              {marketplace?.map((marketplace, index2) => (
                <Button
                  key={index2}
                  variant="link"
                  href={marketplace.url}
                  className="btn-b"
                  target="_blank"
                >
                  <img
                    src={`${API_URL}/uploads/icon/marketplace/${marketplace.icon}`}
                    alt="market-icon"
                    style={{
                      width: "25px",
                      marginRight: "0.5rem",
                    }}
                  />
                  <span className="tm">{marketplace.name}</span>
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

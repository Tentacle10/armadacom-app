import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

import ArmadaWhite from "../../assets/logo/Logo_white.png";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { Tiktok, Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Container className="footer text-light" fluid>
        <Row className="justify-content-between">
          <Col md={4} className="first-foot">
            <div>
              <img
                src={ArmadaWhite}
                className="logo-blue d-inline-block align-top mb-3"
                alt="Logo_Armada"
              />
            </div>
            <div>
              <p>
                <PlaceIcon className="me-2" />
                Jl. Girimargo 10A, Kerkop, Wonosobo
              </p>
              <p>
                <AccessTimeIcon className="me-2" />
                Jam Operasional : Senin - Sabtu | 08.00 - 16.30
              </p>
              <p>
                <PhoneInTalkIcon className="me-2" />
                (+62) 286 322949
              </p>
              <p>
                <EmailIcon className="me-2" />
                armadacom.wsb@gmail.com
              </p>
            </div>
          </Col>
          <Col md={6} className="second-foot text-center">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2354472943107!2d109.89963278960028!3d-7.360422349200887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa1aaad2dd44d%3A0x6a66eadf4d7bc6e0!2sArmada%20Computer!5e0!3m2!1sen!2sid!4v1697420773581!5m2!1sen!2sid"
                // style={{ border: "1px solid" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <h5>Follow US</h5>
              <Instagram className="iMedsos" />
              <Facebook className="iMedsos" />
              <Tiktok className="iMedsos" />
            </div>
          </Col>
          {/* <Col md={6} className="second-foot">
            <Row>
              <Col md={12}>
                <h5>Navigation</h5>
              </Col>
              <Col sm={6} md={4}>
                <p>asdsad</p>
              </Col>
              <Col sm={6} md={4}>
                <p>asdasdasd</p>
              </Col>
              <Col sm={6} md={4}>
                <p>asdads</p>
              </Col>
            </Row>
          </Col> */}
        </Row>
        <Row className="copyright justify-content-center text-center mt-2">
          <Col md={8}>
            <p>All Rights Reserved. Armadacom.id © 2023 - Tentackle Studio</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

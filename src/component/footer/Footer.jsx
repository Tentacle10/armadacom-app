import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <Container className="footer">
        <Row className="justify-content-between">
          <Col lg={4}>
            <div>About US</div>
            <div>Follow US</div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col md={12}>
                <div>Navigation</div>
              </Col>
              <Col sm={6} md={4}>
                asdsad
              </Col>
              <Col sm={6} md={4}>
                asdasdasd
              </Col>
              <Col sm={6} md={4}>
                asdads
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={8}>Copyright</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

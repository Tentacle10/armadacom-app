import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import iPhone from '../../assets/img/Iphone-Mockup.png';
import Button from 'react-bootstrap/Button';
import PlayStore from '../../assets/icon/playstore-svgrepo-com.svg';

const ThirdContent = () => {
  return (
    <>
      <Container
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#2e64aa',
          marginTop: '3rem',
          borderRadius: '20px',
        }}
        className="thirdcontent d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Col
            md={4}
            style={{
              backgroundColor: '#fff',
              height: '100vh',
              borderRadius: '20px',
              justifyContent: 'center',
            }}
            className="iPhone p-3">
            <img src={iPhone} alt="iPhone" style={{ width: '100%' }} />
          </Col>
          <Col md={8} className="text-light vh-100 d-flex justify-content-center align-items-center flex-column text-center p-5">
            <div className="fw-bold fs-3">Fitur Tracking Service</div>
            <div className="fw-lighter fs-5">Memudahkan customer dalam memantau progres service</div>
            <div className="fw-bold fs-3 mt-4">Aplikasi Armadacom</div>
            <div className="fw-lighter fs-5">Download sekarang di playstore untuk menikmati fitur tracking dan live update harga.</div>
            <Button className="w-button mt-4 px-3 py-2" variant="outline-light">
              <img src={PlayStore} alt="PlayStore" width={20} className="me-2" />
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdContent;

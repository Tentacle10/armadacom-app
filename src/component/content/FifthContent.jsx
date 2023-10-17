import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Devimg from '../../assets/img/devimg.jpg';
import Toska from '../../assets/img/dev/toska.png';

const FifthContent = () => {
  return (
    <>
      <Container className='mt-4'>
        <Row>
          <Col sm={6} className='mb-3'>
            <img src={Devimg} alt='dev' className='dev-img w-100' />
          </Col>
          <Col sm={6}>
            <div className='fs-4 fw-bolder'>Software House</div>
            <div className='fs-2 fw-bolder'>PALUGADA - Apa yang lu mau, Gue ada!</div>
            <div className='fs-6 text-abu'>Menyediakan software untuk penunjang aktifitas bisnis ataupun kegiatan instansi, dengan teknologi sebagai alat untuk meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.</div>
          </Col>
          <Col>
            <Card>
              <Row>
                <Col>
                  <img src={Toska} alt='Devimg' className='w-25' />
                  <Card.Body>
                    <Card.Title>TOSKA - Aplikasi Kasir</Card.Title>
                    <Card.Text className='text-abu'>Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FifthContent;

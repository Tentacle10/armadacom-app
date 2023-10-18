import { useState } from 'react';
import { Row, Col, Collapse, Card } from 'react-bootstrap';
import { CaretDownFill, CheckLg } from 'react-bootstrap-icons';
import { PropTypes } from 'prop-types';

const CardDev = (props) => {
  const { title, img, desc, harga } = props;
  const [open, setOpen] = useState(false);
  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <Card className='mt-3' onClick={handleButtonClick} aria-controls='example-collapse-text' aria-expanded={open}>
      <Row>
        <Col>
          <Card.Title className='d-flex align-items-center mt-2'>
            <img src={img} alt='Devimg' className='logodev ms-3 me-3' />
            {title}
          </Card.Title>
          <Card.Body className='ps-3 pt-1'>
            <Card.Text className='text-abu'>{desc}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse in={open}>
            <div id='example-collapse-text'>
              <div className='text-center mt-2'>
                <div className='fs-6 text-abu'>Start From</div>
                <div className='harga'>{harga}</div>
              </div>
              <div className='fitur px-4 py-4'>
                <p>
                  <CheckLg className='check me-4' />
                  Cross Platform
                </p>
                <p>
                  <CheckLg className='check me-4' />2 in 1 POS Jasa & Barang
                </p>
                <p>
                  <CheckLg className='check me-4' />
                  Laporan Transaksi
                </p>
                <p>
                  <CheckLg className='check me-4' />
                  Device Printing
                </p>
                <p>
                  <CheckLg className='check me-4' />
                  Setting Lengkap & Mudah
                </p>
              </div>
            </div>
          </Collapse>
        </Col>
        <div className='trapesium text-center position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center text-white'>
          <CaretDownFill className={open ? 'rotate-icon' : ''} />
        </div>
      </Row>
    </Card>
  );
};

CardDev.propTypes = {
  title: PropTypes.string,
  img: PropTypes.any,
  desc: PropTypes.string,
  harga: PropTypes.string,
};
export default CardDev;

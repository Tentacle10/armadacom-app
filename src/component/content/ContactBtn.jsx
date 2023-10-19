import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { ChatTextFill } from 'react-bootstrap-icons';
import Facebook from '../../assets/icon/medsos/facebook.png';
import Instagram from '../../assets/icon/medsos/instagram.png';
import Shopee from '../../assets/icon/medsos/shopee.png';
import Tiktok from '../../assets/icon/medsos/tiktok.png';
import Tokopedia from '../../assets/icon/medsos/tokopedia.png';
import Wabusiness from '../../assets/icon/medsos/wabusiness.png';
import Whatsapp from '../../assets/icon/medsos/whatsapp.png';

const ContactBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='position-fixed bottom-0 end-0 pe-3 pb-5 z-3'>
        <ButtonGroup vertical>
          <CSSTransition
            in={open}
            timeout={500} // Sesuaikan dengan durasi animasi Anda
            classNames='fade-in-right' // Nama kelas CSS untuk animasi
            unmountOnExit>
            <ButtonGroup id='example-fade-text' className='mb-3' vertical>
              <Button className='contact-fade'>
                <img src={Facebook} alt='Facebook' />
              </Button>
              <Button className='contact-fade'>
                <img src={Instagram} alt='Instagram' />
              </Button>
              <Button className='contact-fade'>
                <img src={Shopee} alt='Shopee' />
              </Button>
              <Button className='contact-fade'>
                <img src={Tiktok} alt='Tiktok' />
              </Button>
              <Button className='contact-fade'>
                <img src={Tokopedia} alt='Tokopedia' />
              </Button>
              <Button className='contact-fade'>
                <img src={Wabusiness} alt='Wabusiness' />
              </Button>
              <Button className='contact-fade'>
                <img src={Whatsapp} alt='Whatsapp' />
              </Button>
            </ButtonGroup>
          </CSSTransition>
          <Button onClick={() => setOpen(!open)} aria-expanded={open} className='contact-float' variant='link'>
            <ChatTextFill className='icontact' />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ContactBtn;

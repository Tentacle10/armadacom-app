import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { ChatTextFill } from "react-bootstrap-icons";
import Facebook from "../../assets/icon/medsos/facebook.png";
import Instagram from "../../assets/icon/medsos/instagram.png";
import Shopee from "../../assets/icon/medsos/shopee.png";
import Tiktok from "../../assets/icon/medsos/tiktok.png";
import Tokopedia from "../../assets/icon/medsos/tokopedia.png";
import Wabusiness from "../../assets/icon/medsos/wabusiness.png";

const ContactFloat = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="position-fixed bottom-0 end-0 pe-3 pb-5 z-3">
        <ButtonGroup vertical>
          <CSSTransition
            in={open}
            timeout={500} // Sesuaikan dengan durasi animasi Anda
            classNames="fade-in-right" // Nama kelas CSS untuk animasi
            unmountOnExit
          >
            <ButtonGroup id="example-fade-text" className="mb-3" vertical>
              <Button
                className="contact-fade"
                href="https://www.facebook.com/armadacom.id"
              >
                <img src={Facebook} alt="Facebook" />
              </Button>
              <Button
                className="contact-fade"
                href="https://www.instagram.com/armadacom.id"
              >
                <img src={Instagram} alt="Instagram" />
              </Button>
              <Button
                className="contact-fade"
                href="https://shopee.co.id/armadacom.id"
              >
                <img src={Shopee} alt="Shopee" />
              </Button>
              <Button
                className="contact-fade"
                href="https://www.tiktok.com/@armadacom.id"
              >
                <img src={Tiktok} alt="Tiktok" />
              </Button>
              <Button
                className="contact-fade"
                href="https://www.tokopedia.com/armadacomputer"
              >
                <img src={Tokopedia} alt="Tokopedia" />
              </Button>
              <Button
                className="contact-fade"
                href="https://api.whatsapp.com/send/?phone=6282322006005&text=Hallo+Admin+Service+%2AArmada+Computer%2C%2A++&type=phone_number&app_absent=0"
              >
                <img src={Wabusiness} alt="Wabusiness" />
              </Button>
            </ButtonGroup>
          </CSSTransition>
          <Button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="contact-float"
            variant="link"
          >
            <ChatTextFill className="icontact" />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ContactFloat;

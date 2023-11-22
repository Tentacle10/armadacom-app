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
  const floatSOS = [
    {
      link: "https://www.facebook.com/armadacom.id",
      img: Facebook,
      alt: "Facebook",
    },
    {
      link: "https://www.instagram.com/armadacom.id",
      img: Instagram,
      alt: "Instagram",
    },
    {
      link: "https://shopee.co.id/armadacom.id",
      img: Shopee,
      alt: "Shopee",
    },
    {
      link: "https://www.tiktok.com/@armadacom.id",
      img: Tiktok,
      alt: "TikTok",
    },
    {
      link: "https://www.tiktok.com/@armadacom.id",
      img: Tokopedia,
      alt: "Tokopedia",
    },
    {
      link: "https://www.tokopedia.com/armadacomputer",
      img: Wabusiness,
      alt: "Whatsapp",
    },
  ];
  return (
    <>
      <div className="float">
        <ButtonGroup vertical>
          <CSSTransition
            in={open}
            timeout={500}
            classNames="fade-in-right"
            unmountOnExit
          >
            <ButtonGroup id="example-fade-text" className="mb-3" vertical>
              {floatSOS.map((floatSOS, index) => (
                <Button
                  key={index}
                  className="contact-fade"
                  href={floatSOS.link}
                >
                  <img src={floatSOS.img} alt={floatSOS.alt} />
                </Button>
              ))}
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

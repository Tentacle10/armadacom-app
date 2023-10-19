import { useState } from "react";
import { Button, ButtonGroup, Fade } from "react-bootstrap";
import {
  ChatText,
  Tiktok,
  Facebook,
  Instagram,
  Whatsapp,
} from "react-bootstrap-icons";

const ContactBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="position-fixed bottom-0 end-0 pe-3 pb-5 z-3">
        <ButtonGroup vertical>
          <Fade in={open} className="mb-3">
            <ButtonGroup id="example-fade-text" vertical>
              <Button className="contact-fade">
                <Facebook className="icontact" />
              </Button>
              <Button className="contact-fade">
                <Instagram className="icontact" />
              </Button>
              <Button className="contact-fade">
                <Tiktok className="icontact" />
              </Button>
              <Button className="contact-fade mt-5">
                <Whatsapp className="icontact" />
              </Button>
            </ButtonGroup>
          </Fade>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
            className="contact-float"
            variant="link"
          >
            <ChatText className="icontact" />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ContactBtn;

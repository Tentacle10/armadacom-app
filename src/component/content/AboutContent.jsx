import { Container, Row, Col } from "react-bootstrap";
import { Shop, Tools, Terminal, Headset } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const AboutContent = () => {
  const { data_setting } = useSelector((state) => state.setting);

  const aboutcard = [
    {
      icon: <Shop size={30} />,
      title: "Store",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll",
    },
    {
      icon: <Tools size={30} />,
      title: "Service",
      text: "Service perangkat Laptop, Komputer, Printer, Jaringan, dll",
    },
    {
      icon: <Terminal size={30} />,
      title: "Software",
      text: "Pengembangan software berbasis Web dan Android",
    },
    {
      icon: <Headset size={30} />,
      title: "IT Consultant",
      text: "Konsultasi terkait kebutuhan dan produk IT",
    },
  ];
  return (
    <>
      <Container className="cabout">
        <Row className="about align-items-center justify-content-center">
          <Col md={4} className="aboutcol">
            <div className="title">
              <h6 style={{ color: "rgb(111 111 111/ 70%)", fontWeight: "600" }}>
                ABOUT US
              </h6>
              <h2
                className="ls pb-md-2"
                style={{
                  fontWeight: "600",
                  textShadow: "2px 2px 5px #55555555",
                  // color: "#009AD1",
                }}
              >
                Melayani segala kebutuhan IT Anda
              </h2>
            </div>
            <div className="body-text">{data_setting?.TENTANG_WEBSITE}</div>
          </Col>
          <Col
            md={6}
            style={{ height: "100%" }}
            className="d-flex align-items-center"
          >
            <Row xs={1} md={2}>
              {aboutcard.map((isiabout, index) => (
                <Col key={index} className="acard">
                  <Row className="about-card">
                    <Col
                      xs={2}
                      className="about-icon d-flex justify-content-center align-items-center"
                    >
                      {isiabout.icon}
                    </Col>
                    <Col xs={12}>
                      <div className="ls title-card">{isiabout.title}</div>
                      <div className="body-text">{isiabout.text}</div>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutContent;

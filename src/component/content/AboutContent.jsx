import { Container, Row, Col } from "react-bootstrap";
import { Shop, Tools, Terminal, Headset } from "react-bootstrap-icons";

const AboutContent = () => {
  const aboutcard = [
    {
      icon: <Shop size={30} style={{ color: "#2e64aa" }} />,
      title: "Store",
      text: "Penjualan Perangkat Laptop, Komputer, Printer, Jaringan, dll",
    },
    {
      icon: <Tools size={30} style={{ color: "#2e64aa" }} />,
      title: "Service",
      text: "Service perangkat Laptop, Komputer, Printer, Jaringan, dll",
    },
    {
      icon: <Terminal size={30} style={{ color: "#2e64aa" }} />,
      title: "Software",
      text: "Pengembangan software berbasis Web dan Android",
    },
    {
      icon: <Headset size={30} style={{ color: "#2e64aa" }} />,
      title: "IT Consultant",
      text: "Konsultasi terkait kebutuhan dan produk IT",
    },
  ];
  return (
    <>
      <Container className="cabout" fluid>
        <Row className="about align-items-center justify-content-center">
          <Col md={4} className="aboutcol">
            <div className="title">
              <h6 style={{ color: "#9b9b9b", fontWeight: "600" }}>ABOUT US</h6>
              <h2 className="pb-md-3" style={{ fontWeight: "600" }}>
                Melayani segala kebutuhan IT
              </h2>
            </div>
            <div className="body-text">
              Armada Computer hadir sebagai toko komputer terlengkap di
              Wonosobo, menawarkan berbagai peralatan komputer dan perangkat
              jaringan. Dari komponen utama seperti CPU, motherboard, hingga
              aksesori seperti keyboard dan mouse, Kami juga menyediakan solusi
              lengkap untuk kebutuhan teknologi informasi.
            </div>
          </Col>
          <Col
            md={6}
            style={{ height: "100%" }}
            className="d-flex align-items-center"
          >
            <Row xs={1} md={2} className="">
              {aboutcard.map((isiabout, index) => (
                <Col
                  key={index}
                  style={{
                    color: "#9b9b9b",
                    borderRadius: "11px",
                    border: "0",
                    // boxShadow: "0 5px 10px 0 rgba(138, 155, 165, 0.3)",
                  }}
                  className="hover_color_bubble"
                >
                  <Row className="about-card p-3">
                    <Col
                      xs={2}
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        width: "60px",
                        height: "60px",
                        boxShadow: "5px 5px 0 0 #2e64aa",
                        color: "#2e64aa",
                        marginBottom: "1rem",
                      }}
                    >
                      {isiabout.icon}
                    </Col>
                    <Col xs={12} style={{ padding: "0" }}>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {isiabout.title}
                      </div>
                      <div>{isiabout.text}</div>
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

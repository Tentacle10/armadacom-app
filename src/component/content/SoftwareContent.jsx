import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";

import CarouselDev from "../utils/carouseldev/CarouselDev";
import { API_URL } from "../utils/const";

const SoftwareContent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataProducts, setDataProducs] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products/active_prod`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDataProducs(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Container className="csoftware">
        <Row className="software d-flex justify-content-center align-items-center gap-0">
          <Col md={12} lg={2} xl={4} xxl={4} className="devimg">
            <img src={Devimg} alt="dev" className="w-100" />
          </Col>
          <Col
            md={12}
            lg={10}
            xl={8}
            xxl={8}
            className="softwaredev d-flex flex-column align-items-center justify-content-start"
          >
            <Col xs={12} className="devdesc">
              <h6
                className="fw-bold"
                style={{ color: "rgb(111 111 111/ 70%)" }}
              >
                ARMADA SOFTWARE
              </h6>
              <h2 className="fw-bolder mb-2 text-uppercase">
                PALUGADA - Apa yang lu mau Gue ada!
              </h2>
              <div style={{ color: "#9b9b9b" }}>
                Menyediakan software untuk penunjang aktifitas bisnis ataupun
                kegiatan instansi, dengan teknologi sebagai alat untuk
                meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.
              </div>
            </Col>
            <Col xs={12} className="px-2">
              <CarouselDev
                data={dataProducts}
                options={{ align: "start", loop: true, slidesToScroll: "auto" }}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SoftwareContent;

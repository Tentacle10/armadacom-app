import { Container, Row, Col } from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Card from "../card/Card.jsx";
import Toska from "../../assets/img/dev/toska.png";
import UpSensei from "../../assets/img/dev/upsensei.png";
import evoting from "../../assets/img/dev/evoting.png";
import custom from "../../assets/img/dev/custom.png";

const FifthContent = () => {
  return (
    <>
      <Container id="software" className="mt-4">
        <Row>
          <Col sm={6} className="mb-3">
            <img src={Devimg} alt="dev" className="dev-img w-100" />
          </Col>
          <Col sm={6}>
            <div className="fs-6 fw-bolder text-abu">Software House</div>
            <div className="fs-5 fw-bolder">
              PALUGADA - Apa yang lu mau, Gue ada!
            </div>
            <div className="fs-6 text-abu">
              Menyediakan software untuk penunjang aktifitas bisnis ataupun
              kegiatan instansi, dengan teknologi sebagai alat untuk
              meningkatkan efektifitas, kecepatan dan ketepatan dalam bekerja.
            </div>
          </Col>
          <Col>
            <Card
              title="Aplikasi Kasir"
              img={Toska}
              desc="Aplikasi kasir berbasis website yang bisa kalian pakai dari mana
              aja dengan fitur lengkap dan interface yang memukau."
              harga="1.499K"
            />
            <Card
              title="UPSENSEI - Absen App"
              img={UpSensei}
              desc="menggunakan ID Card sebagai device absen, dengan laporan yang presisi dan mudah dipahami. Cepat,Mudah,Akurat."
              harga="1.499K"
            />
            <Card
              title="EVoting - Vote App"
              img={evoting}
              desc="Software vote pemilihan pimpinan untuk organisasi maupun instansi, kemudahan dalam rekap dan tanpa media kertas."
              harga="2.250K"
            />
            <Card
              title="Custom Software"
              img={custom}
              desc="Melayani pembuatan software berbasis website maupun android by request sesuai kebutuhan dan keinginan kalian."
              harga="$$$$$"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FifthContent;

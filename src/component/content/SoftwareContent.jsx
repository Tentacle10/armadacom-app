import { Col, Container, Row } from "react-bootstrap";
import Devimg from "../../assets/img/devimg.jpg";
import Toska from "../../assets/img/dev/toska.png";
import Asm from "../../assets/img/dev/asm.png";
import Evoting from "../../assets/img/dev/evoting.png";
import Custom from "../../assets/img/dev/custom.png";
import CarouselDev from "../utils/carouseldev/CarouselDev";

const SoftwareContent = () => {
  const devcard = [
    {
      icon: Toska,
      title: "Aplikasi Kasir",
      desc: "Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.",
      harga: "1.499K",
      rent: "F",
      fitur:
        "✔ Cross Platform ✔ 2 in 1 POS Jasa & Barang ✔ Laporan Transaksi ✔ Device Printing ✔ Setting Lengkap & Mudah",
    },
    {
      icon: Asm,
      title: "ASM",
      desc: "Aplikasi Service Management berbasis web solusi efisien untuk merencanakan dan melaksanakan layanan teknis dengan inovasi tinggi.",
      harga: "2.899K",
      rent: "F",
      fitur:
        "✔ Cross Platform ✔ Real-time Confirmation ✔ Live Service Updates ✔ Sistematis ✔ Custom Feature",
    },
    {
      icon: Evoting,
      title: "E VOTING",
      desc: "Software vote pemilihan pimpinan untuk organisasi maupun instansi kemudahan dalam rekap tanpa media kertas.",
      harga: "2.250K",
      rent: "T",
      fitur:
        "✔ Penghitungan suara Cepat ✔ ID Card Kartu Suara ✔ Tanpa Kertas ✔ Sistematis ✔ Effisien",
    },
    {
      icon: Toska,
      title: "Aplikasi Kasir",
      desc: "Aplikasi kasir berbasis website yang bisa kalian pakai dari mana aja dengan fitur lengkap dan interface yang memukau.",
      harga: "1.499K",
      rent: "F",
      fitur:
        "✔ Cross Platform ✔ 2 in 1 POS Jasa & Barang ✔ Laporan Transaksi ✔ Device Printing ✔ Setting Lengkap & Mudah",
    },
    {
      icon: Asm,
      title: "ASM",
      desc: "Aplikasi Service Management berbasis web solusi efisien untuk merencanakan dan melaksanakan layanan teknis dengan inovasi tinggi.",
      harga: "2.899K",
      rent: "F",
      fitur:
        "✔ Cross Platform ✔ Real-time Confirmation ✔ Live Service Updates ✔ Sistematis ✔ Custom Feature",
    },
    {
      icon: Evoting,
      title: "E VOTING",
      desc: "Software vote pemilihan pimpinan untuk organisasi maupun instansi kemudahan dalam rekap tanpa media kertas.",
      harga: "2.250K",
      rent: "T",
      fitur:
        "✔ Penghitungan suara Cepat ✔ ID Card Kartu Suara ✔ Tanpa Kertas ✔ Sistematis ✔ Effisien",
    },
    {
      icon: Custom,
      title: "Custom Aplikasi",
      desc: "Melayani pembuatan software berbasis website maupun android by request sesuai kebutuhan dan keinginan anda.",
      harga: "$$$$$",
      rent: "F",
      fitur:
        "✔ Custom sesuka hati ✔ Sesuaikan kebutuhan ✔ Sesuaikan kebutuhan ✔ Sustainable ✔ Full License",
    },
  ];
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
                data={devcard}
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

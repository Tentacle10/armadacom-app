import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { StarFill, StarHalf, Star, Quote } from "react-bootstrap-icons";
import { API_URL } from "../utils/const";

const TestimonialContent = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Fungsi untuk mengupdate jumlah items per slide berdasarkan ukuran layar
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(3); // Desktop
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const testimonials = [
    {
      name: "Dani Fahim",
      role: "Local Guide",
      quote:
        "Best place in town for computer and peripheral needs. Friendly service, highly recommended...",
      rating: 5,
      image: `${API_URL}/uploads/testimonial/DaniFahim.png`,
    },
    {
      name: "Tri Aji Purnomo",
      role: "Local Guide",
      quote:
        "Karyawannya ramah ramah.. sering ada diskon🤭 rekomendasi pokoknya bagi yang mau beli laptop maupun aksesoris✨.",
      rating: 5,
      image: `${API_URL}/uploads/testimonial/TriAjiPurnomo.png`,
    },
    {
      name: "Odhian Wisnu P",
      role: "Photographer",
      quote:
        "Tempat terbaik dalam hal mencari dan memperbaiki peralatan elektronik seperti laptop, dll.",
      rating: 5,
      image: `${API_URL}/uploads/testimonial/OdhianWisnuP.png`,
    },
    {
      name: "Aldina Rahma",
      role: "Local Guide",
      quote:
        "Mas dan Mbaknya ramah, biaya perbaikan terjangkau. Pernah bersihin printer dan benerin keyboard laptop di sini.",
      rating: 4,
      image: `${API_URL}/uploads/testimonial/AldinaRahma.png`,
    },
    {
      name: "Yuliati Gonosantoso",
      role: "Local Guide",
      quote: "Tempat strategis, pelayanan ramah, harga terjangkau.",
      rating: 4,
      image: `${API_URL}/uploads/testimonial/YuliatiGonosantoso.png`,
    },
    {
      name: "Budi Santoso",
      role: "Tech Enthusiast",
      quote: "Pelayanan cepat dan harga bersaing. Sangat recommended!",
      rating: 5,
      image: `${API_URL}/uploads/testimonial/BudiSantoso.png`,
    },
    {
      name: "Siti Aminah",
      role: "Blogger",
      quote:
        "Puas dengan pelayanan di sini, laptop saya jadi lebih cepat setelah diservis.",
      rating: 4,
      image: `${API_URL}/uploads/testimonial/SitiAminah.png`,
    },
  ];

  // Fungsi untuk membagi testimonial menjadi kelompok sesuai jumlah yang ditampilkan per slide
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  const testimonialChunks = chunkArray(testimonials, itemsPerSlide);

  return (
    <Container style={{ paddingTop: "4rem" }}>
      <Row>
        <h6
          className="text-center fw-bold pt-md-3 pt-4"
          style={{ color: "rgb(111 111 111/ 70%)" }}
        >
          TESTIMONIALS
        </h6>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          controls={false}
          indicators={false}
          slide={true}
          touch={true}
          draggable={true}
        >
          {testimonialChunks.map((group, i) => (
            <Carousel.Item key={i}>
              <Container>
                <Row className="justify-content-center">
                  {group.map((testimonial, j) => (
                    <Col
                      key={j}
                      md={itemsPerSlide === 3 ? 4 : 6} // 3 items per slide → md=4, 2 items → md=6
                      sm={6} // 2 items per slide di tablet
                      xs={12} // 1 item per slide di mobile
                      className="text-center p-3"
                    >
                      <img
                        className="rounded-circle shadow-1-strong mb-3"
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                        }}
                      />
                      <h6 className="mb-1">{testimonial.name}</h6>
                      <p className="text-muted mb-1">{testimonial.role}</p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-3">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            {i + 1 <= testimonial.rating ? (
                              <StarFill size={14} color="gold" />
                            ) : i + 0.5 === testimonial.rating ? (
                              <StarHalf size={14} color="gold" />
                            ) : (
                              <Star size={14} color="gold" />
                            )}
                          </li>
                        ))}
                      </ul>
                      <p className="text-muted small">
                        <Quote className="pe-2" size={16} />
                        {testimonial.quote}
                      </p>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default TestimonialContent;

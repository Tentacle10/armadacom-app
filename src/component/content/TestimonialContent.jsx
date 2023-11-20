import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { StarFill, StarHalf, Star, Quote } from "react-bootstrap-icons";
import Dani from "../../assets/img/testimonials/DaniFahim.png";
import Tri from "../../assets/img/testimonials/TriAjiPurnomo.png";
import Odhian from "../../assets/img/testimonials/OdhianWisnuP.png";
import Aldina from "../../assets/img/testimonials/AldinaRahma.png";
import Yuliati from "../../assets/img/testimonials/YuliatiGonosantoso.png";

const TestimonialContent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const testimonials = [
    {
      name: "Dani Fahim",
      role: "Local Guide",
      quote:
        "best place in town for computer and peripheral needs. friendly service, highly recommended...",
      rating: 5,
      image: Dani,
    },
    {
      name: "Tri Aji Purnomo",
      role: "Local Guide",
      quote:
        "karyawannya ramah ramah.. sering ada diskon🤭 recomend pokoknya bagi yang mau beli laptop maupun accesoris✨.",
      rating: 5,
      image: Tri,
    },
    {
      name: "Odhian wisnu P",
      role: "Photographer",
      quote:
        "Tempat terbaik dalam hal mencari dan memperbaiki peralatan elektronik seperti laptop, dll.",
      rating: 5,
      image: Odhian,
    },
    {
      name: "Aldina Rahma",
      role: "Local Guide",
      quote:
        "Mas dan Mbaknya ramah, biaya perbaikan terjangkau. Pernah bersihin printer dan benerin keyboard laptop di sini..",
      rating: 4,
      image: Aldina,
    },
    {
      name: "Yuliati Gonosantoso",
      role: "Local Guide",
      quote: "t4 strategis, pelayanan ramah, harga terjangkau.",
      rating: 4,
      image: Yuliati,
    },
    // Tambahkan testimonial lainnya di sini
  ];
  return (
    <>
      <Container style={{ paddingTop: "4rem" }} fluid>
        <Row className="testimonials">
          <Col
            xs={12}
            className="text-center fw-bold fs-5 pt-md-3 pt-4"
            style={{ color: "#9b9b9b" }}
          >
            TESTIMONIALS
          </Col>
          <Carousel
            responsive={responsive}
            ssr={true}
            showDots={false}
            slidesToSlide={3}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            arrows={false}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Container className="p-md-5 p-3">
                  <Row>
                    <Col className="text-center">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src={testimonial.image}
                        alt="avatar"
                        style={{ width: "70px", height: "70px" }}
                      />
                      <h5 className="mb-2">{testimonial.name}</h5>
                      <p className="text-abu mb-0">{testimonial.role}</p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-3">
                        {[...Array(5)].map((star, i) => (
                          <li key={i}>
                            {i + 1 <= testimonial.rating ? (
                              <StarFill size={16} color="gold" />
                            ) : i + 0.5 === testimonial.rating ? (
                              <StarHalf size={16} color="gold" />
                            ) : (
                              <Star size={16} color="gold" />
                            )}
                          </li>
                        ))}
                      </ul>
                      <p className="text-muted">
                        <Quote className="pe-2" size={25} />
                        {testimonial.quote}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            ))}
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default TestimonialContent;

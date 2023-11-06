import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { StarFill, StarHalf, Star, Quote } from "react-bootstrap-icons";

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
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjX1KvibetBQGiaqMdahXfZ3WdEwIIwjLfsma-hDpQEMPoM=w60-h60-p-rp-mo-ba2-br100",
    },
    {
      name: "Tri Aji Purnomo",
      role: "Local Guide",
      quote:
        "karyawannya ramah ramah.. sering ada diskon🤭 recomend pokoknya bagi yang mau beli laptop maupun accesoris✨.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXzeWldPBasJlgF1j34tijzXd-kFPxEVt30j767NXtp7L4=w60-h60-p-rp-mo-ba3-br100",
    },
    {
      name: "Odhian wisnu P",
      role: "Photographer",
      quote:
        "Tempat terbaik dalam hal mencari dan memperbaiki peralatan elektronik seperti laptop, dll.",
      rating: 5,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVwd82XGRCZBJEcbGv1QCI3th8bl7zasZGTpgAMHgWfiTw=w60-h60-p-rp-mo-br100",
    },
    {
      name: "Aldina Rahma",
      role: "Local Guide",
      quote:
        "Mas dan Mbaknya ramah, biaya perbaikan terjangkau. Pernah bersihin printer dan benerin keyboard laptop di sini..",
      rating: 4,
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVxLZ99LrX6UDmDJXP-sZUeq1TE7RoqmmRIi4lGWofsJAc=w60-h60-p-rp-mo-ba4-br100",
    },
    {
      name: "Yuliati Gonosantoso",
      role: "Local Guide",
      quote: "t4 strategis, pelayanan ramah, harga terjangkau.",
      rating: 4,
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKVevpRoJA01H4Tc_50ZzBOJpG-eqkw-aQ57oqZsNc4=w60-h60-p-rp-mo-br100",
    },
    // Tambahkan testimonial lainnya di sini
  ];
  return (
    <>
      <Container
        id="testimonials"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <Row
          style={{
            boxShadow: "rgb(219 230 255 / 99%) 0px 5px 10px 0px",
            backgroundColor: "#fff",
            borderRadius: "20px",
          }}
        >
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

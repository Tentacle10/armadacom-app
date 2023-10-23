import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import { StarFill, StarHalf, Star, Quote } from "react-bootstrap-icons";

const SixthContent = () => {
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
      name: "Anna Deynah",
      role: "UX Designer",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      rating: 5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    },
    {
      name: "John Doe",
      role: "Web Developer",
      quote:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
      rating: 4.5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
    },
    {
      name: "Maria Kate",
      role: "Photographer",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    },
    // Tambahkan testimonial lainnya di sini
  ];
  return (
    <>
      <Container id="testimonials">
        <Row className="pt-3 mb-3 mt-3">
          <Col className="text-center text-abu">
            <h3>Testimonials</h3>
          </Col>
        </Row>
      </Container>
      <Carousel
        responsive={responsive}
        ssr={true}
        showDots={false}
        slidesToSlide={3}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Container>
              <Row>
                <Col className="text-center">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src={testimonial.image}
                    alt="avatar"
                    style={{ width: "150px", height: "150px" }}
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
    </>
  );
};

export default SixthContent;

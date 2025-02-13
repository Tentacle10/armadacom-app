import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";
import { formatRupiah } from "../formatRupiah";
import "./embla.css";

const EmblaCarousel = (props) => {
  const { data, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnMouseEnter: true }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container user-select-none">
          {data.map((data, index) => (
            <Card className="embla__slide" key={index}>
              <Card.Img
                variant="top"
                className="card-img"
                src={`https://crmapi.armadacom.id/uploads/products/${data.productimages[0]?.image}`}
                style={{ pointerEvents: "none" }}
              />
              <Stack className="card-body text-start" gap={2}>
                <div style={{ fontSize: "11px", pointerEvents: "none" }}>
                  {data.name}
                </div>
                <Stack
                  direction="horizontal"
                  gap={2}
                  style={{ pointerEvents: "none" }}
                >
                  {data.ispromo == "T" ? (
                    <>
                      <div
                        className="fw-bolder"
                        style={{ fontSize: "12px", color: "#ff6d00" }}
                      >
                        {formatRupiah(data.price_normal)}
                      </div>
                      <Badge
                        bg="danger"
                        pill={true}
                        style={{ fontSize: "10px" }}
                      >
                        {data.discount}%
                      </Badge>
                      <div style={{ fontSize: "10px" }}>
                        <s>{formatRupiah(data.price_promo)}</s>
                      </div>
                    </>
                  ) : (
                    <div
                      className="fw-bolder"
                      style={{ fontSize: "12px", color: "#ff6d00" }}
                    >
                      {formatRupiah(data.price_normal)}
                    </div>
                  )}
                </Stack>
                <Button
                  className=" btn-card"
                  target="_blank"
                  href={`https://store.armadacom.id/#/products/frontend/${data.id}`}
                >
                  Beli Sekarang
                </Button>
              </Stack>
            </Card>
          ))}
        </div>
      </div>

      <Row>
        <Col xs={3} className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Col>

        <Col className="embla__footer">
          <Button variant="light" className="mt-3 btn-a">
            Lihat Semua
          </Button>
        </Col>

        <Col className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </Col>
      </Row>
    </section>
  );
};

export default EmblaCarousel;

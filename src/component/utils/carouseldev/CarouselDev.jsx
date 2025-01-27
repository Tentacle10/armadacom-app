import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "react-bootstrap";
import useEmblaCarousel from "embla-carousel-react";
import DevModal from "../../content/SoftwareModal";
import "./embladev.css";
import { API_URL } from "../const";

const CarouselDev = (props) => {
  const { data, options } = props;
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleShowModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

  return (
    <section className="embladev">
      <div className="embladev__viewport px-2" ref={emblaRef}>
        <div className="embladev__container py-2 user-select-none">
          {data?.map((data, index) => (
            <div key={index} className="embladev__slide">
              <div className="embladev__text dev-text text-center">
                <img
                  src={`${API_URL}/uploads/products/` + data.t_products_image}
                  alt="Devimg"
                  className="logodev"
                />
                <div>
                  <div className="ls title-card pe-none">
                    {data.t_products_nama}
                  </div>
                  <h6 className="pe-none"> Start From</h6>
                  <h1 className="fw-bold pe-none">{data.t_products_price}</h1>
                  <Button
                    className="mt-3 btn-card"
                    onClick={() => handleShowModal(data)}
                  >
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DevModal
        show={showModal}
        handleClose={handleCloseModal}
        modalData={modalData}
      />
    </section>
  );
};

export default CarouselDev;

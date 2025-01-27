import React from "react";
import { Modal, Button } from "react-bootstrap";
import { API_URL } from "../utils/const";

const DevModal = ({ show, handleClose, modalData }) => {
  console.log(modalData);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ borderRadius: "5px" }}
    >
      <Modal.Body
        style={{
          borderRadius: "5px",
          background: "linear-gradient(200deg, #2e64aa, #0698f3)",
        }}
        className="py-4 px-5"
      >
        <div className="d-flex justify-content-center">
          <img
            src={`${API_URL}/uploads/products/` + modalData.t_products_image}
            alt="Devimg"
            className="logodev text-center"
          />
        </div>
        <blockquote className="blockquote mb-3">
          <h3 className="text-white text-center">
            {modalData.t_products_nama}
          </h3>
          <p className="text-white fs-6">{modalData.t_products_desc}</p>
        </blockquote>
        <p className="justify-content-center text-white">
          {modalData.t_products_feature}
        </p>
        <div className="flex text-center">
          <Button
            variant="light"
            href="http://wa.me/6285842027019"
            className="mt-3 btn-a"
            target="_blank"
          >
            {modalData.t_products_jenis != "SEWA" ? "Buy Now" : "Rent Now"}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DevModal;

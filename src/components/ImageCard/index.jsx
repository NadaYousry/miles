import React, {  useState } from "react";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalComponent from "./../Modal";
import { Card } from "react-bootstrap";
import "./style.css";
const ImageCard = ({ image }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  return (
    <>
      <div
        className="image-card-container"
        onClick={() => {
          handleOpenModal();
        }}
      >
        <Card>
          <Card.Img variant="top" src={image} className="w-100" />
        </Card>
        <div className="image-filter">
          <div className="image-filter-icon hidden">
            <FontAwesomeIcon icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <ModalComponent handleClose={handleCloseModal} openModal={openModal} image={image} content={''}/>
    </>
  );
};

export default ImageCard;

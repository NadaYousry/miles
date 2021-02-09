import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './style.css';
const ModalComponent = ({handleClose,openModal ,image}) => {

  return (
    <>
    <Modal show={openModal} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        
      <div className="image-container w-100">
        <img src={image} className="w-100"/>
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
};

export default ModalComponent;

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ButtonComponent from "../Button";
import FiveStarsRating from "../FiveStarsRating";
import ModalComponent from "../Modal";
import "./style.css";
const PrivateLessonCard = ({ lesson, isMobileScreen }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  return (
    <>
      <div className={"private-lessons-container mb-3"}>
        <Card>
          <Card.Header
            as="div"
            className={`${
              isMobileScreen
                ? "d-flex flex-column justify-content-center align-items-center"
                : ""
            }`}
          >
            {isMobileScreen && (
              <div className="private-lessons-image-container d-flex align-items-center justify-content-center mx-auto mb-3">
                <div className="image-wrapper">
                  <img
                    src={lesson.image}
                    alt={`trainner image`}
                    className="w-100"
                  />
                </div>
              </div>
            )}
            <h5
              className={`private-lessons-trainner-name mb-0 ${
                isMobileScreen ? "mb-2" : ""
              }`}
            >
              {lesson.trainner}
            </h5>
            <span
              className={`d-inline-block mr-2  ${isMobileScreen ? "mb-2" : ""}`}
            >
              <FiveStarsRating
                theme={"sky-blue"}
                ratingNumber={""}
                peopleNumber={""}
              />
            </span>
            <span className={`rate-from`}>{lesson.rateFrom}</span>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-12 col-lg-7 col-md-7 d-flex align-items-center">
                {!isMobileScreen && (
                  <div className="private-lessons-image-container d-flex align-items-center justify-content-center mr-3">
                    <div className="image-wrapper">
                      <img
                        src={lesson.image}
                        alt={`trainner image`}
                        className="w-100"
                      />
                    </div>
                  </div>
                )}
                <div className="description d-flex align-items-center">
                  <Card.Text
                    className={`private-lessons-description ${
                      isMobileScreen ? "mb-3" : ""
                    }`}
                  >
                    {lesson.description}
                  </Card.Text>
                </div>
              </div>
              <div
                className={`col-12 col-lg-5 col-md-5 price-and-button  d-flex flex-column`}
              >
                <span
                  className={`private-lessons-price  mb-2 ${
                    isMobileScreen ? "mb-3 text-center" : ""
                  }`}
                >
                  {lesson.price}
                </span>{" "}
                <div className="d-flex align-items-center flex-column ">
                  <div className="my-2 w-100">
                    <ButtonComponent
                      text={"View Profile"}
                      theme={"sky-blue"}
                      share={false}
                    />
                  </div>
                  <div className=" w-100">
                    <ButtonComponent
                      text={`Share this`}
                      theme={"white"}
                      share={true}
                      onClickButton={handleOpenModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <ModalComponent
        handleClose={handleCloseModal}
        openModal={openModal}
        socailMediaShare={true}
        image={""}
      />
    </>
  );
};

export default PrivateLessonCard;

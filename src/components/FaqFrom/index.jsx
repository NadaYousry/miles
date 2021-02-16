import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Button";
import "./style.css";
const FaqFrom = () => {
  return (
    <div className="form-group-container faq mt-5 text-left">
      <p className="form-label">FAQ</p>
      <div className="form-title form-body">
        <Form className=" text-left  section-separator mb-5 pb-5">
          <Form.Group controlId="">
            <div>
              <Form.Label >FAQ QUESTION</Form.Label>
              <Form.Control
                type="text"
                className="faq-form-control"
                placeholder="Start Typing"
              />
            </div>
            <div className="col-12 col-lg-12 col-md-12 px-0 d-flex flex-column justify-content-between">
              <Form.Label >FAQ ANSWER</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="faq-form-control mb-2"
                placeholder="Start Typing"
              />
            </div>
            <div className="col-12 col-lg-12 col-md-12 px-0 d-flex align-items-center justify-content-center">
              <div className="d-flex w-50 faq-button">
                <div className="my-2 w-100">
                  <ButtonComponent
                    share={""}
                    text={"Update"}
                    theme={"light-green"}
                  />
                </div>
              </div>
            </div>
          </Form.Group>
        </Form>
        {/*  */}
        <Form className=" text-left faq-answes mb-4 pb-4 section-separator">
          <Form.Group controlId="">
            <div>
              <p className="form-label  text-left">
                What are the rules in place related to Corvid-19 regulations?
              </p>
            </div>
            <div>
              <Form.Control
                as="textarea"
                rows={3}
                className="faq-form-control mb-2"
                placeholder="Start Typing"
                defaultValue="The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "
              />
            </div>
            <div className="row px-3">
              <div className="d-flex align-items-center justify-content-start w-25  edit-save-btn">
                <ButtonComponent share={""} text={"Edit"} theme={"gray"} />
                <ButtonComponent
                  share={""}
                  text={"SAVE"}
                  theme={"light-green"}
                />
              </div>
              <div className="d-flex align-items-center justify-content-end w-25 ml-auto delete-btn">
                <ButtonComponent share={""} text={"DELETE"} theme={"gray"} />
              </div>
            </div>
          </Form.Group>
        </Form>
        {/*  */}
        <Form className=" text-left faq-answes">
          <Form.Group controlId="">
            <div>
              <p className="form-label  text-left">
                What are the rules in place related to Corvid-19 regulations?
              </p>
            </div>
            <div>
              <Form.Control
                as="textarea"
                rows={3}
                className="faq-form-control mb-2"
                placeholder="Start Typing"
                defaultValue="The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "
              />
            </div>
            <div className="row px-3">
              <div className="d-flex align-items-center justify-content-start w-25  edit-save-btn">
                <ButtonComponent share={""} text={"Edit"} theme={"gray"} />
                <ButtonComponent
                  share={""}
                  text={"SAVE"}
                  theme={"light-green"}
                />
              </div>
              <div className="d-flex align-items-center justify-content-end w-25 ml-auto delete-btn">
                <ButtonComponent share={""} text={"DELETE"} theme={"gray"} />
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default FaqFrom;

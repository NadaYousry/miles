import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Button";
import "./style.css";
const TextInput = ({ title, wordsValue }) => {
  const [count, setCount] = useState(0);
  const countWords = (e) => {
    setCount(e.target.value.length);
  };
  return (
    <>
      <Form>
        <Form.Group controlId="">
          <div className="row form-title">
            <div className="col-5 col-lg-7 col-md-5 d-flex align-items-center justify-content-between">
              <Form.Label>{title}</Form.Label>
            </div>
            <div className="col-7 col-lg-5 col-md-7 d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center flex-column ">
                <div className="my-2 w-100">
                  <ButtonComponent
                    share={""}
                    text={"Update"}
                    theme={"light-green"}
                  />
                </div>
              </div>
            </div>
          </div>
          <Form.Control
            type="text"
            onKeyUp={(e) => {
              countWords(e);
            }}
          />
          <span className="counter">{`${count} / ${wordsValue}`}</span>
        </Form.Group>
      </Form>
    </>
  );
};

export default TextInput;

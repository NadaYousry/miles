import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Button";
import "./style.css";
const TextInput = ({ title,wordsValue }) => {
  const [count, setCount] = useState(0);
  const countWords= (e)=>{    
    setCount((e.target.value).length)
  }
  return (
    <>
      <Form>
        <Form.Group controlId="">
          <div className="row form-title">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <Form.Label>{title}</Form.Label>
              <ButtonComponent
                share={""}
                text={"Update"}
                theme={"light-green"}
              />
            </div>
          </div>
          <Form.Control type="text" onKeyUp={(e)=>{countWords(e)}}/>
          <span className="counter">{`${count} / ${wordsValue}`}</span>
        </Form.Group>
      </Form>
    </>
  );
};

export default TextInput;

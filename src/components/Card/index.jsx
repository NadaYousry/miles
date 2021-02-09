import React from "react";
import { Card } from "react-bootstrap";
import './SingleCard.css';
const SingleCard = ({title,description,image,price}) => {

  return (
  <Card style={{ width: '18rem' }} className='w-100'>
    <div className='image-container w-100 d-flex align-items-center justify-content-center'>
    <div className='price-label d-flex align-items-center justify-content-center'>
      <p className='p-0 m-0'>{price}$</p>
    </div>
    <img src={image} />
    </div>
  <Card.Body>
    <Card.Title className='pink-color'>{title}</Card.Title>
    <Card.Text className='text-secondary text'>
     {description}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
  );
};

export default SingleCard;

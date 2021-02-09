import React from "react";
import ImageCard from "../../components/ImageCard";
import Image1 from "./../../assets/images/1.png";
import Image2 from "./../../assets/images/2.png";
import Image3 from "./../../assets/images/3.png";
import Image4 from "./../../assets/images/4.png";
import Image5 from "./../../assets/images/5.png";
import Image6 from "./../../assets/images/6.png";
import Image7 from "./../../assets/images/7.png";
const GallaryPage = ({ isMobileScreen }) => {
  const images = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
    {
      image: Image4,
    },
    {
      image: Image5,
    },
    {
      image: Image6,
    },
    {
      image: Image7,
    },
  ];
  return (
    <>
      <div className="row">
        {images.map((image, index) => {
          return (
            <div className="col-12 col-lg-3 col-md-6 px-1 mb-2">
              <ImageCard image={image.image} index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GallaryPage;

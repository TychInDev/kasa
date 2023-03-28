import React, { useState } from "react";
import "./slideshow.css";
import LeftArrow from "../../../src/assets/images/arrowleft.png";
import RightArrow from "../../../src/assets/images/arrowright.png";
import lodgmentContent from "../../assets/logements.json";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const idLodgment = window.location.pathname.split("/")[2];

  const lodgment = lodgmentContent.filter(
    (lodgment) => lodgment.id === idLodgment
  )[0];
  const pictureLodgment = lodgment ? lodgment.pictures : [];

  const handlePrevClick = () => {
    const index =
      currentIndex === 0 ? pictureLodgment.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const index = (currentIndex + 1) % pictureLodgment.length;
    setCurrentIndex(index);
  };

  if (pictureLodgment.length === 1) {
    return (
      <div className="slider_lodgment">
        <img
          src={pictureLodgment[0]}
          alt="lodgment"
          className="photo_lodgment"
        />
      </div>
    );
  }

  return (
    <div className="slider_lodgment">
      <img
        src={LeftArrow}
        onClick={handlePrevClick}
        alt="précédente"
        className="arrow_left"
      />
      <img
        src={RightArrow}
        onClick={handleNextClick}
        alt="suivante"
        className="arrow_right"
      />
      {pictureLodgment.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt="lodgment"
          className="photo_lodgment"
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
      <div className="photo_num">{`${currentIndex + 1}/${
        pictureLodgment.length
      }`}</div>
    </div>
  );
}

export default Slideshow;

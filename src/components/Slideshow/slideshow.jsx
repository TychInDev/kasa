import React, { useEffect, useState } from "react";
import axios from "axios";
import "./slideshow.css"
import LeftArrow from "../../../src/assets/images/arrowleft.png";
import RightArrow from "../../../src/assets/images/arrowright.png";


function Slideshow() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("../assets/logements.json").then((res) => setData(res.data));
  }, []);

  const idLogement = window.location.pathname.split("/")[2];

  const logement = data.filter((logement) => logement.id === idLogement)[0];
  const pictureLodgment = logement ? logement.pictures : [];

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
      <div className="slider-logement">
        <img
          src={pictureLodgment[0]}
          alt="logement"
          className="photo-logement"
        />
      </div>
    );
  }

  return (
    <div className="slider-logement">
      <img
        src={LeftArrow}
        onClick={handlePrevClick}
        alt="image précédente"
        className="arrow-left"
      />
      <img
        src={RightArrow}
        onClick={handleNextClick}
        alt="image suivante"
        className="arrow-right"
      />
      {pictureLodgment.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt="logement"
          className="photo-logement"
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
      <div className="photo-num">{`${currentIndex + 1}/${
        pictureLodgment.length
      }`}</div>
    </div>
  );
}

export default Slideshow;

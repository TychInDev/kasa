import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import fullStar from "../../src/assets/fullstar.svg";
import emptyStar from "../../src/assets/emptystar.svg";
import LodgmentFacilities from "../components/LodgmentFacilities";

function displayStars(rating) {
const stars = [];
const styleStar = {
width: "30px",
height: "30px",
};
for (let i = 0; i < 5; i++) {
if (i < rating) {
stars.push(<img key={i} src={fullStar} alt="star" style={styleStar} />);
} else {
stars.push(<img key={i} src={emptyStar} alt="empty star" style={styleStar} />);
}
}
return stars;
}

function Lodgment() {
const idLogement = window.location.pathname.split("/")[2];

const [logement, setLogement] = useState({});
const [host, setHost] = useState({});
const [logementRating, setLogementRating] = useState(0);
const [logementExist, setLogementExist ] = useState(true); 

useEffect(() => {
axios.get("../logements.json").then((res) => {
const logement = res.data.filter((logement) => logement.id === idLogement)[0];
if (!logement) {
setLogementExist(false);
} else {
setLogementRating(logement.rating);
}
setLogement(logement);
setHost(logement.host);
});
}, [idLogement]);

if (!logementExist) {
return <Navigate to="/error" replace />;
}
    
return (
<div>
<Header />
<Slideshow />
  <section id="logement_info">
    <div className="logement_data">
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <ul>
        {logement.tags && logement.tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>
    </div>
    <div className="host_rating">
      <div className="host">
        <img src={host.picture} alt="Propriétaire" />
        <span>{host.name}</span>
      </div>
      <div className="rating">{displayStars(logementRating)}</div>
    </div>
  </section>
  <LodgmentFacilities />
  <Footer />
</div>
);

}

export default Lodgment;
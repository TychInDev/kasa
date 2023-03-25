import React, { useEffect, useState } from "react";
import "./lodgmentinfo.css";
import fullStar from "../../../src/assets/images/fullstar.svg";
import emptyStar from "../../../src/assets/images/emptystar.svg";
import logementContent from "../../assets/logements.json";

function LodgmentInfo() {
  const idLogement = window.location.pathname.split("/")[2];

  const [logement, setLogement] = useState({});
  const [host, setHost] = useState({});
  const [logementRating, setLogementRating] = useState(0);

  useEffect(() => {
    const logement = logementContent.filter(
      (logement) => logement.id === idLogement
    )[0];
    setLogementRating(logement.rating);
    setLogement(logement);
    setHost(logement.host);
  }, [idLogement]);

  return (
    <section id="logement_info">
      <div className="logement_data">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <ul>
          {logement.tags &&
            logement.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <div className="host_rating">
        <div className="host">
          <img src={host.picture} alt="Propriétaire" />
          <span>{host.name}</span>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, i) => {
            return i < logementRating ? (
              <img key={i} src={fullStar} alt="star" />
            ) : (
              <img key={i} src={emptyStar} alt="empty star" />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LodgmentInfo;

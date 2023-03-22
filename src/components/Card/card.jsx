import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./card.css";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("./assets/logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="logements_cards">
      {data.map((logement) => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className="linkCard"
        >
          <div
            className="logement_card"
            style={{ backgroundImage: `url(${logement.cover})` }}
          >
            <h3>{logement.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Card;

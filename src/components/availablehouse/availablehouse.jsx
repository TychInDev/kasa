import React, { useEffect, useState } from "react";
import lodgmentContent from "../../assets/logements.json";
import { Link } from "react-router-dom";
import "./availablehouse.css";

function AvailableHouse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(lodgmentContent);
  }, []);

  return (
    <section className="lodgments_cards">
      {data.map((lodgment) => (
        <Link
          to={`/logement/${lodgment.id}`}
          key={lodgment.id}
          className="linkCard"
        >
          <div
            className="lodgment_card"
            style={{ backgroundImage: `url(${lodgment.cover})` }}
          >
            <h3>{lodgment.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default AvailableHouse;

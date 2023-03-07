import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/card.css";

function Card() { 
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("./logements.json").then((res) => setData(res.data));
    }, []);

    return (
        <section className="logements_cards">
            {data.map((logement) => (
                <Link to={`/Lodgment/${logement.id}`} key={logement.id}  className="linkCard">
                    <div className="logement_card">
                        <img src={logement.cover} alt={logement.title} className="img_card" />
                            <h3>{logement.title}</h3>
                </div>
            </Link>
            ))}
        </section>
    );
}

export default Card;
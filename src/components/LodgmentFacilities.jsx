import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/lodgmentcontent.css";
import Collapse from "./Collapse";

function LodgmentFacilities() {
  const idLogement = window.location.pathname.split("/")[2];

  const [logement, setLogement] = useState({});

  useEffect(() => {
    axios.get("../logements.json").then((res) => {
      const logement = res.data.filter(
        (logement) => logement.id === idLogement
      )[0];
      setLogement(logement);
    });
  }, [idLogement]);

  const lodgementDescription = [
    {
      title: "Description",
      content: logement.description,
    },
  ]

  const lodgementFacilities = [
    {
    title: "Équipements",
    content: (
    <div>
    {logement.equipments && logement.equipments.map((equipment, index) => (
    <p key={index} className="equipment_list">{equipment}</p>
    ))}
    </div>
    ),
    },
    ];

  return (
    <div className="lodgment_more_info">
    <Collapse sections={lodgementDescription} page="lodgment"/>
    <Collapse sections={lodgementFacilities} page="lodgment" />
    </div>
  );
}

export default LodgmentFacilities;

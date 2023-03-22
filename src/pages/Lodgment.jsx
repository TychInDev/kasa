import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Slideshow from "../components/Slideshow/slideshow";
import LodgmentInfo from "../components/LodgmentInfo/lodgmentinfo";
import Collapse from "../components/Collapse/collapse";
import "../styles/lodgmentcontent.css"


function Lodgment() {
  const idLogement = window.location.pathname.split("/")[2];

  const [logement, setLogement] = useState({});
  const [logementExist, setLogementExist] = useState(true);


  useEffect(() => {
    axios.get("../assets/logements.json").then((res) => {
      const logement = res.data.filter(
        (logement) => logement.id === idLogement
      )[0];
      if (!logement) {
        setLogementExist(false);
      } 
    });
  }, [idLogement]);

  if (!logementExist) {
    return <Navigate to="/error" replace />;
  }

  const lodgementDescription = [
    {
      title: "Description",
      content: logement.description,
    },
  ];

  const lodgementEquipments = [
    { title: "Équipements", content: (
      <div>
        {logement.equipments &&
          logement.equipments.map((equipment, index) => (
            <p key={index} className="equipment_list">
              {equipment}
            </p>
          ))}
      </div>
    ), },
  ];

  return (
    <div>
      <Header />
      <Slideshow />
      <LodgmentInfo logement={logement} />
      <div className="lodgment_more_info">
        <Collapse sections={lodgementDescription} page="lodgment" />
        <Collapse sections={lodgementEquipments} page="lodgment" />
      </div>
      <Footer />
    </div>
  );
}

export default Lodgment;

import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Slideshow from "../components/slideshow/slideshow";
import LodgmentInfo from "../components/lodgmentinfo/lodgmentinfo";
import Collapse from "../components/collapse/collapse";
import lodgmentContent from "../assets/logements.json";
import "../styles/lodgmentcontent.css";

function Lodgment() {
  const idLodgment = window.location.pathname.split("/")[2];

  const lodgment = lodgmentContent.find(
    (lodgment) => idLodgment === lodgment.id
  );

  if (!lodgment) {
    return <Navigate to="/error" />;
  }

  const lodgementDescription = [
    {
      title: "Description",
      content: lodgment.description,
    },
  ];

  const lodgementEquipments = [
    {
      title: "Équipements",
      content: (
        <div>
          {lodgment.equipments &&
            lodgment.equipments.map((equipment, index) => (
              <p key={index} className="equipment_list">
                {equipment}
              </p>
            ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <Slideshow />
      <LodgmentInfo />
      <div className="lodgment_more_info">
        <Collapse sections={lodgementDescription} page="lodgment" />
        <Collapse sections={lodgementEquipments} page="lodgment" />
      </div>
      <Footer />
    </div>
  );
}

export default Lodgment;

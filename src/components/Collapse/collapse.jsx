import React, { useState } from "react";
import ArrowDown from "../../../src/assets/images/arrowdown.png";
import ArrowUp from "../../../src/assets/images/arrowup.png";

function collapseContent(props, section, collapseText, collapseList) {
  if (props.page === "about" || props.page === "lodgment") {
    return (
      <div className={collapseText}>
        <p>{section.content}</p>
      </div>
    );
  } else if (props.page === "lodgment" && section.type === "equipments") {
    return (
      <ul className={collapseList}>
        {section.content.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}

function Collapse(props) {
  const collapseHeader =
    props.page === "about"
      ? "about_collapse_header"
      : props.page === "lodgment"
      ? "lodgment_collapse_header"
      : "";

  const collapseSection =
    props.page === "about"
      ? "about_collapse_section"
      : props.page === "lodgment"
      ? "lodgment_collapse_section"
      : "";

  const collapseDiv =
    props.page === "about"
      ? "about_collapse"
      : props.page === "lodgment"
      ? "lodgment_collapse"
      : "";
  const collapseText =
    props.page === "about"
      ? "about_collapse_content"
      : props.page === "lodgment"
      ? "lodgment_collapse_content"
      : "";

  const collapseList =
    props.page === "lodgment" ? "logement_collapse_list" : "";

  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className={collapseSection}>
      {props.sections.map((section, index) => (
        <div key={index} className={collapseDiv}>
          <div className={collapseHeader}>
            <p>{section.title}</p>
            <img
              src={index === activeIndex ? ArrowUp : ArrowDown}
              alt="Flèche"
              className="arrow-icon"
              onClick={() => handleClick(index)}
            />
          </div>
          {index === activeIndex &&
            collapseContent(props, section, collapseText, collapseList)}
        </div>
      ))}
    </div>
  );
}

export default Collapse;

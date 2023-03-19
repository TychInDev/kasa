import React, { useState } from "react";
const arrowDown = require("../../src/assets/arrowdown.png");
const arrowUp = require("../../src/assets/arrowup.png");

function Collapse(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const collapseDiv =
    props.page === "about"
      ? "about_collapse"
      : props.page === "lodgment"
      ? "lodgment_collapse"
      : "";
  const collapseSection =
    props.page === "about"
      ? "about_collapse_section"
      : props.page === "lodgment"
      ? "lodgment_collapse_section"
      : "";

  const collapseHeader = props.page === "about" ? "about_collapse_header" : props.page === "lodgment" ? "lodgment_collapse_header" : "";

  const collapseContent = props.page === "about" ? "about_collapse_content" : props.page === "lodgment" ? "lodgment_collapse_content" : "";


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
              src={index === activeIndex ? arrowUp : arrowDown}
              alt="Flèche"
              className="arrow-icon"
              onClick={() => handleClick(index)}
            />
          </div>
            {index === activeIndex && <div className={collapseContent}>{section.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Collapse;

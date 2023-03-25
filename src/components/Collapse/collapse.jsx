import React, { useState } from "react";
import ArrowDown from "../../../src/assets/images/arrowdown.png";
import ArrowUp from "../../../src/assets/images/arrowup.png";

function Collapse(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div
      className={
        props.page === "about"
          ? "about_collapse_section"
          : "lodgment_collapse_section"
      }
    >
      {props.sections.map((section, index) => (
        <div
          key={index}
          className={
            props.page === "about" ? "about_collapse" : "lodgment_collapse"
          }
        >
          <div
            className={
              props.page === "about"
                ? "about_collapse_header"
                : "lodgment_collapse_header"
            }
          >
            <p>{section.title}</p>
            <img
              src={index === activeIndex ? ArrowUp : ArrowDown}
              alt="Flèche"
              className="arrow-icon"
              onClick={() => handleClick(index)}
            />
          </div>
          {index === activeIndex &&
            (props.page === "about" || props.page === "lodgment") && (
              <div
                className={
                  props.page === "about"
                    ? "about_collapse_content"
                    : "lodgment_collapse_content"
                }
              >
                <p>{section.content}</p>
              </div>
            )}
          {index === activeIndex &&
            props.page === "lodgment" &&
            section.type === "equipments" && (
              <ul className="lodgment_collapse_list">
                {section.content.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;

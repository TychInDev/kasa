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
      className={`${props.page}_collapse_section`}
    >
      {props.sections.map((section, index) => (
        <div
          key={index}
          className={`${props.page}_collapse`}
        >
          <div
            className={`${props.page}_collapse_header`}
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
            `${props.page}_collapse_content` &&
            (
              <div
                className={`${props.page}_collapse_content`}
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

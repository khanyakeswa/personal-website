import React from "react";
import { useEffect } from "react";

function ProjectTag({ tagName }) {
  let tagColor = "";

  if ((tagName == "UX" || tagName == "SWE" || tagName == "Graphic Design" || tagName == "Industrial Design")) {
    tagColor = "rgba(160, 160, 160, 0.7)";
  } else if ((tagName == "SaaS")) {
    tagColor = "rgba(63, 132, 229, 0.7)";
  } else if ((tagName == "Hardware")) {
    tagColor = "rgba(83, 221, 108, 0.7)";
  } else if ((tagName == "E-Commerce")) {
    tagColor = "rgba(246, 174, 45, 0.7)";
  } else if ((tagName == "Lifestyle")) {
    tagColor = "rgba(105, 48, 109, 0.7)";
  } else if ((tagName == "Health")) {
    tagColor = "rgba(247, 85, 144, 0.7)";
  } else if ((tagName == "Interface")) {
    tagColor = "rgba(255, 218, 34, 0.7)";
  } else if ((tagName == "Fun")) {
    tagColor = "rgba(35, 240, 199, 0.7)";
  } else tagColor = "rgba(160, 160, 160, 0.7)";

  return (
    <div
      className="project-tag"
      style={{
        backgroundColor: `${tagColor}`,
      }}
    >
      <div className="label-symbol"></div>
      <p className="label-name">{tagName}</p>
    </div>
  );
}

export default ProjectTag;

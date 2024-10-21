import React from "react";
import { useRef, useEffect } from "react";

const ProjectFilterCategory = ({
  category,
  text,
  currentFilter,
  setCurrentFilter,
  setProjects,
  renderedProjects,
  projectData
}) => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef && myRef.current) {
      myRef.current.addEventListener("click", () => {
        setCurrentFilter(category);
        setProjects(projectData.filter((p) => {
          return (
            p.type.includes(category)
          )
        }))
      });
    }
  }, [myRef]);

  return (
    <div
      ref={myRef}
      className={currentFilter === category ? "filter current" : "filter"}
    >
      {text}
    </div>
  );
};

export default ProjectFilterCategory;

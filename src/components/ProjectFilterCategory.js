import React from "react";
import { useRef, useEffect } from "react";

const ProjectFilterCategory = ({
  category,
  text,
  currentFilter,
  setCurrentFilter,
}) => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef && myRef.current) {
      myRef.current.addEventListener("click", () => {
        setCurrentFilter(category);
        console.log(category)
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

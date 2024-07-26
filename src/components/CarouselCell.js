import React from "react";

const CarouselCell = ({ text, currentIndex, cellIndex }) => {
  let cellClass = "carousel-cell";
  if (currentIndex === cellIndex - 1) {
    cellClass = "carousel-cell visible";
  }
  return (
    <div className={cellClass}>
      {text}
    </div>
  );
};

export default CarouselCell;

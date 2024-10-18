"use client";

import React from "react";
import CarouselCell from "./carouselCell";
import { useState, useEffect } from "react";

function Carousel({ carouselAngle, setCarouselAngle }) {
  const cellText = [
    "Product Designer",
    "Visual Designer",
    "UX Engineer",
    "Industrial Designer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselScroll = () => {
    if (currentIndex === cellText.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
      setCarouselAngle(carouselAngle - 90);
    }, 2000);
    return () => clearInterval(interval);
  });

  //   let cells = [];
  //   const populateCells = () => {
  //     for (let i = cellText.length; i < cellText.length; i++) {
  //       const text = cellText[i];
  //       const newCell = <CarouselCell key={i} text={text} />;
  //       cells = [...cells, newCell];
  //     }
  //   };

  //   populateCells();
  let cellIndex = 0
  const cells = cellText.map((obj) => {
    cellIndex++;
    return <CarouselCell key={obj.id} text={obj} currentIndex={currentIndex} cellIndex={cellIndex}/>;
  });

  //   function rotateCarousel() {
  //     var angle = 90 * selectedIndex * -1;
  //     carousel.style.transform =
  //       "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  //   }

  return <>{cells}</>;
}

export default Carousel;

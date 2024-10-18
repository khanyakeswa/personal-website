"use client";

import Carousel from "./carousel";
import React from "react";
import { useState, useEffect} from "react";

const Sidebar = ({ scrollYPosition, mySidebar }) => {
  // var carousel = document.querySelector(".carousel");
  // var cells = carousel.querySelectorAll(".carousel-cell");
  // var cellCount; // cellCount set from cells-range input value
  // var selectedIndex = 0;
  // var cellWidth = carousel.offsetWidth;
  // var cellHeight = carousel.offsetHeight;
  // var isHorizontal = false;
  var rotateFn = "rotateX";
  var radius, theta;
  // // console.log( cellWidth, cellHeight );

  const [carouselAngle, setCarouselAngle] = useState(0);
  // let cellSize = 480
  radius = Math.round(80 / 2 / Math.tan(Math.PI / 4));
  let carouselTransform =
    "translateZ(" + -radius + "px) " + rotateFn + "(" + carouselAngle + "deg)";

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCarouselAngle(carouselAngle - 90);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // });

  useEffect(() => {
    const sidebarWidth = mySidebar.current.offsetWidth - 70;
    if (scrollYPosition > window.innerHeight * 0.5) {
      mySidebar.current.style.transform = `translateX(-${sidebarWidth}px)`;
    } else {
      mySidebar.current.style.transform = `translateX(0px)`;
    }
  }, [scrollYPosition, mySidebar]);

  return (
    <div ref={mySidebar} className="sidebar">
      <div className="top">
        <div className="title">
          <span className="name">
            Hi! I&apos;m Khanya <span className="name">Keswa,</span>
          </span>
          <div className="scene">
            <div className="carousel" style={{ transform: carouselTransform }}>
              <Carousel
                carouselAngle={carouselAngle}
                setCarouselAngle={setCarouselAngle}
              />
            </div>
          </div>
          <div className="underscore"></div>
          <div className="story">
            From Philly to Jo&apos;Burg and back. Now living, yapping, balling,
            exploring, and growing in Brooklyn, NYC. Currently looking for my
            next role.
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default Sidebar;

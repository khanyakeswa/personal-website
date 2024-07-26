"use client";

import Carousel from "./carousel";
import React from "react";
import { useState, useEffect } from "react";

const Sidebar = () => {
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
  radius = Math.round(80 / 2 / Math.tan(Math.PI / 4))
  let carouselTransform =
    "translateZ(" + -radius + "px) " + rotateFn + "(" + carouselAngle + "deg)";

    useEffect(() => {
      const interval = setInterval(() => {
        setCarouselAngle(carouselAngle - 90);
      }, 2000);
      return () => clearInterval(interval);
    });

  return (
    <div>
      <div className="sidebar">
        <div className="top">
          <div className="title">
            <div className="name">Hi! I&apos;m Khanya Keswa,</div>
            <div className="scene">
              <div className="carousel" style={{transform: carouselTransform}}>
                <Carousel carouselAngle={carouselAngle} setCarouselAngle={setCarouselAngle}/>
              </div>
            </div>
            <div className="underscore"></div>
          </div>
          <div className="portfolio-button-wrapper">
            <div className="portfolio-button">
              <div className="button-content">PROJECTS</div>
              <div className="button-graphic">
                <svg
                  width="6px"
                  height="9px"
                  viewBox="0 0 6 9"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="website_1"
                      transform="translate(-196.000000, -680.000000)"
                      fill="#E54E40"
                    >
                      <g
                        id="Group-3"
                        transform="translate(196.000000, 680.000000)"
                      >
                        <path
                          d="M3.045,3.58455 C3.378,3.87155 3.378,4.33455 3.045,4.62255 C2.089,5.44755 1.147,6.26055 0.192,7.07355 C-0.098,7.31055 -0.04,7.62355 0.236,7.89855 L0.38,8.01155 C0.728,8.31055 1.206,8.24855 1.554,7.94855 L5.406,4.62255 C5.739,4.33455 5.739,3.87155 5.406,3.58455 L1.553,0.25855 C1.206,-0.04145 0.728,-0.10345 0.38,0.19655 L0.235,0.32055 C-0.04,0.58355 -0.098,0.89655 0.192,1.13455 C1.147,1.94655 2.089,2.77155 3.045,3.58455"
                          id="Fill-1"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default Sidebar;

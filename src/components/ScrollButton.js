import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

function ScrollButton({ currentSection }) {
  const [aboveSection, setAboveSection] = useState("");
  const [belowSection, setBelowSection] = useState("");

  useEffect(() => {
    if (currentSection === "" || currentSection === "landing") {
      setAboveSection("landing");
      setBelowSection("projects");
    } else if (currentSection === "projects") {
      setAboveSection("landing");
      setBelowSection("about");
    } else if (currentSection === "about") {
      setAboveSection("projects");
      setBelowSection("latest-work");
    } else if (currentSection === "latest-work") {
      setAboveSection("projects");
      setBelowSection("latest-work");
    }
  }, [currentSection]);

  return (
    <div className="scroll-button">
      <Link href={`#${aboveSection}`}>
        <div className="scroll-up">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.21 5.66"
          >
            <path
              d="M3.58 2.61a.67.67 0 0 1 1 0L7.1 5.46c.24.29.55.24.82 0l.12-.14a.89.89 0 0 0-.07-1.18L4.65.29a.67.67 0 0 0-1 0L.25 4.1a.89.89 0 0 0-.06 1.18l.13.14c.26.28.57.33.81 0 .81-1 1.64-1.89 2.45-2.85"
              fill="#e44f40"
              data-name="website 1"
            />
          </svg>
        </div>
      </Link>
      <Link href={`#contact`}>
        <div className="portfolio-button-wrapper">
          <div className="portfolio-button">
            <div className="button-content">LET&apos;S TALK</div>
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
      </Link>
      <Link href={`#${belowSection}`}>
        <div className="scroll-down">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.21 5.66"
          >
            <path
              d="M4.62 3.05a.67.67 0 0 1-1 0c-.82-1-1.64-1.9-2.45-2.86C.93-.1.62-.04.35.24L.23.38A.88.88 0 0 0 .3 1.55l3.32 3.86a.67.67 0 0 0 1 0l3.33-3.86A.88.88 0 0 0 8.01.38L7.88.24c-.26-.28-.57-.34-.81-.05-.81 1-1.64 1.9-2.45 2.86"
              fill="#e44f40"
              data-name="website 1"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default ScrollButton;

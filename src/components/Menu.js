"use client";

import React from "react";
import { useState } from "react";
import NavbarLink from "./navbarLink";

function Menu({ currentSection, setCurrentSection, currentMedia }) {
  const [isOpen, setIsOPen] = useState(false);
  const linksClass = isOpen ? "links open" : "links";

  const sectionNames = ["Home", "About Me", "Projects", "Latest Work"];
  const links = sectionNames.map((obj) => {
    return <NavbarLink key={obj} section={obj} />;
  });
  return (
    <div>
      {currentMedia === "mobile" ? (
        <div className="hamburger-container">
          <div className="hamburger" onClick={menuToggle}></div>
          <div className={linksClass}>{links}</div>
        </div>
      ) : (
        <div className="links">{links}</div>
      )}
    </div>
  );
}

export default Menu;

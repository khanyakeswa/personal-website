"use client";

import React, { useRef } from "react";
import { useState, useEffect } from "react";
import NavbarLink from "./navbarLink";

function Menu({
  currentSection,
  setCurrentSection,
  scrollYPosition,
  currentMedia,
  mySidebar,
}) {
  const [isOpen, setIsOPen] = useState(false);
  const linksClass = isOpen ? "links open" : "links";
  const navLinks = useRef();

  useEffect(() => {
    const sidebarWidth = mySidebar.current.offsetWidth;
    if (scrollYPosition > window.innerHeight * 0.5) {
      navLinks.current.style.transform = `translateX(70px)`;
    } else {
      navLinks.current.style.transform = `translateX(${sidebarWidth}px)`;
    }
  }, [mySidebar, scrollYPosition]);

  const sections = [
    { id: 0, hash: "landing", text: "Home" },
    { id: 1, hash: "projects", text: "Projects" },
    // { id: 2, hash: "about", text: "About" },
    // { id: 3, hash: "latest-work", text: "Latest Work" },
  ];
  const links = sections.map((obj) => {
    return <NavbarLink key={obj.id} section={obj} />;
  });
  return (
    <div className="navbar">
      <div className="linksContainer">
        {currentMedia === "mobile" ? (
          <div className="hamburger-container">
            <div className="hamburger" onClick={menuToggle}></div>
            <div className={linksClass}>{links}</div>
          </div>
        ) : (
          <div ref={navLinks} className="links">
            {links}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;

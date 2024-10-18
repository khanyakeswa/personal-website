import Image from "next/image";
import Head from "next/head";
//
import Sidebar from "@/components/sidebar";
import Menu from "@/components/menu";
import ScrollButton from "@/components/ScrollButton";
//
import Landing from "./landing";
import AboutMe from "./about";
import Projects from "./projects";
import LatestWork from "./latestWork";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("");
  const [currentMedia, setCurrentMedia] = useState("desktop");
  const [darkmode, setDarkmode] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const mySidebar = useRef();

  const handleScroll = () => {
    const newScrollYPosition = window.scrollY;
    const sections = document.querySelectorAll(".section");
    const sectionsArray = Array.from(sections);
    const currentSection = sectionsArray.find((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      return window.scrollY >= sectionTop && window.scrollY < sectionBottom;
    });
    setScrollYPosition(newScrollYPosition);
    if (currentSection) {
      setCurrentSection(currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setWindowHeight(window.innerHeight * 0.5);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Khanya Keswa's Personal Website" />
        <title>Khanya Keswa | Designer & Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Khanya.dev" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={scrollYPosition > windowHeight ? "collapsed" : null}>
        <div className="logo"></div>
        <div
          className="darkmode-toggle"
          onClick={() => setDarkmode(!darkmode)}
        ></div>
        <ScrollButton currentSection={currentSection} />
        {/* <div class="scroll-indicator">
          <div class="dots">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.79 123.3"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                class="dot-7"
                cx="4.39"
                cy="118.91"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-6"
                cx="4.39"
                cy="99.82"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-5"
                cx="4.39"
                cy="80.73"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-4"
                cx="4.39"
                cy="61.64"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-3"
                cx="4.39"
                cy="42.56"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-2"
                cx="4.39"
                cy="23.48"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-1"
                cx="4.39"
                cy="4.39"
                r="4.39"
                fill="#d1d3d4"
              />
            </svg>
          </div>
        </div> */}
        {/* <div class="navbar">
        <div class="links">
          <div class="link home">Home</div>
          <div class="link about-me">About Me</div>
          <div class="link process">My Process</div>
          <div class="link portfolio">Portfolio</div>
          <div class="link latest-work">Latest Work</div>
        </div>
        <div class="link-underscore"></div>
        <div class="hamburger-menu"></div>
      </div> */}
        <div className="home-wrapper">
          <Sidebar scrollYPosition={scrollYPosition} mySidebar={mySidebar} />
          <Menu
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            currentMedia={currentMedia}
            scrollYPosition={scrollYPosition}
            mySidebar={mySidebar}
          />
        </div>
        <Landing scrollYPosition={scrollYPosition} />
        <Projects
          scrollYPosition={scrollYPosition}
          windowHeight={windowHeight}
          currentSection={currentSection}
        />
        <AboutMe />
        <LatestWork />
      </main>
    </>
  );
}

import React from "react";
import ProjectTile from "../components/ProjectTile";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProjectFilterCategory from "../components/ProjectFilterCategory";
import placeholderImage from "../../public/assets/imgs/project1-preview.jpg";

function Projects({currentSection, scrollYPosition, windowHeight }) {
  const [currentProject, setCurrentProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const projectModalBackdropRef = useRef(null);
  const filterCancelRef = useRef(null);
  const projectGrid = useRef(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [renderedProjects, setProjects] = useState([]);

  const filterPosition = () => {
    switch (currentFilter) {
      case "website":
        return "0";
      case "app":
        return "100%";
      case "cs":
        return "200%";
      case "etc":
        return "300%";
      default:
        return "-100%";
    }
  };

  const gridScrollback = () => {
      projectGrid.current.scrollLeft = 0;
  }
  // useEffect(() => {
  //   projectModalBackdropRef.current.addEventListener('click', handleClick);
  //   return () => {
  //     myRef.current.removeEventListener('click', handleClick);
  //   };
  // }, []);

  useEffect(() => {
    // for (let i = 0; i < projectData.length; i++) {
    //   const project = document.getElementById(`project-${i + 1}`);
    //   project.addEventListener("click", () => {
    //     setCurrentProject(i);
    //     setModalOpen(true);
    //   });
    // }
    gridScrollback();
    filterCancelRef.current.addEventListener("click", () => {
      setCurrentFilter(null);
    });
    filterCancelRef.current.addEventListener("hover", () => {
      filterCancelRef.current.style.opacity = "1";
    });
    projectGrid.current.addEventListener("scroll", () => {
      console.log(projectGrid.current.scrollLeft);
    });
    return () => {
      filterCancelRef.current.removeEventListener("click", () => {
        setCurrentFilter(null);
      });
    };
  }, []);

  const projectData = [
    {
      id: 0,
      title: "Project 1",
      description: "This is the first project",
      image: "project1-preview",
      hero: "project1-hero",
      type: "cs",
    },
    {
      id: 1,
      title: "Project 2",
      description: "This is the second project",
      image: "project2-preview",
      hero: "project2-hero",
      type: "fs",
    },
    {
      id: 2,
      title: "Project 3",
      description: "This is the third project",
      image: "project3-preview",
      hero: "project3-hero",
      type: "fs",
    },
    {
      id: 3,
      title: "Project 4",
      description: "This is the fourth project",
      image: "project4-preview",
      hero: "project4-hero",
      type: "fs",
    },
    {
      id: 4,
      title: "Project 5",
      description: "This is the fifth project",
      image: "project5-preview",
      hero: "project5-hero",
      type: "fs",
    },
    {
      id: 5,
      title: "Project 6",
      description: "This is the sixth project",
      image: "project6-preview",
      hero: "project6-hero",
      type: "cs",
    },
    {
      id: 6,
      title: "Project 7",
      description: "This is the seventh project",
      image: "project7-preview",
      hero: "project7-hero",
      type: "fs",
    },
    {
      id: 7,
      title: "Project 8",
      description: "This is the eighth project",
      image: "project8-preview",
      hero: "project8-hero",
      type: "fs",
    },
    {
      id: 8,
      title: "Project 9",
      description: "This is the ninth project",
      image: "project9-preview",
      hero: "project9-hero",
      type: "fs",
    },
    {
      id: 9,
      title: "Project 10",
      description: "This is the tenth project",
      image: "project10-preview",
      hero: "project10-hero",
      type: "fs",
    },
  ];
  const projectFilters = [
    {
      id: 1,
      name: "website",
      text: "Websites",
    },
    {
      id: 2,
      name: "app",
      text: "Apps",
    },
    {
      id: 3,
      name: "cs",
      text: "Case Studies",
    },
    {
      id: 4,
      name: "etc",
      text: "...",
    },
  ];

  const projects = projectData.map((project) => {
    return (
      <ProjectTile
        key={project.id}
        sequence={project.id}
        project={project}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        scrollYPosition={scrollYPosition}
        windowHeight={windowHeight}
      />
    );
  });

  const filters = projectFilters.map((filter) => {
    return (
      <ProjectFilterCategory
        key={filter.id}
        category={filter.name}
        text={filter.text}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    );
  });

  return (
    <>
      <div className={modalOpen ? "project-modal visible" : "project-modal"}>
        <div className="content">
          <div className="project-document">
            <Image
              src={placeholderImage}
              alt={projectData[currentProject].title}
              width={800}
              height={600}
              placeholder="blur"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div ref={projectModalBackdropRef} className="backdrop"></div>
        <div className="content"></div>
      </div>
      <div id="projects" className="section portfolio">
        <div className="project-header">
          <div className="title">
            Ideas Rooted in Reality,
            <span> Crafted with Care</span>
          </div>
          <div className="content">
            <div
              className="filter-cancel"
              style={{ opacity: `${currentFilter ? 1 : 0}` }}
            >
              <svg
                ref={filterCancelRef}
                style={{ pointerEvents: currentFilter ? "all" : "none" }}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 80 80"
              >
                <g>
                  <g id="Layer_1">
                    <path
                      className="cls-1"
                      d="M1.7,1.7C3.9-.6,7.5-.6,9.8,1.7l30.2,30.2L70.2,1.7c2.2-2.2,5.8-2.2,8.1,0,2.2,2.2,2.2,5.9,0,8.1l-30.2,30.2,30.2,30.2c2.2,2.2,2.2,5.8,0,8.1-2.2,2.2-5.9,2.2-8.1,0l-30.2-30.2-30.2,30.2c-2.2,2.2-5.8,2.2-8.1,0-2.2-2.2-2.2-5.9,0-8.1l30.2-30.2L1.7,9.8c-2.2-2.2-2.2-5.8,0-8.1Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="filter-container">
              {filters}
              <div
                style={{ transform: `translateX(${filterPosition()})` }}
                className={
                  currentFilter
                    ? "filter-highlight enabled"
                    : "filter-highlight"
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="scroll-block"></div>
        <div ref={projectGrid} className="projects-grid-wrapper">
          <div className="projects-grid">
            <div className="grid-placeholder"></div>
            {projects}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

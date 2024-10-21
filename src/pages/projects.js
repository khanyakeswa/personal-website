import React from "react";
import ProjectTile from "../components/ProjectTile";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProjectFilterCategory from "../components/ProjectFilterCategory";
import ProjectModal from "@/components/ProjectModal";

function Projects({
  currentSection,
  scrollYPosition,
  windowHeight,
  projectView,
  setProjectView,
}) {
  const [currentProject, setCurrentProject] = useState(0);
  const projectModalBackdropRef = useRef(null);
  const filterCancelRef = useRef(null);
  const projectGrid = useRef(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [renderedProjects, setProjects] = useState([]);

  const filterPosition = () => {
    switch (currentFilter) {
      case "ws":
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
  };
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
    setProjects(projectData)
    gridScrollback();
    filterCancelRef.current.addEventListener("click", () => {
      setCurrentFilter(null);
      setProjects(projectData)
    });
    filterCancelRef.current.addEventListener("hover", () => {
      filterCancelRef.current.style.opacity = "1";
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
      title: "Co-Care",
      abb: "cc",
      description: "This is the second project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".cs",
      tags: ["UX", "SaaS", "Lifestyle"],
    },
    {
      id: 1,
      title: "True Finals Landing Page",
      abb: "tf",
      description: "This is the first project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".ws",
      tags: ["UX", "SaaS"],
    },
    {
      id: 2,
      title: "D&D Party Creator",
      description: "This is the fourth project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".ws",
      tags: ["UX", "SWE", "Fun"],
    },
    {
      id: 3,
      title: "PeopleSpheres",
      abb: "ps",
      description: "This is the third project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".app",
      tags: ["UX", "Interface"],
    },
    {
      id: 4,
      title: "Garmin Watch",
      description: "This is the fifth project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".cs",
      tags: ["", ""],
    },
    {
      id: 5,
      title: "Co-Care",
      description: "This is the sixth project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".cs",
      tags: ["", ""],
    },
    {
      id: 6,
      title: "Project 7",
      description: "This is the seventh project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".fs",
      tags: ["", ""],
    },
    {
      id: 7,
      title: "Project 8",
      description: "This is the eighth project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".etc",
      tags: ["", ""],
    },
    {
      id: 8,
      title: "Project 9",
      description: "This is the ninth project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".fs",
      tags: ["", ""],
    },
    {
      id: 9,
      title: "Project 10",
      description: "This is the tenth project",
      image: "preview.jpg",
      hero: "hero.jpg",
      type: ".fs",
      tags: ["", ""],
    },
  ];
  const projectFilters = [
    {
      id: 1,
      name: "ws",
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
      text: "Etc.",
    },
  ];

  const projects = renderedProjects.map((project) => {
    return (
      <ProjectTile
        key={project.id}
        sequence={renderedProjects.indexOf(project)}
        project={project}
        currentProject={currentProject}
        projectData={projectData}
        setCurrentProject={setCurrentProject}
        setProjects={setProjects}
        projectView={projectView}
        setProjectView={setProjectView}
        renderedProjects={renderedProjects}
        scrollYPosition={scrollYPosition}
        windowHeight={windowHeight}
        projectModalBackdropRef={projectModalBackdropRef}
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
        setProjects={setProjects}
        renderedProjects={renderedProjects}
        projectData={projectData}
      />
    );
  });

  return (
    <>
      {!projectView ? (
        <></>
      ) : (<ProjectModal
        projectModalBackdropRef={projectModalBackdropRef}
        projectData={projectData}
        currentProject={currentProject}
        projectView={projectView}
        setProjectView={setProjectView}
        project={projectData[currentProject]}
      />
      )}
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

import React, { useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import ProjectTag from "./ProjectTag";

function ProjectTile({
  sequence,
  scrollYPosition,
  windowHeight,
  project,
  currentProject,
  projectData,
  setCurrentProject,
  projectView,
  setProjectView,
  projectModalBackdropRef
}) {
  const myTile = useRef(null);

  useEffect(() => {
    myTile.current.addEventListener("click", (evt) => {
      handleProjectClick(evt.target.id);
      console.log(sequence)
    });
  }, [myTile]);

  const tags = project.tags.map((tag) => {
    return <ProjectTag key={tag.id} tagName={tag} />;
  });

  const handleProjectClick = (projectId) => {
    setCurrentProject(projectId);
    if (!projectView) {
      setProjectView(true);
    }
  };
  
  return (
    <div
      id={`${project.id}`}
      ref={myTile}
      style={{
        backgroundPositionY: `${
          (scrollYPosition - (windowHeight * 2)) / (project.type === "cs" ? "4" : "6")
        }px`,
        gridArea: `project-${sequence + 1}`,
        animationDelay: `${0 + (0.2 * sequence)}s`,
        backgroundImage: `url(/assets/imgs/${project.abb}/preview.jpg`,
        backgroundSize: "cover"
      }}
      className={
        project.id % 2 == 0
          ? "project-tile-wrapper shadow"
          : "project-tile-wrapper"
      }
    >
      <div className="tags-container">{tags}</div>
      <div className="project-label">
        <div className="project-tile_title">{project.title}</div>
        <div className="project-tile_description">{project.description}</div>
        <div className="project-tags-wrapper"></div>
      </div>
      <div className="project-label-shadow"></div>
      {/* <div className="project-image-wrapper">
          <Image
            src="/assets/imgs/project1-preview.jpg"
            alt={project.title}
            width={800}
            height={600}
            style={{
              height: "200%",
              transform: `translateY(${(scrollYPosition - windowHeight) / 3}px)`,
              objectFit: "cover",
            }}
          />
        </div> */}
    </div>
  );
}

export default ProjectTile;

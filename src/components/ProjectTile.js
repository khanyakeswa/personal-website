import React from "react";
import Image from "next/image";

function ProjectTile({
  scrollYPosition,
  windowHeight,
  project,
  currentProject,
  setCurrentProject,
}) {
  return (
    <div
      style={{
        backgroundPositionY:  `${(scrollYPosition - windowHeight) / (project.type === "cs" ? "3" : "5")}px`,
        gridArea: `project-${project.id + 1}`,
      }}
      className={
        project.id % 2 == 0
          ? "project-tile-wrapper shadow"
          : "project-tile-wrapper"
      }
    >
      <div className="project-label">
        <div className="project-tile_title">{project.title}</div>
        <div className="project-tile_description">{project.description}</div>
        <div className="project-tags-wrapper"></div>
      </div>
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
